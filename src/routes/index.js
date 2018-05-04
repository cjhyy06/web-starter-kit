import defaultLayout from '../layouts/default'
import test from './test'
const routes = [
  {
    path: '/',
    component: defaultLayout,
    children: [
      test
    ]
  }
]
console.log(routes)
export default routes
