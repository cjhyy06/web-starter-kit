import { Router } from 'express'

let router = new Router()

router.post('/test', (req, res, next) => {
  res.json({ name: 'test' })
})
export default router
