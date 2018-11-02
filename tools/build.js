import client from './build-client'
import server from './build-server'
import { generatePackage } from './copy'

async function build () {
  await client.func()
  await server.func()
  await generatePackage.func()
}

export default {
  name: 'build',
  func: build
}
