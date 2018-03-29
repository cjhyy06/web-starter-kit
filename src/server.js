import Express from 'express'

let app = new Express()

let server = app.listen(3000, () => {
  let host = server.address().address
  let port = server.address().port
  console.log(`Server listening at Http://${host}:${port}`)
})
