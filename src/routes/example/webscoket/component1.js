import io from 'socket.io-client'
let socket1
export default {
  data () {
    return {
      message1: '',
      message2: '',
      message3: '',
      toSendMsg1: '',
      toSendMsg2: '',
      toSendMsg3: ''
    }
  },
  mounted () {
    socket1 = io('http://localhost:8000/my-socket')
    socket1.on('connect', socket => {
      console.log('connect ' + socket1.id)
    })
  },
  methods: {
    send1 () {
      socket1.emit(
        'sendMessage1',
        {
          user: 'user1',
          message: this.toSendMsg1
        },
        data => {
          console.log(data)
          this.message1 += data.receivedData.message + '\n'
        }
      )
      this.toSendMsg1 = ''
    },
    send2 () {},
    send3 () {}
  }
}
