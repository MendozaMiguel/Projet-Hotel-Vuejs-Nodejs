import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Contact from '@/components/Contact'
import Chambres from '@/components/Chambres'
import Reservation from '@/components/Reservation'
import Index from '@/components/Index'
import Prix from '@/components/Prix'
import Noustrouver from '@/components/Noustrouver'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/home',
      name:'Index',
      component: Index
    },
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
      path:'/tarif',
      name: 'Prix',
      component: Prix
    },
    {
      path:'/reservation',
      name:'Reservation',
      component: Reservation
    },
    {
      path:'/noustrouver',
      name:'Noustrouver',
      component: Noustrouver
    }
  ]
})
