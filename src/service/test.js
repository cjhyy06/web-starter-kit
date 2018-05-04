import createReqest from '../core/request'
let test = () => {
  createReqest('/apis/example', {})
    .then(response => {
      console.log(response)
    })
}
export default {
  test
}
