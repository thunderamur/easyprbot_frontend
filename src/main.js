import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUser, faLock)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)

import App from '@/App.vue'
import router from '@/router/index.js'
import backendApi from '@/gateways/backend-api.js'
import store from '@/store/index.js'
import { USER_REQUEST } from '@/store/actions/user'
import { GET_TYPES } from './store/actions/event'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const token = localStorage.getItem('user-token')
if (token) {
  backendApi.defaults.headers.common['Authorization'] = 'Token ' + token
  store.dispatch(USER_REQUEST)
}

store.dispatch(GET_TYPES)
