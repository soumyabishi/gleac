// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import AppNav from './components/common/AppNav'
Vue.component("app-nav", AppNav)

import AppFooter from './components/common/AppFooter'
Vue.component("app-footer", AppFooter)

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


import '../src/assets/css/tailwind.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
