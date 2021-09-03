const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { mode } = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};

