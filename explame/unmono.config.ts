import {defineConfig} from 'unmono'
/**
 * components/所有markdown 都自动识别为侧边栏，路由地址就是文件地址
 */
export default defineConfig({
    /**包导出出口 */
    entry:'components/index.ts',
    documentBase:'/',
    documentHome:'./readme.md',
})