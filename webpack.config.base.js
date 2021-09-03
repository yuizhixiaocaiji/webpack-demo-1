const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { mode } = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: mode === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js'
  },
  plugins: [ new HtmlWebpackPlugin({
    title: 'XMDL - 写代码啦',
    template: 'src/assets/index.html'
  })
  ]
};
