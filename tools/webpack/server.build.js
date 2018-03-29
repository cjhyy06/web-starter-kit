import webpack from 'webpack'
import config from '../config'

let externals = _externals()

module.exports = {
  entry: {
    server: './src/server.js'
  },
  target: 'node',
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[hash:8].js'
  },
  resolve: {
    extensions: ['js']
  },
  externals: externals,
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

function _externals () {
  let manifest = require('../../package.json')
  let dependencies = manifest.dependencies
  let externals = {}
  for (let p in dependencies) {
    externals[p] = 'commonjs ' + p
  }
  return externals
}
