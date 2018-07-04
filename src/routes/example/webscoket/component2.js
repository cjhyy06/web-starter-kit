import io from 'socket.io-client'
let socket1, socket2, socket3
export default {
  data () {
    return {
      message1: '',
      message2: '',
      message3: '',
      toSendMsg1: '',
      toSendMsg2: '',
      toSendMsg3: '',
      status: ''
    }
  },
  mounted () {
    // 对同一个socket服务多次连接，返回的是不同的实例
    // 连接1
    socket1 = io('http://localhost:8000/my-socket')
    socket1.on('connect', socket => {
      console.log('connect ' + socket1.id)
    })
    socket1.on('server action', data => {
      this.message1 += data + '\n'
    })

    // 连接2
    socket2 = io('http://localhost:8000/my-socket')
    socket2.on('connect', socket => {
      console.log('connect ' + socket2.id)
    })
    socket2.on('server action', data => {
      this.message2 += data + '\n'
    })

    // 连接3
    socket3 = io('http://localhost:8000/my-socket')
    socket3.on('connect', socket => {
      console.log('connect ' + socket3.id)
    })
    socket3.on('server action', data => {
      this.message3 += data + '\n'
    })
  },
  methods: {
    send1 () {
      socket1.emit('sendMessage2', {
        user: 'user1',
        message: this.toSendMsg1,
        id: socket3.id
      })
      this.toSendMsg1 = ''
    },
    send2 () {
      socket2.emit('room2')
    },
    send3 () {
      socket1.emit('handleStatus', {}, data => {
        console.log(data)
        this.status = data
        // socket1.disconnect(true)
      })
    }
  }
}
