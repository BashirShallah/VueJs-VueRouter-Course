import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from './components/HomePage'
import AboutUsPage from './components/AboutUsPage'

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {path: "/", component: HomePage},
    {path: "/about", component: AboutUsPage},
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
