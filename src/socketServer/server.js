export default server => {
  const io = require('socket.io')(server).of('/my-socket')

  io.on('connection', socket => {
    console.log('a client connected!')
  })
}
