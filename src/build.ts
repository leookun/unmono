import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import autoH from './plugin/vite-plugin-auto-h'
import { resolve } from 'path'
import { getUseConfig } from "./userConfig"

export const buildlib = async (iswatch = false) => {
    const { PWD, useConfig, external } = getUseConfig()
    await build({
        configFile: false,
        root: PWD,
        logLevel: 'info',
        plugins: [autoH(), vue(), vueJsx(),
        useConfig.dts && dts({
            tsconfigPath: resolve(PWD, useConfig.tsconfig),
            // rollupTypes: true,
            outDir: resolve(PWD, useConfig.output)
        }),
        tsconfigPaths({
            root: PWD
        })].filter(Boolean),
        build: {
            watch: iswatch ? {} : null,
            sourcemap: 'inline',
            minify: false,
            assetsDir: '',
            lib: {
                entry: useConfig.entry.map(entry => resolve(PWD, entry)),
                formats: ['es'],
                name: 'MyLib',
                fileName: (format, entryName) => `${entryName}.js`
            },
            rollupOptions: {
                external: external,
                output: {
                    dir: resolve(PWD, useConfig.output)
                }
            }
        }
    })
}