import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import BenchmarkLogin from '@/components/BenchmarkLogin'
import BenchmarkSignup from '@/components/BenchmarkSignup'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
