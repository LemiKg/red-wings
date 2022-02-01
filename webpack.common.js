const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src', 'index.html')
      }),
      new HtmlWebpackPlugin({
        template: './src/kragujevac.html',
        filename: 'kragujevac.html',
      }),
      new CopyPlugin({
          patterns: [
              { from: 'src/assets/images', to: 'assets/images' }
          ],
      }),
  ],
  module: {
      rules: [
          {
              test: /\.(scss|css)$/i,
              use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
              ]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource'
          },
      ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
};