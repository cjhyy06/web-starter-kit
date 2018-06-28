import defaultLayout from '../../layouts/authorised'
console.log(() => import('./button'))
export default {
  path: '/example',
  component: defaultLayout,
  meta: { pageTitle: '使用例子', pageSubTitle: '' },
  children: [
    {
      name: 'button',
      path: 'button',
      component: () => import('./button'),
      meta: { pageTitle: 'button', pageSubTitle: '' }
    },
    {
      name: 'radio',
      path: 'radio',
      component: () => import('./radio'),
      meta: { pageTitle: 'radio', pageSubTitle: '' }
    }
  ]
}
