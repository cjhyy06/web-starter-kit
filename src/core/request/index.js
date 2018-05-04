import axios from 'axios'

let createReqest = () => {
  axios.create({
    baseURL: `${window.location.href}//${window.location.host}`
  })
}

export default createReqest
