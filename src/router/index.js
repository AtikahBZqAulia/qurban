import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sapi',
    name: 'Sapi',
    component: () => import(/* webpackChunkName: "about" */ '../components/Sapi.vue')
  },
  {
    path: '/kambing',
    name: 'Kambing',
    component: () => import(/* webpackChunkName: "about" */ '../components/Kambing.vue')
  },
  {
    path: '/domba',
    name: 'Domba',
    component: () => import(/* webpackChunkName: "about" */ '../components/Domba.vue')
  },
  {
    path: '/form-pemesanan',
    name: 'Formulir Pemesanan',
    component: () => import(/* webpackChunkName: "about" */ '../components/SOP.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
