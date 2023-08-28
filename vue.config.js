const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const path = require('path');


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
  }
}
)
