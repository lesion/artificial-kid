import Vue from 'vue'
import App from './App'

import Keen from 'keen-ui'
import 'keen-ui/dist/min/keen-ui.min.css'

import store from './vuex/store'

Vue.use(Keen)

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
})
