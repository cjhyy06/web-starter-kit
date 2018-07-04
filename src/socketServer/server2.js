export default server => {
  const io = require('socket.io')(server).of('/my-socket')

  io.on('connection', socket => {
    console.log('a client connected!')
    socket.on('sendMessage2', (data, fn) => {
      // send to all clients but current
      socket.broadcast.emit('server action', '我是broadcast的消息')
      // send to current client
      socket.emit('server action', '这是发送给当前client的消息')
      // send to specify client
      socket.to(data.id).emit('server action', `这是指定发给我的消息`)
      // send to all clients in room2
      socket.to('room2').emit('server action', `这是发送给room2的消息`)
    })
    socket.on('room2', data => {
      socket.join('room2', () => {})
    })
    socket.on('handleStatus', (data, fn) => {
      setTimeout(() => {
        fn('处理成功')
      }, 5000)
    })
  })
}
