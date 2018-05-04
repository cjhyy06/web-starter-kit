import webpack from 'webpack'
import webpackClientConfig from './webpack/client.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import browserSync from 'browser-sync'
// import portSetting from '../port-settings'
import cp from 'child_process'
import config from './config'
// import shell from 'shelljs'

import webpackServerConfig from './webpack/server.dev'

async function start () {
  const serverCompiler = webpack(webpackServerConfig)

  const compiler = webpack(webpackClientConfig)

  let devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackClientConfig.output.publicPath
  })

  let hotMiddleware = webpackHotMiddleware(compiler, {})
  let server = null
  let startServer = async () => {
    if (server) {
      server.kill()
    }
    console.log('begin start server')
    server = cp.spawn('node', ['server'], {
      cwd: config.build.assetsRoot
    })

    server.stdout.on('data', function (chunk) {
      console.log(chunk.toString())
    })

    server.stderr.on('data', function (data) {
      console.log(data.toString())
    })
  }
  let bs = null
  let startClient = () => {
    if (bs != null) return
    bs = browserSync.create()
    bs.init(
      {
        port: '1000',
        proxy: {
          target: `0.0.0.0:8000`,
          middleware: [devMiddleware, hotMiddleware]
        }
      }
    )
  }

  serverCompiler.watch({
    aggregateTimeout: 300,
    poll: 2000,
    ignored: ['node_modules']
  }, async (err, stats) => {
    if (err) {
      console.log(err)
    }
    await startServer()
    startClient()
  })
}

export default {
  name: 'start dev server',
  func: start
}
