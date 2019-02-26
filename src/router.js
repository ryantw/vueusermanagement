import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `./views/${view}.vue`)
}

function loadComponent (component, path = './components/') {
  return () => import(/* webpackChunkName: "component-[request]" */ `${path}${component}.vue`)
}

const router = new Router({
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
      meta: {
        auth: true
      },
      component: loadComponent('UserList')
    },
    {
      path: '/users/edit/:id',
      name: 'userEdit',
      component: loadComponent('UserEdit'),
      meta: {
        auth: true
      },
      props: true
    },
    {
      path: '/users/new',
      name: 'userNew',
      meta: {
        auth: true
      },
      component: loadComponent('UserNew')
    },
    {
      path: '/login',
      name: 'login',
      component: loadComponent('UserLogin', './components/login/')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.auth) {
    next()
    return
  }

  const user = store.getters.user
  if (!user) {
    // redirect to login page
    next({ name: 'login', query: { reroute: to.path } })
    return
  }
  next()
})

export default router
