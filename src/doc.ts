#!/usr/bin/env node
import { createVitePressPlugin, resolveConfig } from 'vitepress-library'
import { createServer as createViteServer, type ServerOptions } from 'vite'
import { getUseConfig, hookUserConfig } from "./userConfig"

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
    plugins: [await createVitePressPlugin(config, false, {}, {}, recreateServer) as any],
    server: serverOptions,
    customLogger: config.logger,
    configFile: config.vite?.configFile
  })
}

export const createDevServer = async () => {
  const server = await createServer({
    port:5001,
    hmr:true,
    host:'0.0.0.0',
    watch:{
      persistent:true,
      ignoreInitial:false,
    }
  }, async () => {
    console.log('reacrt')
    await server.close()
    await createDevServer()
  })
  
  await server.listen()
  server.printUrls()
}
