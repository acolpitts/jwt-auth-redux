const path = require('path')
const webpack = require('webpack');
const UglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = (env, argv) => ({
  mode: argv.mode || 'development',
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    //port: 9001,
    compress: true,
    hot: true,
    open: true
  },
  watch: argv.mode === 'production' ? false : true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  optimization: {
    minimize: true,
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
