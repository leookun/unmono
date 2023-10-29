#!/usr/bin/env node
import { createDevServer } from "./doc"
import { buildDoc } from "./build-doc"
import { buildlib } from "./build"
// 获取命令行参数
const [mode,arg] = process.argv.slice(2);
switch (mode){
    case 'doc':
        if (arg==='--dev'){
            createDevServer()
            break
        }
        if (arg === '--build') {
            buildDoc()
        }
        break
    case 'build':
        console.log('build')
        if (arg === '--watch') {
            buildlib(true)
            break
        }
        buildlib()
        break
}
