import { Router } from 'express'

let router = new Router()

router.get('/', (req, res, next) => {
  res.json({ name: 'test' })
})
module.exports = router
