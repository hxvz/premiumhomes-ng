// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jqeury from 'jquery'
import '@/assets/js/jquery.colorbox.js'
import '@/assets/js/jquery.nivo.slider.js'

/*
import './assets/css/bootstrap.min.css'
import '@/assets/css/colorbox.css'
import './assets/css/nivo-slider.css'
import './assets/css/site.css'
import './assets/css/style.css'
import './assets/css/override.css'
*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
