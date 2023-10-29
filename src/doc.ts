#!/usr/bin/env node
import { createVitePressPlugin, resolveConfig } from 'vitepress-library'
import { createServer as createViteServer, type ServerOptions } from 'vite'
import { getUseConfig, hookUserConfig } from "./userConfig"
import { resolve } from "path"

const {  DOCUMENT_ROOT } = getUseConfig()

export async function createServer(
  serverOptions: ServerOptions & { base?: string } = {},
  recreateServer?: () => Promise<void>
) {
  const config = hookUserConfig(await resolveConfig(DOCUMENT_ROOT))
  return createViteServer({
    root: config.srcDir,
    base: config.site.base,
    cacheDir: config.cacheDir,
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
    await server.close()
    await createDevServer()
  })
  
  await server.listen()
  server.printUrls()
}
