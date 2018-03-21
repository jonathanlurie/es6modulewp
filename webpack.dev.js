const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json')


console.log( './' + pkg.entry );
/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: "./" + pkg.entry,
  mode: "development",
  output: {
    filename: pkg.name + ".js",
    path: path.resolve(__dirname, 'dist'),

    library: pkg.name,
    libraryTarget: "umd",
    globalObject: "this"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',


        options: {

        }
      }
    ]
  },
  devtool: 'inline-source-map',
};
