#!/usr/bin/env node
import { build } from 'vitepress-library'
import { getUseConfig,hookUserConfig } from "./userConfig"
const { DOCUMENT_ROOT, useConfig } = getUseConfig()
export const buildDoc=()=>{
    build(DOCUMENT_ROOT, { base: useConfig.publicPath }, hookUserConfig)
}