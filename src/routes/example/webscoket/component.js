import io from 'socket.io-client'
console.log(io)
export default {
  data () {
    return {}
  },
  mounted () {
    let socket = io('http://localhost:8000/my-socket')
    socket.on('connect', () => {
      console.log('connect ' + socket.id)
    })
  }
}
