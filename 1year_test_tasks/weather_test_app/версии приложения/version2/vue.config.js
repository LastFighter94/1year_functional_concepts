const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  css: {
    extract: false
  }
})
