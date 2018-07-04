import io from 'socket.io-client'

let createClient = io('http://localhost:8000', {
  path: '/my-socket',
  query: { name: 'testName' }
})

export default createClient
