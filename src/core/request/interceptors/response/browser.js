export default [
  response => {

  },
  error => {
    let handledErr = {
      statusCode: 500,
      errMessage: '',
      stack: error.stack || ''
    }
    return Promise.reject(handledErr)
  }
]
