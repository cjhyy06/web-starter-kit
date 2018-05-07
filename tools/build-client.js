import webpack from 'webpack'
import webpackClientConfig from './webpack/client.build'
import ora from 'ora'
import rm from 'rimraf'
import config from './config'

const spinner = ora('building for client...')

process.env.NODE_ENV = 'production'

spinner.start()
function buildClient () {
  return new Promise((resolve, reject) => {
    rm(config.build.assetsRoot, err => {
      if (err) throw err
      webpack(webpackClientConfig, (err, stats) => {
        if (err) {
          spinner.fail()
          throw err
        }
        process.stdout.write(stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n\n')

        if (stats.hasErrors()) {
          spinner.fail()
          process.exit(1)
        }
        spinner.succeed()
        resolve(stats)
      })
    })
  })
}
export default {
  name: 'build client',
  func: buildClient
}
