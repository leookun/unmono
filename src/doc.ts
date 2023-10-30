#!/usr/bin/env node
import { createVitePressPlugin, resolveConfig } from 'vitepress-library'
import { createServer as createViteServer, type ServerOptions } from 'vite'
import { getUseConfig, hookUserConfig,afterResolveUser } from "./userConfig"
import { resolve } from "path"

const {  DOCUMENT_ROOT } = getUseConfig()

export async function createServer(
  serverOptions: ServerOptions & { base?: string } = {},
  recreateServer?: () => Promise<void>
) {
  const config = hookUserConfig('dev')(await resolveConfig(DOCUMENT_ROOT, 'serve', 'development', afterResolveUser))
  
  return createViteServer({
    root: config.srcDir,
    base: config.site.base,
    cacheDir: config.cacheDir,
    optimizeDeps:{
      entries:[],
      force:false
    },
    build:{
      lib: {
        entry: [],
      },
    },
    plugins: [await createVitePressPlugin(config, false, {}, {}, recreateServer) as any, {
      enforce: "pre",
      name: 'no-resolve-html',
      resolveId(source, importer, options) {
        if (source.endsWith('.html')){
          return ''
        }
      },
      load(source, options) {
        if (source.endsWith('.html')) {
          return {
            code: ''
          }
        }
      },
    }],
    server: serverOptions,
    customLogger: config.logger,
    configFile: false,
  }).catch(err=>{})
}

export const createDevServer = async () => {
  const server = await createServer({
    port:5001,
    hmr:true,
    host:'0.0.0.0',
    watch:{ }
  }, async () => {
    if (server) {
      console.log('hmr...')
      await server?.close?.()
      await createDevServer()
    }
  })
  if(!server){
    console.log('服务启动失败，检查markdonw中文中是否有未知组件')
    process.exit()
  }
  if (server){
    await server?.listen?.()
    server.printUrls()
  }
}
