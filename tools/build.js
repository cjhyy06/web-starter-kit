import buildClient from './build-client'
import buildServer from './build-server'
async function build () {
  await buildClient()
  await buildServer()
  console.log('both client and server build completed')
}
export default {
  name: 'build',
  func: build
}
