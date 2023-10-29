export default function vitePluginAutoH(moduleName = 'vue') {
    return {
        name: 'vite-plugin-auto-h',
        transform(code, id) {
            if (id.endsWith('tsx') || id.endsWith('jsx')) {
                return {
                    code: `import {h} from "${moduleName}";${code}`,
                    map: null
                }
            }
        }
    }
}