import axios from 'axios'

export const createMsRequest = (endpoint, req, headers) => {
  let requestConfig = {
    baseURL: '这里是微服务地址'.replace('{endpoint}', endpoint),
    // baseURL: 'http://localhost:8888',
    headers: {},
    timeout: 20000
  }

  if (headers) {
    requestConfig.headers = headers
  }

  // 这里可以给微服务的公用参数进行设置，放入headers

  requestConfig.requestContext = req.requestContext

  const client = axios.create(requestConfig)

  return client
}

export const createDefaultMsRequest = (req, headers) => {
  return createMsRequest('defaultEndpoint', req, headers)
}

export default {
  createMsRequest,
  createDefaultMsRequest
}
