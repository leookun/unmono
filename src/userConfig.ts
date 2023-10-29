import { resolve } from 'path'
import { type DefaultTheme, resolveConfig } from 'vitepress-library'
import { builtinModules } from 'module'
import fs from 'fs'
export function merge(...objects) {
    return objects.reduce((result, obj) => {
        return Object.keys(obj).reduce((merged, key) => {
            if (!result.hasOwnProperty(key)) {
                merged[key] = obj[key];
            }
            return merged;
        }, result);
    }, {});
}
export type VitepressConfig = Awaited<ReturnType<typeof resolveConfig>>
export type UserConfig={
    entry: string[]
    output: string
    publicPath: string
    documentPath: string
    documentBuildPath: string
    description: string
    title: string
    dts: boolean
    tsconfig: string
}
export const getUseConfig =()=>{
    const PWD = resolve(process.cwd(),'./')
    const PKG = JSON.parse(fs.readFileSync(resolve(PWD, './package.json'), 'utf-8'))
    const DOCUMENT_ROOT = resolve(PWD, PKG.unmono?.documentPath || '.')
    const external = [
        ...Object.keys(PKG.dependencies || {}),
        ...Object.keys(PKG.peerDependencies || {}),
        ...builtinModules.flatMap((m) =>
            m.includes('punycode') ? [] : [m, `node:${m}`]
        )
    ]
    const useConfig: UserConfig = merge(PKG.unmono, {
        // 构建入口(必填) 
        entry: ["components/index.ts"],
        // 构建位置(默认为dist-lib目录) 
        output: "dist-lib",
        // 文档publicPath路径(默认为/)
        publicPath: "/",
        // 文档扫描路径(默认为.) 
        documentPath: ".",
        // 文档扫构建路径(默认为.unmono/dist) 
        documentBuildPath: resolve(DOCUMENT_ROOT, '.unmono/dist'),
        // 文档页描述(默认为空,用于seo) 
        description: "unmono description",
        // 文档页标题(默认为Unmono) 
        title: "Unmono",
        // 是否构建d.ts (默认为false,如果设为true,则需要配置tsconfig) 
        dts: true,
        // 指定d.ts的tsconfig路径 (默认为packages同级的tsconfig.json) 
        tsconfig: "tsconfig.json"
    })
    return { DOCUMENT_ROOT, PKG, PWD, useConfig, external }
}
export function readTitleAndGroup(content: string) {

    // 使用正则表达式匹配 title 和 group，限定在 --- 之间
    const match = content.match(/---\s*([\s\S]*?)\s*---/);

    if (match) {
        const innerContent = match[1];
        // 在匹配到的内容中再匹配 title 和 group
        var titleMatch = innerContent.match(/(\n|^)title:(.+?)\n/);
        var groupMatch = innerContent.match(/(\n|^)group:(.+?)\n/);
        const title = titleMatch?.[2]?.trim?.() || null;
        const group = groupMatch?.[2]?.trim?.() || null;

        return {
            title,
            group
        }
    }
    return {
        title: null,
        group: null,
    }

}

export function groupedBy(originalArray, groupName) {
    return originalArray.reduce((result, currentValue) => {
        const category = currentValue[groupName]
        if (category && !result[category]) {
            result[category] = [];
        }
        if (result[category]) {
            result[category].push(currentValue);
        }
        return result;
    }, {});
}

export const hookUserConfig = (config: VitepressConfig) =>{
    const { DOCUMENT_ROOT, useConfig, PWD } = getUseConfig()
    config.cacheDir = resolve(DOCUMENT_ROOT, '.unmono/cache')
    config.outDir = resolve(PWD, useConfig.documentBuildPath)
    config.tempDir = resolve(DOCUMENT_ROOT, "./.unmono/.temp")
    config.site.lang = 'zh_CN'
    config.site.base = useConfig.publicPath || '/'
    config.site.description = useConfig.description || 'unmono description'
    config.site.title = useConfig.title || 'Unmono'
    config.site.appearance = true

    const sidebar = config.pages.filter(name => name !== 'index.md').map((pageName) => {
        const { title, group } = readTitleAndGroup(fs.readFileSync(resolve(DOCUMENT_ROOT, `${pageName}`), 'utf8'))
        return {
            group: group,
            text: title || pageName,
            link: pageName
        }
    })
    const groupSideBar = groupedBy(sidebar, 'group')
    const groups = Object.keys(groupSideBar)
    let finalSidebar: any[] = []
    if (groups.length) {
        finalSidebar = groups.map(group => {
            return {
                text: group,
                collapsed: false,
                link: groupSideBar[group][0].link,
                items: groupSideBar[group]
            }
        })
    } else {
        finalSidebar = sidebar
    }
    config.tempDir = resolve(DOCUMENT_ROOT, '.unmono/.temp')

    config.site.themeConfig = {
        lang: 'zh_CN',
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索"
                    },
                    modal: {
                        resetButtonTitle: '重新搜索',
                        backButtonTitle: '返回',
                        noResultsText: '无内容',
                        footer: {
                            selectText: '选择',
                            navigateText: "选择",
                            closeText: "关闭",
                        }
                    }
                }
            }
        },
        outlineTitle: '大纲',
        notFound: {
            quote: '但如果你不改变你的方向，如果你继续寻找，你可能会在你前进的地方结束。',
            title: "页面走丢了",
            linkText: '回到首页',
        },
        sidebar: finalSidebar,
        nav: [
            {
                text: "首页",
                link: "/",
            },
            {
                text: '文档',
                link: finalSidebar?.[0]?.link
            }
        ]
    } as DefaultTheme.Config
    return config as VitepressConfig
}