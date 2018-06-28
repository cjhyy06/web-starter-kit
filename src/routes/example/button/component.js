import exampleService from '../../../service/example'
export default {
  data () {
    return { example: '' }
  },
  mounted () {
    exampleService
      .test()
      .then(data => {
        console.log(data)
        this.example = data.name
      })
  }
}
