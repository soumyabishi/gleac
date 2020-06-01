import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import BenchmarkLogin from '@/components/BenchmarkLogin'
import BenchmarkSignup from '@/components/BenchmarkSignup'
import Terms from '@/components/Terms'
import DataPrivacy from '@/components/DataPrivacy'
import CookiePolicy from '@/components/CookiePolicy'

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
