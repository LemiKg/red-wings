const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src', 'index.html')
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'kragujevac.html'),
        filename: 'kragujevac.html'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'kragujevac1.html'),
        filename: 'kragujevac1.html'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'beograd.html'),
        filename: 'beograd.html'
      }),
      new CopyPlugin({
          patterns: [
              { from: 'src/assets/images', to: 'assets/images' }
          ]
      }),
      new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css'
      }),
      new Dotenv()
  ],
  module: {
      rules: [
          {
              test: /\.(scss)$/i,
              use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader'
              ]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource'
          }
      ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
};
