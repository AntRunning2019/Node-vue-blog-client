import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'

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
    component: () => import('../views/About')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog')
  },
  {
    path: '/diary',
    name: 'Diary',
    component: () => import('../views/Diary')
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('../views/Links')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
