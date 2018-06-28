import createReqest from '../core/request'
let test = (req) => {
  return createReqest(req).post('/apis/example/test', {})
}
export default {
  test
}
