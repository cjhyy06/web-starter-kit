import { Router } from 'express'

let router = new Router()

router.post('/test', (req, res, next) => {
  if (req.isSuccess) {
    res.json({ name: 'test' })
  } else {
    next(new Error({ status: 500, message: '这是接口返回的错误' }))
  }
})
export default router
