import webpack from 'webpack'
import webpackServerConfig from './webpack/server.build'
process.env.NODE_ENV = 'production'

function buildServer () {
  return new Promise((resolve, reject) => {
    webpack(webpackServerConfig, (err, stats) => {
      console.log(err, stats)
      if (err) throw err
      resolve(stats)
    })
  })
}
export default {
  name: 'build server',
  func: buildServer
}
