const mutations = {
  setIsLoading (state, isLoading) {
    state.isLoading = isLoading
  },
  setUser (state, user) {
    state.user = user
  },
  addMessage (state, message) {
    state.messages.push(message)
  },
  removeMessageAtIndex (state, index) {
    if (index < 0 || index >= state.messages.length) return
    state.messages = state.messages.slice(0, index).concat(state.messages.slice(index + 1, state.messages.length))
  },
  setSelectedMessageIndex (state, index) {
    if (index < 0 || index >= state.messages.length) state.selectedMessageIndex = 0
    state.selectedMessageIndex = index
  }
}

export default mutations
