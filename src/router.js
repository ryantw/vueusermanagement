import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `./views/${view}.vue`)
}

function loadComponent (component) {
  return () => import(/* webpackChunkName: "component-[request]" */ `./components/${component}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home')
    },
    {
      path: '/users',
      name: 'users',
      component: loadComponent('UserList')
    },
    {
      path: '/users/edit/:id',
      name: 'userEdit',
      component: loadComponent('UserEdit'),
      props: true
    },
    {
      path: '/users/new',
      name: 'userNew',
      component: loadComponent('UserNew')
    },
    {
      path: '/login',
      name: 'userLogin',
      component: loadComponent('UserLogin')
    }
  ]
})
