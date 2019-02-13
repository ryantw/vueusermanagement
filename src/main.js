import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Api from './api'
import MockApi from './api/mockApi'

const mockApi = false

let api = Api

if (mockApi) {
  api = MockApi
}

Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate: function () {
    this.$store.dispatch('User/initStore', {
      api: api
    })
  },
  render: h => h(App)
}).$mount('#app')
