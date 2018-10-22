import defaultLayout from '../../layouts/authorised'

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
    },
    {
      name: 'webscoket',
      path: 'webscoket',
      component: () => import('./webscoket'),
      meta: { pageTitle: 'webscoket', pageSubTitle: '' }
    },
    {
      name: 'request',
      path: 'request',
      component: () => import('./request'),
      meta: { pageTitle: 'request', pageSubTitle: '' }
    },
    {
      name: 'dialog',
      path: 'dialog',
      component: () => import('./dialog'),
      meta: { pageTitle: 'dialog', pageSubTitle: '' }
    },
    {
      name: 'vue-tips',
      path: 'vue-tips',
      component: () => import('./vue-tips'),
      meta: { pageTitle: 'dialog', pageSubTitle: '' }
    },
    {
      name: 'd3',
      path: 'd3/force',
      component: () => import('./d3/force'),
      meta: { pageTitle: 'dialog', pageSubTitle: '' }
    }
  ]
}
