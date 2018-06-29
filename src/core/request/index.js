import axios from 'axios'
import qs from 'qs'

const setupIntercepors = axios => {
  axios.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      console.log(error)
    }
  )
  axios.interceptors.request.use(
    config => {
      return config
    },
    error => {
      console.log(error)
    }
  )
}

let createRequest = req => {}
let apiRoot = `${window.location.protocol}//${window.location.host}`
createRequest = req => {
  const clientRequest = axios.create({
    baseURL: apiRoot,
    paramsSerializer: function (params) {
      return qs.stringify(params)
    }
  })
  setupIntercepors(clientRequest)
  return clientRequest
}

export default createRequest
