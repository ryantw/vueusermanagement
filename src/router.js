import Vue from 'vue'
import Router from 'vue-router'
import UserEdit from '@/components/UserEdit.vue'
import UserNew from '@/components/UserNew.vue'

Vue.use(Router)

function loadComponent (path) {
  return () => import(/* webpackChunkName: "[path]" */ `./views/${path}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadComponent('Home')
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
    },
    {
      path: '/users/new',
      name: 'userNew',
      component: UserNew
    }
  ]
})
