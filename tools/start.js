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
// import { resolve } from 'path'

async function start () {
  const serverCompiler = webpack(webpackServerConfig)

  const compiler = webpack(webpackClientConfig)

  let devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackClientConfig.output.publicPath
  })

  let hotMiddleware = webpackHotMiddleware(compiler, {})
  let server = null
  const runningRegExp = /Listening at http:\/\/(.*?)\//
  const onStdOut = (data) => {
    const time = new Date().toTimeString()
    const match = data.toString('utf8').match(runningRegExp)

    process.stdout.write(time.replace(/.*(\d{2}:\d{2}:\d{2}).*/, '[$1] '))
    process.stdout.write(data)
    if (match) {
      server.host = match[1]
      server.stdout.removeListener('data', onStdOut)
      server.stdout.on('data', x => process.stdout.write(x))
    }
  }
  let startServer = () => {
    return new Promise((resolve, reject) => {
      if (server) {
        server.kill('SIGTERM')
      }
      server = cp.spawn('node', ['server'], {
        cwd: config.build.assetsRoot
      })

      server.stdout.on('data', onStdOut)

      server.stderr.on('data', x => process.stderr.write(x))
    })
  }
  let handleServerBundleCompelted = () => {
    startServer()
    let bs = browserSync.create()
    bs.init(
      {
        port: '1000',
        proxy: {
          target: `0.0.0.0:8000`,
          middleware: [
            require('connect-history-api-fallback')({
              verbose: false,
              rewrites: []
            }),
            devMiddleware,
            hotMiddleware
          ],
          proxyOptions: {
            xfwd: true
          }
        }
      }
    )
    handleServerBundleCompelted = () => {
      startServer()
      setTimeout(() => {
        bs.reload()
      }, 1000)
    }
  }

  serverCompiler.watch({
    aggregateTimeout: 300,
    poll: 2000,
    ignored: ['node_modules']
  }, async (err, stats) => {
    if (err) {
      console.log(err)
    }
    handleServerBundleCompelted()
  })

  process.on('exit', () => {
    if (server) {
      server.kill('SIGTERM')
    }
  })
}

export default {
  name: 'start dev server',
  func: start
}
