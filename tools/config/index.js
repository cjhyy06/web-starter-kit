import path from 'path'
module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: false,
    cacheBusting: true,
    devtool: 'eval-source-map',
    webpackContextPath: path.resolve('./src')
  },
  build: {
    webpackContextPath: path.resolve('./src'),
    index: path.join(__dirname, '../../dist/public/index.html'),
    productionSourceMap: true,
    assetsRoot: path.join(__dirname, '../../dist'),
    assetsPublicPath: '/',
    assetsSubDirectory: '',
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
