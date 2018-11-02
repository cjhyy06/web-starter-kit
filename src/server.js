import express from 'express'
import portSetting from '../port-settings'
import http from 'http'
import path from 'path'
import fs from 'fs'
import bodyParser from 'body-parser'

let app = new express()
app.set('view engine', 'html')
app.use('/apis/example', require('./apis/example'))
app.use(express.static('public'))
app.use(bodyParser.text({ type: 'text/xml' }))

let server = http.createServer(app)
// require('./socketServer/server')(server)
// require('./socketServer/server1')(server)
// require('./socketServer/server2')(server)

app.get('*', (req, res, next) => {
  fs.readFile(path.join('public', 'index.html'), 'utf8', (err, buffer) => {
    if (err) {
      next(err)
    } else {
      res.send(buffer)
    }
  })
})

let port = portSetting.backend || '8000'
server.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log(`Listening at http://localhost:${port}`)
})

// export default app
