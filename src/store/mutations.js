const mutations = {
  setIsLoading (state, isLoading) {
    state.isLoading = isLoading
  },
  setUser (state, user) {
    state.user = user
  },
  addMessage (state, message) {
    state.messages.push(message)
    state.selectedMessageIndex = state.messages.length - 1
  },
  removeMessageAtIndex (state, index) {
    if (index < 0 || index >= state.messages.length) return
    state.messages = state.messages.slice(0, index).concat(state.messages.slice(index + 1, state.messages.length))
    state.selectedMessageIndex = state.messages.length - 1
  },
  setSelectedMessageIndex (state, index) {
    if (index < 0 || index >= state.messages.length) state.selectedMessageIndex = 0
    state.selectedMessageIndex = index
  }
}

export default mutations
