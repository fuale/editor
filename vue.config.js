const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  chainWebpack: config => {
    config.module.rule('raw').test(/\.raw$/).use('raw-loader').loader('raw-loader');
  },
  transpileDependencies: ['vuex-module-decorators'],
  configureWebpack: {
    plugins: [
        new MonacoWebpackPlugin()
    ],
    optimization: {
      splitChunks: false,
    },
  },
  css: {
    extract: false,
  },
};
