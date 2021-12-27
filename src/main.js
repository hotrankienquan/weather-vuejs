import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Inbox from './components/Inbox'
import Draft from './components/Draft'

const routes = [
  { path: "/inbox", component: Inbox },
  { path: "/draft", component: Draft }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
