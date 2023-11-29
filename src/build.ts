import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import autoH from './plugin/vite-plugin-auto-h'
import {viteRequire} from 'vite-require';
import { resolve } from 'path'
import { getUseConfig } from "./userConfig"
import WindiCSS from 'vite-plugin-windicss';
import topLevelAwait from "vite-plugin-top-level-await";
export const buildlib = async (iswatch = false) => {
    const { PWD, useConfig, external, } = getUseConfig()
    const lessStr = (useConfig.less || []).reduce((additionalData, src) => {
        return `${additionalData}\n@import "${resolve(PWD, src)}";`
    }, ``)
    const sassStr = (useConfig.scss || []).reduce((additionalData, src) => {
        return `${additionalData}\n@import "${resolve(PWD, src)}";`
    }, ``)
    console.log(sassStr)
    await build({
        configFile: false,
        root: PWD,
        logLevel: "error",
        plugins: [
            tsconfigPaths({
                root: PWD,
            }),
            autoH(),
            vue(),
            vueJsx(),
            WindiCSS(),
            topLevelAwait(),
            useConfig.dts && dts({
                tsconfigPath: resolve(PWD, useConfig.tsconfig),
                // rollupTypes: true,
                outDir: resolve(PWD, useConfig.output)
            }),
            viteRequire({
                extensions:['js','vue','ts','tsx'],
            })

        ].filter(Boolean),

        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    additionalData: lessStr
                },
                scss:{
                    javascriptEnabled: true,
                    additionalData:sassStr
                }
            },
        },
        build: {
            watch: iswatch ? {} : null,
            sourcemap: 'inline',
            minify: false,
            assetsDir: '',
            lib: {
                entry: useConfig.entry.map(entry => resolve(PWD, entry)),
                formats: ['es'],
                fileName: (format, entryName) => `${entryName}.js`
            },
            rollupOptions: {
                external: external,
                output: {
                    preserveModules:false,
                    dir: resolve(PWD, useConfig.output),
                    banner: '#!/usr/bin/env node',
                }
            }
        },
        resolve: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
            alias: [
                { find: '@', replacement: resolve(PWD, './src') }
            ],
        },

    })
}