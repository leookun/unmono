import { type Plugin } from 'vite'
import {
    clearCache,
    createMarkdownToVueRenderFn,
    type MarkdownCompileResult
} from './markdownToVue'

const defaultConfig = {
    /**用户自定义的配置，稍后在插件上下文可以访问到它 */
    unmonoUserConfig: {

    },
    /**路径别名 */
    alias: {

    },
    /**全局变量 */
    define: {

    },
    /**依赖欲构建 */
    optimizeDeps: {
        include: ['vue', 'vitepress > @vue/devtools-api'],
        exclude: ['@docsearch/js', 'vitepress']
    }
}
export const SITE_DATA_ID = '@unmono/doc'
export const SITE_DATA_REQUEST_PATH = '/' + SITE_DATA_ID
let markdownToVue: Awaited<ReturnType<typeof createMarkdownToVueRenderFn>>
const ROOT = process.cwd()
const unmonoDocSSGPlugin = (): Plugin => {
    return {
        name: 'unmono-doc-ssg-plugin',
        
        async configResolved() {
            markdownToVue = await createMarkdownToVueRenderFn({
                srcDir: ROOT,
                options:{},
                pages:[],
                userDefines:{},
                isBuild:true,
                includeLastUpdatedData:false,
                cleanUrls:true,
                siteConfig:{},
                base:'/',
            })
        },
        config: () => defaultConfig,
        resolveId(id) {
            if (id === SITE_DATA_REQUEST_PATH) {
                return SITE_DATA_REQUEST_PATH
            }
        },
        load(id) {
            if (id === SITE_DATA_REQUEST_PATH) {
                return `export default {}`
            }
           return null
        },
        async transform(code, id, options) {
            if (id.endsWith('.md')){
                // transform .md files into vueSrc so plugin-vue can handle it
                const { vueSrc, deadLinks, includes } = await markdownToVue(
                    code,
                    id,
                    '/'
                )
                if (includes.length) {
                    includes.forEach((i) => {
                        this.addWatchFile(i)
                    })
                }
                const processClientJS = (code: string, id: string) => {
                    const scriptClientRE = /<script\b[^>]*client\b[^>]*>([^]*?)<\/script>/
                    return scriptClientRE.test(code)
                        ? code.replace(scriptClientRE, (_, content) => {
                            return `\n`.repeat(_.split('\n').length - 1)
                        })
                        : code
                }

                return processClientJS(vueSrc, id)
            }
            
        },
    }
}
export default unmonoDocSSGPlugin