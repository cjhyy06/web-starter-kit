import express from 'express'
import path from 'path'

let app = new express()

app.set('view engine', 'html')
// app.use(express.static('static'))
app.use('/static', express.static('static'))

app.get('/', (req, res, next) => {
  console.log(__dirname, __filename, process.cwd())
  res.sendFile(path.resolve(process.cwd(), 'index.html'))
})

let server = app.listen(3000, () => {
  let host = server.address().address
  let port = server.address().port
  console.log(`Server listening at Http://${host}:${port}`)
})
