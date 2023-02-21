const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        swSrc: './src/serviceWorker.js',
        exclude: [/_redirects/]
    }
  }
})