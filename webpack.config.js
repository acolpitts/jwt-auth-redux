const path = require('path')
const webpack = require('webpack');
const UglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = (env, argv) => ({
  mode: argv.mode || 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: argv.mode === 'production' ? false : true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  optimization: {
    minimize: false,
    minimizer: argv.mode === 'production' ? [
      new UglifyJsPlugin({
        cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
        debug: true,
        minimize: true,
        sourceMap: false,
        output: {
          comments: false
        },
        compressor: {
          warnings: false
        }
      })
    ] : []
  }
});
