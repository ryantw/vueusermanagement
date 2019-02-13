import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Api from './api'
import MockApi from './api/mockApi'

const mockApi = String(process.env.VUE_APP_MOCK_API) === 'true'

let api = Api

if (mockApi) {
  console.log('Mocking all api calls!')
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
