import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
export const bus = new Vue();

require('bootstrap');
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history'
})

new Vue({
  render: h => h(App),
}).$mount('#app')








