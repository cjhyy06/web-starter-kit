import express from 'express'
import portSetting from '../port-settings'
import http from 'http'

let app = new express()
app.set('view engine', 'html')
app.use('/apis/example', require('./apis/example'))

// socket.io
const server = http.createServer(app)
const io = require('socket.io')(server).of('/my-socket')
io.on('connection', socket => {
  console.log('a user connected==========================================')
})

let port = portSetting.backend || '8000'
server.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log(`Listening at http://localhost:${port}`)
})

// export default app
