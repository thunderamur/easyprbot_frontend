import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/login/',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/',
    name: 'EventPage',
    component: () => import('@/views/EventPage.vue'),
    beforeEnter: ifAuthenticated
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
