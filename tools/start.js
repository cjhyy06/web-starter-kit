import webpack from 'webpack'
import webpackClientConfig from './webpack/client.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import express from 'express'
// import webpackServerConfig from './webpack/server.dev'

function start() {
  return new Promise((resolve, reject) => {
    // const serverCompiler = webpack(webpackServerConfig)


    const compiler = webpack(webpackClientConfig)
    const app = express()

    let devMiddleware = webpackDevMiddleware(compiler, {
      publicPath: webpackClientConfig.output.publicPath})

    let hotMiddleware = webpackHotMiddleware(compiler, {
      log: false,
      heartbeat: 2000
    })


    app.use(devMiddleware)
    app.use(hotMiddleware)

    app.listen(3000, function() {
      console.log('Example app listening on port 3000!\n') // eslint-disable-line
      resolve()
    })
  })
}

export default{
  name: 'start dev server',
  func: start
}
