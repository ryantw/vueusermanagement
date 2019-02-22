let api = {}

const actions = {
  initStore ({ commit }, options) {
    api = options.api
  },
  setIsLoading ({ commit }, isLoading) {
    commit('setIsLoading', isLoading)
  },
  setUser ({ commit }, user) {
    commit('setUser', user)
  },
  addMessage ({ commit }, message) {
    commit('addMessage', message)
  },
  removeMessageAtIndex ({ commit }, index) {
    commit('removeMessageAtIndex', index)
  },
  setSelectedMessageIndex ({ commit }, index) {
    commit('setSelectedMessageIndex', index)
  },
  logout ({ commit }) {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    commit('setUser', null)

    // need to clear users
    commit('User/setUsers', [])
  },
  async getTenants ({ commit }) {
    try {
      const response = await api.getTenants()
      commit('setTenants', response.data)
    } catch (e) {
      console.log('failed to fetch tenants', e)
    }
  },
  setSelectedTenantIndex ({ commit }, value) {
    commit('setSelectedTenantIndex', value)
  },
  showSnackbar ({ commit }, text) {
    commit('showSnackbar', text)
  },
  hideSnackbar ({ commit }) {
    commit('hideSnackbar')
  }
}

export default actions
