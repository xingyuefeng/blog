// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
import '@/assets/css/icon.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from '../src/store/index'
import VueCookie from 'vue-cookie'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

Vue.config.productionTip = false

Vue.use(mavonEditor)
Vue.use(VueCookie)
Vue.use(MuseUI)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
/* eslint-disable no-new */

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
const debug = process.env.NODE_ENV !== 'production'

if (debug) {
  axios.defaults.baseURL = '/api'
}

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
