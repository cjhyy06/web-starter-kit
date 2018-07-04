export default server => {
  const io = require('socket.io')(server).of('/my-socket')

  io.on('connection', socket => {
    socket.on('sendMessage1', (data, fn) => {
      fn({ received: true, receivedData: data })
    })
  })
}
