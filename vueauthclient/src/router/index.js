import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Contact from '@/components/Contact'
import Chambres from '@/components/Chambres'
import Reservation from '@/components/Reservation'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name:'Dashboard',
      component: Dashboard
    },
    {
      path: '/contact',
      name:'Contact',
      component: Contact
    },
    {
      path:'/chambres',
      name: 'Chambres',
      component: Chambres
    },
    {
      path:'/reservation',
      name:'Reservation',
      component: Reservation
    }
  ]
})
