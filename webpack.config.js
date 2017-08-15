const path = require('path');
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

const root = path.resolve('./');
const moduleFileName = 'deltas';
module.exports = {
  devtool: 'source-map',
  watch: true,
  context: __dirname + "/",
  entry: [ __dirname + `/src/${moduleFileName}.babel.js` ],
  module: {
    rules: [
      { test: /\.(babel.js)$/,
        loaders: ['babel-loader?cacheDirectory'],
        exclude: /node_modules/,
        include: root
      }
    ]
  },
  output: {
    path:             __dirname + '/build',
    filename:         `${moduleFileName}.min.js`,
    publicPath:       'build/',
    library:          `mojs-${moduleFileName}`,
    libraryTarget:    'umd'
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: true,
      sourceMap: true
    }),
    new UnminifiedWebpackPlugin()
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: [ '.babel.js' ]
  }
};
