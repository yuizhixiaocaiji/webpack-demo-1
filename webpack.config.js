const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { mode } = require('./webpack.config');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  output: {
    filename: mode === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js'
  },
  plugins: [ new HtmlWebpackPlugin({
    title: 'XMDL - 写代码啦',
    template: 'src/assets/index.html'
  }) ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};

