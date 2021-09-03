const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { mode } = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base')

module.exports = {
  ...base,
  mode: 'production',
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: mode === 'production' ? '[name].[chunkhash].css' : '[name].[hash].css',
      chunkFilename: mode === 'production' ? '[id].[chunkhash].css' : '[id].[hash].css',
      ignoreOrder: false
    }) ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      }
    ]
  }
};

