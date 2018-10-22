import express from 'express'
import portSetting from '../port-settings'
import http from 'http'
import path from 'path'

let app = new express()
app.set('view engine', 'html')
app.use('/apis/example', require('./apis/example'))

let server = http.createServer(app)
require('./socketServer/server')(server)
// require('./socketServer/server1')(server)
// require('./socketServer/server2')(server)

app.use('*', (req, res, next) => {
  console.log(path.join(__dirname, 'index.html'))
  res.sendFile(path.join(__dirname, 'index.html'))
})

let port = portSetting.backend || '8000'
server.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log(`Listening at http://localhost:${port}`)
})

// export default app
