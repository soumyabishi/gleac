// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

import AppNav from './components/common/AppNav'
Vue.component("app-nav", AppNav)

import AppFooter from './components/common/AppFooter'
Vue.component("app-footer", AppFooter)

import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import BenchmarkLogin from '@/components/BenchmarkLogin'
import BenchmarkSignup from '@/components/BenchmarkSignup'
import Terms from '@/components/Terms'
import DataPrivacy from '@/components/DataPrivacy'
import CookiePolicy from '@/components/CookiePolicy'

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

Vue.use(require('vue-cookies'))

import '../src/assets/css/tailwind.css';

Vue.config.productionTip = false

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (from && to.name === from.name && JSON.stringify(to.params) === JSON.stringify(from.params)) {
      return;
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/benchmark-login',
      name: 'BenchmarkLogin',
      component: BenchmarkLogin
    },
    {
      path: '/benchmark-signup',
      name: 'BenchmarkSignup',
      component: BenchmarkSignup
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    },
    {
      path: '/data-privacy',
      name: 'DataPrivacy',
      component: DataPrivacy
    },
    {
      path: '/cookie-privacy',
      name: 'CookiePolicy',
      component: CookiePolicy
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
