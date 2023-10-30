#!/usr/bin/env node
import { build } from 'vitepress-library'
import { getUseConfig, hookUserConfig, afterResolveUser } from "./userConfig"
const { DOCUMENT_ROOT, useConfig } = getUseConfig()
export const buildDoc=()=>{
    build(DOCUMENT_ROOT, { base: useConfig.publicPath }, { 
        afterResolveUserConfig: afterResolveUser,
        beforeBuild: hookUserConfig('build')
    })
}