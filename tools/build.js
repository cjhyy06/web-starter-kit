import webpack from 'webpack'
import webpackClientConfig from './webpack/client.build'

function build() {
  return new Promise((resolve, reject) => {
    webpack(webpackClientConfig, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export default{
  name: 'build',
  func: build
}
