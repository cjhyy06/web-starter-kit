import express from 'express'
// import fs from 'fs'
// import path from 'path'

let app = new express()
app.set('view engine', 'html')

let router = express.Router()

app.use(router)

export default app
