import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserEdit from '@/components/UserEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Users.vue')
    },
    {
      path: '/users/edit/:id',
      name: 'userEdit',
      component: UserEdit,
      props: true
    }
  ]
})
