import { writeFile, makeDir } from './lib/fs'
import pkg from '../package.json'
import config from './config'
import ora from 'ora'

export const generatePackage = {
  name: 'generate package.json',
  func: async () => {
    const spinner = ora('generating package.json...')
    await makeDir(`${config.build.assetsRoot}`)
    await writeFile(
      `${config.build.assetsRoot}/package.json`,
      JSON.stringify(
        {
          name: pkg.name,
          private: true,
          engines: pkg.engines,
          dependencies: pkg.dependencies,
          scripts: {
            start: 'node server.js'
          }
        },
        null,
        2
      )
    )
    spinner.succeed()
  }
}
