import { resolveTitleFromToken } from '@mdit-vue/shared'
import fs from 'fs-extra'
import { LRUCache } from 'lru-cache'
import path from 'path'
import { slash, EXTERNAL_URL_RE } from './shared'
import { basename, dirname } from 'path'
import { spawn } from 'cross-spawn'
const gitTimestampCache = new Map<string, number>()
function getGitTimestamp(file: string) {
    const cached = gitTimestampCache.get(file)
    if (cached) return cached

    return new Promise<number>((resolve, reject) => {
        const cwd = dirname(file)
        if (!fs.existsSync(cwd)) return resolve(0)
        const fileName = basename(file)
        const child = spawn('git', ['log', '-1', '--pretty="%ai"', fileName], {
            cwd
        })
        let output = ''
        child.stdout.on('data', (d) => (output += String(d)))
        child.on('close', () => {
            const timestamp = +new Date(output)
            gitTimestampCache.set(file, timestamp)
            resolve(timestamp)
        })
        child.on('error', reject)
    })
}
function processIncludes(
    srcDir: string,
    src: string,
    file: string,
    includes: string[]
): string {
    const includesRE = /<!--\s*@include:\s*(.*?)\s*-->/g
    const rangeRE = /\{(\d*),(\d*)\}$/
    return src.replace(includesRE, (m: string, m1: string) => {
        if (!m1.length) return m

        const range = m1.match(rangeRE)
        range && (m1 = m1.slice(0, -range[0].length))
        const atPresent = m1[0] === '@'
        try {
            const includePath = atPresent
                ? path.join(srcDir, m1.slice(m1[1] === '/' ? 2 : 1))
                : path.join(path.dirname(file), m1)
            let content = fs.readFileSync(includePath, 'utf-8')
            if (range) {
                const [, startLine, endLine] = range
                const lines = content.split(/\r?\n/)
                content = lines
                    .slice(
                        startLine ? parseInt(startLine, 10) - 1 : undefined,
                        endLine ? parseInt(endLine, 10) : undefined
                    )
                    .join('\n')
            }
            includes.push(slash(includePath))
            // recursively process includes in the content
            return processIncludes(srcDir, content, includePath, includes)
        } catch (error) {
            return m // silently ignore error if file is not present
        }
    })
}


import {
    createMarkdownRenderer,
    type MarkdownOptions,
    type MarkdownRenderer
} from './markdown/markdown'

const cache = new LRUCache<string, MarkdownCompileResult>({ max: 1024 })

export interface MarkdownCompileResult {
    vueSrc: string
    pageData: any,
    deadLinks: { url: string; file: string }[]
    includes: string[]
}

export function clearCache(file?: string) {
    if (!file) {
        cache.clear()
        return
    }

    file = JSON.stringify({ file }).slice(1)
    cache.find((_, key) => key.endsWith(file!) && cache.delete(key))
}
type CreateMarkdownToVueRenderFnOptions={
    srcDir: string,
    options: MarkdownOptions,
    pages: string[],
    userDefines: Record<string, any> | undefined,
    isBuild:boolean,
    base:string,
    includeLastUpdatedData:boolean ,
    cleanUrls: boolean,
    siteConfig:any
}
export async function createMarkdownToVueRenderFn(
    renderoptions: CreateMarkdownToVueRenderFnOptions
) {
    let { srcDir, options, pages, userDefines, isBuild, base, includeLastUpdatedData, cleanUrls, siteConfig, } = renderoptions
    const md = await createMarkdownRenderer(
        srcDir,
        options,
        base,
        siteConfig?.logger
    )
    pages = pages.map((p) => slash(p.replace(/\.md$/, '')))
    const replaceRegex = genReplaceRegexp(userDefines, isBuild)

    return async (
        src: string,
        file: string,
        publicDir: string
    ): Promise<MarkdownCompileResult> => {
        const fileOrig = file
        const alias =
            siteConfig?.rewrites.map[file] || // virtual dynamic path file
            siteConfig?.rewrites.map[file.slice(srcDir.length + 1)]
        file = alias ? path.join(srcDir, alias) : file
        const relativePath = slash(path.relative(srcDir, file))
        const cacheKey = JSON.stringify({ src, file: fileOrig })

        if (isBuild || options.cache !== false) {
            const cached = cache.get(cacheKey)
            if (cached) {
                return cached as unknown as any
            }
        }
        // resolve params for dynamic routes
        let params
        src = src.replace(
            /^__VP_PARAMS_START([^]+?)__VP_PARAMS_END__/,
            (_, paramsString) => {
                params = JSON.parse(paramsString)
                return ''
            }
        )

        // resolve includes
        let includes: string[] = []
        src = processIncludes(srcDir, src, fileOrig, includes)

        // reset env before render
        const env: any = {
            path: file,
            relativePath,
            cleanUrls,
            includes,
            realPath: fileOrig
        }
        const html = md.render(src, env)
        const {
            frontmatter = {},
            headers = [],
            links = [],
            sfcBlocks,
            title = ''
        } = env

        // validate data.links
        const deadLinks: MarkdownCompileResult['deadLinks'] = []
        const recordDeadLink = (url: string) => {
            deadLinks.push({ url, file: path.relative(srcDir, fileOrig) })
        }

        function shouldIgnoreDeadLink(url: string) {
            if (!siteConfig?.ignoreDeadLinks) {
                return false
            }
            if (siteConfig.ignoreDeadLinks === true) {
                return true
            }
            if (siteConfig.ignoreDeadLinks === 'localhostLinks') {
                return url.replace(EXTERNAL_URL_RE, '').startsWith('//localhost')
            }

            return siteConfig.ignoreDeadLinks.some((ignore:any) => {
                if (typeof ignore === 'string') {
                    return url === ignore
                }
                if (ignore instanceof RegExp) {
                    return ignore.test(url)
                }
                if (typeof ignore === 'function') {
                    return ignore(url)
                }
                return false
            })
        }

        if (links) {
            const dir = path.dirname(file)
            for (let url of links) {
                if (/\.(?!html|md)\w+($|\?)/i.test(url)) continue

                url = url.replace(/[?#].*$/, '').replace(/\.(html|md)$/, '')
                if (url.endsWith('/')) url += `index`
                let resolved = decodeURIComponent(
                    slash(
                        url.startsWith('/')
                            ? url.slice(1)
                            : path.relative(srcDir, path.resolve(dir, url))
                    )
                )
                resolved =
                    siteConfig?.rewrites.inv[resolved + '.md']?.slice(0, -3) || resolved
                if (
                    !pages.includes(resolved) &&
                    !fs.existsSync(path.resolve(dir, publicDir, `${resolved}.html`)) &&
                    !shouldIgnoreDeadLink(url)
                ) {
                    recordDeadLink(url)
                }
            }
        }

        let pageData: any = {
            title: inferTitle(md, frontmatter, title),
            titleTemplate: frontmatter.titleTemplate as any,
            description: inferDescription(frontmatter),
            frontmatter,
            headers,
            params,
            relativePath,
            filePath: slash(path.relative(srcDir, fileOrig))
        }

        if (includeLastUpdatedData) {
            pageData.lastUpdated = await getGitTimestamp(fileOrig)
        }

        if (siteConfig?.transformPageData) {
            const dataToMerge = await siteConfig.transformPageData(pageData, {
                siteConfig
            })
            if (dataToMerge) {
                pageData = {
                    ...pageData,
                    ...dataToMerge
                }
            }
        }

        const vueSrc = [
            ...injectPageDataCode(
                sfcBlocks?.scripts.map((item) => item.content) ?? [],
                pageData,
                replaceRegex
            ),
            `<template><div>${replaceConstants(
                html,
                replaceRegex,
                vueTemplateBreaker
            )}</div></template>`,
            ...(sfcBlocks?.styles.map((item) => item.content) ?? []),
            ...(sfcBlocks?.customBlocks.map((item) => item.content) ?? [])
        ].join('\n')



        const result = {
            vueSrc,
            pageData,
            deadLinks,
            includes
        }
        if (isBuild || options.cache !== false) {
            cache.set(cacheKey, result)
        }
        return result
    }
}

const scriptRE = /<\/script>/
const scriptLangTsRE = /<\s*script[^>]*\blang=['"]ts['"][^>]*/
const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/
const scriptClientRE = /<\s*script[^>]*\bclient\b[^>]*/
const defaultExportRE = /((?:^|\n|;)\s*)export(\s*)default/
const namedDefaultExportRE = /((?:^|\n|;)\s*)export(.+)as(\s*)default/
const jsStringBreaker = '\u200b'
const vueTemplateBreaker = '<wbr>'

function genReplaceRegexp(
    userDefines: Record<string, any> = {},
    isBuild: boolean
): RegExp {
    // `process.env` need to be handled in both dev and build
    // @see https://github.com/vitejs/vite/blob/cad27ee8c00bbd5aeeb2be9bfb3eb164c1b77885/packages/vite/src/node/plugins/clientInjections.ts#L57-L64
    const replacements = ['process.env']
    if (isBuild) {
        replacements.push('import.meta', ...Object.keys(userDefines))
    }
    return new RegExp(
        `\\b(${replacements
            .map((key) => key.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'))
            .join('|')})`,
        'g'
    )
}

/**
 * To avoid env variables being replaced by vite:
 * - insert `'\u200b'` char into those strings inside js string (page data)
 * - insert `<wbr>` tag into those strings inside html string (vue template)
 *
 * @see https://vitejs.dev/guide/env-and-mode.html#production-replacement
 */
function replaceConstants(str: string, replaceRegex: RegExp, breaker: string) {
    return str.replace(replaceRegex, (_) => `${_[0]}${breaker}${_.slice(1)}`)
}

function injectPageDataCode(
    tags: string[],
    data,
    replaceRegex: RegExp
) {
    const dataJson = JSON.stringify(data)
    const code = `\nexport const __pageData = JSON.parse(${JSON.stringify(
        replaceConstants(dataJson, replaceRegex, jsStringBreaker)
    )})`

    const existingScriptIndex = tags.findIndex((tag) => {
        return (
            scriptRE.test(tag) &&
            !scriptSetupRE.test(tag) &&
            !scriptClientRE.test(tag)
        )
    })

    const isUsingTS = tags.findIndex((tag) => scriptLangTsRE.test(tag)) > -1

    if (existingScriptIndex > -1) {
        const tagSrc = tags[existingScriptIndex]
        // user has <script> tag inside markdown
        // if it doesn't have export default it will error out on build
        const hasDefaultExport =
            defaultExportRE.test(tagSrc) || namedDefaultExportRE.test(tagSrc)
        tags[existingScriptIndex] = tagSrc.replace(
            scriptRE,
            code +
            (hasDefaultExport
                ? ``
                : `\nexport default {name:${JSON.stringify(data.relativePath)}}`) +
            `</script>`
        )
    } else {
        tags.unshift(
            `<script ${isUsingTS ? 'lang="ts"' : ''
            }>${code}\nexport default {name:${JSON.stringify(
                data.relativePath
            )}}</script>`
        )
    }

    return tags
}

const inferTitle = (
    md: MarkdownRenderer,
    frontmatter: Record<string, any>,
    title: string
) => {
    if (typeof frontmatter.title === 'string') {
        const titleToken = md.parseInline(frontmatter.title, {})[0]
        if (titleToken) {
            return resolveTitleFromToken(titleToken, {
                shouldAllowHtml: false,
                shouldEscapeText: false
            })
        }
    }
    return title
}

const inferDescription = (frontmatter: Record<string, any>) => {
    const { description, head } = frontmatter

    if (description !== undefined) {
        return description
    }

    return (head && getHeadMetaContent(head, 'description')) || ''
}

const getHeadMetaContent = (
    head: any[],
    name: string
): string | undefined => {
    if (!head || !head.length) {
        return undefined
    }

    const meta = head.find(([tag, attrs = {}]) => {
        return tag === 'meta' && attrs.name === name && attrs.content
    })

    return meta && meta[1].content
}
