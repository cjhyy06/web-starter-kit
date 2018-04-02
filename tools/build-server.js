import webpack from 'webpack'
import webpackServerConfig from './webpack/server.build'
import path from 'path'
import rm from 'rimraf'
process.env.NODE_ENV = 'production'

function buildServer () {
  return new Promise((resolve, reject) => {
    rm(path.resolve('dist', 'server.*.js'), err => {
      if (err) throw err
      webpack(webpackServerConfig, (err, stats) => {
        if (err) throw err
        resolve(stats)
      })
    })
  })
}

export default {
  name: 'build server',
  func: buildServer
}
