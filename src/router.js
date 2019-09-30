import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/' // 引入主页
import Login from './views/login' // 引入登录页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
