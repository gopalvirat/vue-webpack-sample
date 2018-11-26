

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './routes'

/* eslint-disable no-new */
// new Vue({
//   el: '#hello',
//   components: { App }
// })
new Vue({
	router,
  render: h => h(App)
}).$mount('#hello')
