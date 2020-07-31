import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'views/Home.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Mobile',
    name: 'Mobile',
    component: () => import( /* webpackChunkName: "Mobile" */ 'views/Mobile/index.vue')
  },
  {
    path: '/PC',
    name: 'PC',
    component: () => import( /* webpackChunkName: "PC" */ 'views/PC/index.vue'),
  },
  {
    path: '/chatRoom',
    name: 'chatRoom',
    component: () => import( /* webpackChunkName: "PC" */ 'views/PC/chatRoom/chatRoom.vue'),
  },
  {
    path: '/txtToAudio',
    name: 'txtToAudio',
    component: () => import( /* webpackChunkName: "PC" */ 'views/PC/txtToAudio/txtToAudio.vue'),
  },
  {
    path: '/serverError',
    name: 'serverError',
    component: () => import( /* webpackChunkName: "Error" */ 'views/Error/serverError.vue')
  },
  {
    path: '*',
    name: 'notFind',
    component: () => import( /* webpackChunkName: "Error" */ 'views/Error/notFind.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router