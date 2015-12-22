'use strict';

let path = require('path');
let webpack = require('webpack');
let _ = require('lodash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let baseConfig = require('./base');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = _.merge({
  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    './src/components/run'
  ],
  cache: true,
  devtool: 'eval',
  plugins: [
    new ExtractTextPlugin('react-toolbox.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ]
}, baseConfig);

// Add needed loaders
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loaders: ['react-hot','babel'],
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
