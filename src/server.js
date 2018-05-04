import express from 'express'
import fs from 'fs'
// import path from 'path'

let app = new express()
app.set('view engine', 'html')
// app.use('/', (req, res, next) => {
//   console.log('aaa')
//   // const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName
//   // console.log(assetsByChunkName)
//   next()
// })

// app.use('/', (req, res, next) => {
//   console.log('xxxxxxxxxxxxxxxxxx')
//   console.log(path.join(process.cwd(), 'index.html'))
//   fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, content) => {
//     if (err) {
//       console.log(err)
//     }

//     res.writeHead(200, {
//       'Content-Type': 'text/html; charset=utf-8'
//     })
//     console.log(content)
//     res.end(content)
//   })
// })
// let server = app.listen(8000, () => {
//   let host = server.address().address
//   let port = server.address().port
//   console.log(`Server listening at Http://${host}:${port}`)
// })

let router = express.Router()

router.get('/', (req, res, next) => {
  fs.readFile('index1.html', 'utf8', (err, content) => {
    if (err) {
      next(err)
    } else {
      res.send(content)
    }
  })
})
app.use(router)

export default app
