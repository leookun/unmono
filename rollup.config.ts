import fs  from 'node:fs'
import { builtinModules } from 'module'
import { resolve } from 'path'
import { type RollupOptions, defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import alias from '@rollup/plugin-alias'

const ROOT = process.cwd()
const r = (p:string) => resolve(ROOT,  p)
const pkg = JSON.parse(fs.readFileSync(resolve(ROOT, 'package.json'), 'utf-8'))
const external = [
    ...Object.keys(pkg.dependencies ||{}),
    ...Object.keys(pkg.peerDependencies||{}),
    ...builtinModules.flatMap((m) =>
        m.includes('punycode') ? [] : [m, `node:${m}`]
    )
]
const plugins = [
    alias({
        entries: {
            'readable-stream': 'stream'
        }
    }),
    replace({
        // polyfill broken browser check from bundled deps
        'navigator.userAgentData': 'undefined',
        'navigator.userAgent': 'undefined',
        preventAssignment: true
    }),
    commonjs(),
    nodeResolve({ preferBuiltins: false }),
    esbuild({ target: 'node18' }),
    json()
]
const esmBuild: RollupOptions = {
    input: [r('src/doc.ts'), r('src/cli.ts'), r('src/index.ts')],
    output: {
        format: 'esm',
        entryFileNames: `[name].js`,
        chunkFileNames: 'serve-[hash].js',
        dir: r('dist'),
        sourcemap: true
    },
    external,
    plugins,
    onwarn(warning, warn) {
        if (warning.code !== 'EVAL') warn(warning)
    }
}


const config = defineConfig([])

config.push(esmBuild)


export default config
