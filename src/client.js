import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap-sass'
import './styles/main.scss'
import './components'
import 'jquery'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
