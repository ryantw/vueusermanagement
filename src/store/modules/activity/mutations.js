const mutations = {
  setIsRunning (state, loggedIn) {
    state.loggedIn = loggedIn
  },
  setExpirationTime (state, expirationTime) {
    state.expirationTime = expirationTime
  }
}

export default mutations
