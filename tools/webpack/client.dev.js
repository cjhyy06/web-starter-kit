import webpack from 'webpack'
import config from '../config'
import utils from './utils'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import merge from 'webpack-merge'
import baseWebpackConfig from './client.base.js'

export default merge(baseWebpackConfig, {
  target: 'web',
  entry: {
    app: ['./client.js', 'webpack-hot-middleware/client?noInfo=true&reload=true']
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  }
}
)
