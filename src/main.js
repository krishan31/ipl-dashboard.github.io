import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'  

import axios from 'axios'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueMaterial)   //vue- material plugin 
Vue.use(Chartkick.use(Chart))
Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  render: h => h(App)
}).$mount('#app')

