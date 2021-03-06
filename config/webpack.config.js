const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ContextReplacementPlugin } = require('webpack');

module.exports = {
  entry: {
    main: './src/main.ts'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name]-chunk.js',
    path: path.join(__dirname, "../dist/"),
  },
  resolve: {
    extensions: ['.js', '.ts', '.html']
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
    port: 5757,
    stats: 'errors-only',
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /.ts$/, use: [
        'awesome-typescript-loader',
        'angular-router-loader',
        'angular2-template-loader']
      },
      { test: /.html$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      showErrors: true,
      title: "Webpack App",
      path: path.join(__dirname, "../dist/"),
      hash: true
    }),
    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)/,
      path.resolve(__dirname, '../src')
    ),
  ]
}
