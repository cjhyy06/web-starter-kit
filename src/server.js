import express from 'express'
import portSetting from '../port-settings'

// import fs from 'fs'
// import path from 'path'

let app = new express()
app.set('view engine', 'html')
app.use('/apis/example', require('./apis/example'))

let port = portSetting.backend || '8000'
app.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log(`Listening at http://localhost:${port}`)
})

export default app
