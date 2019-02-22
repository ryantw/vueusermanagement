import Vue from 'vue'

import './plugins'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import { UserApi, TenantApi } from './api'
// import MockApi from './api/mockApi'

// const mockApi = String(process.env.VUE_APP_MOCK_API) === 'true'

// let api = Api

// if (mockApi) {
//   console.log('Mocking all api calls!')
//   api = MockApi
// }

// Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate () {
    this.$store.dispatch('User/initStore', {
      api: UserApi
    })
    this.$store.dispatch('initStore', {
      api: TenantApi
    })
  },
  mounted () {
    this.getTenantsAndSetDefaultTenant()
  },
  methods: {
    async getTenantsAndSetDefaultTenant () {
      await this.$store.dispatch('getTenants')
      const tenants = this.$store.getters.tenants

      if (!tenants.length) return

      const lastSelectedTenantId = localStorage.getItem('tenantId')

      const lastSelectedIndex = tenants.findIndex((t) => t.id === lastSelectedTenantId) | 0

      this.$store.dispatch('setSelectedTenantIndex', lastSelectedIndex)
    }
  },
  render: h => h(App)
}).$mount('#app')
