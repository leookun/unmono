#!/usr/bin/env node
import { createVitePressPlugin, resolveConfig,type DefaultTheme } from 'vitepress-library'
import { createServer as createViteServer, type ServerOptions } from 'vite'
import { resolve } from 'path'
import fs from 'fs'
/**构建目录为执行命令的目录 */
const ROOT = resolve(process.cwd(), './explame')
const useConfig = {
  /**包导出出口 */
  entry: 'components/index.ts',
  /**baseurl */
  documentBase: '/unmono-org/',
  /**网站描述 */
  description: 'unmono description',
  /**网站标题*/
  title: 'Unmono',
  dts:true
}
function readTitleAndGroup(content:string){

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
    title:null,
    group: null,
  }
  
}
function groupedBy(originalArray,groupName){
  return originalArray.reduce((result, currentValue) => {
    const category = currentValue[groupName]
    if (category&&!result[category]) {
      result[category] = [];
    }
    if (result[category]){
      result[category].push(currentValue);
    }
    return result;
  }, {});
}

async function createServer(
  serverOptions: ServerOptions & { base?: string } = {},
  recreateServer?: () => Promise<void>
) {
  const config = await resolveConfig(ROOT)
  config.cacheDir = resolve(ROOT, '.unmono/cache')
  config.site.lang = 'zh_CN'
  config.site.base = useConfig.documentBase||'/'
  config.site.description = useConfig.description||'unmono description'
  config.site.title = useConfig.title ||'unmono'
  config.site.appearance =true

  const sidebar = config.pages.filter(name=>name!=='index.md').map((pageName)=>{
    const { title, group } = readTitleAndGroup(fs.readFileSync(resolve(ROOT, `${pageName}`), 'utf8'))
    return {
      group: group,
      text: title || pageName,
      link: pageName
    }
  })
  const groupSideBar = groupedBy(sidebar, 'group')
  const groups = Object.keys(groupSideBar)
  let finalSidebar:any[]=[]
  if (groups.length){
    finalSidebar = groups.map(group=>{
      return {
        text: group,
        collapsed: false,
        link: groupSideBar[group][0].link,
        items: groupSideBar[group]
      }
    })
  }else{
    finalSidebar = sidebar
  }
  config.tempDir = resolve(ROOT, '.unmono/.temp')
  config.site.themeConfig = {
    lang :'zh_CN',
    
    search: {
      provider: "local",
      options:{
        translations:{
          button:{
            buttonText: "搜索"
          },
          modal:{
            resetButtonTitle:'重新搜索',
            backButtonTitle:'返回',
            noResultsText:'无内容',
            footer:{
              selectText:'选择',
              navigateText:"选择",
              closeText:"关闭",
            }
          }
        }
      }
    },
    outlineTitle:'大纲',
    notFound:{
      quote:'但如果你不改变你的方向，如果你继续寻找，你可能会在你前进的地方结束。',
      title:"页面走丢了",
      linkText:'回到首页',
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

  return createViteServer({
    root: config.srcDir,
    base: config.site.base,
    cacheDir: config.cacheDir,
    plugins: [await createVitePressPlugin(config, false, {}, {}, recreateServer) as any],
    server: serverOptions,
    customLogger: config.logger,
    configFile: config.vite?.configFile
  })
}

const createDevServer = async () => {
  const server = await createServer({
    port:5001,
    hmr:true,
    watch:{
      persistent:true,
      ignoreInitial:false,
    }
  }, async () => {
    await server.close()
    await createDevServer()
  })
  await server.listen()
  server.printUrls()
}

createDevServer()