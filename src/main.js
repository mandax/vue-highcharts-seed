import 'highcharts'

import Vue from 'vue'
import VueHighcharts from 'vue-highcharts'

import App from './App.vue'

Vue.use(VueHighcharts);

new Vue({
  el: '#app',
  render: h => h(App)
})
