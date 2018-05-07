import client from './build-client'
import server from './build-server'

async function build () {
  await client.func()
  await server.func()
}

export default {
  name: 'build',
  func: build
}
