const actions = {
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
  }
}

export default actions
