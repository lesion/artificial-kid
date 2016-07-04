import Vue from 'vue'
import App from './App'

import Keen from 'keen-ui'
import 'keen-ui/dist/min/keen-ui.min.css'

Vue.use(Keen)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
