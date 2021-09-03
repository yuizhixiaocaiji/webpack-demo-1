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
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.styl$/,
        loader: [ 'style-loader', 'css-loader', 'stylus-loader' ]
      },
      {
        test: /\.less$/,
        loader: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      } ]
  }
};
