let timeout // the timeout timer
let timeoutTime = 1 // the time in ms that the timer is set for
let inactivityTimer = false // value if inactivity timer is started

function startInactivityTimer (dispatch) {
  inactivityTimer = true
  dispatch('setSessionStartTime', Date.now())
  refresh(dispatch)
}

function refresh (dispatch) {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    // Log out the user
    dispatch('logout', false, {})
  }, timeoutTime)
}

const actions = {
  startInactivityTimer ({ commit }, expirationTimeInMs) {
    if (!expirationTimeInMs) {
      commit('isRunning', false)
      return
    }
    commit('setExpirationTime', expirationTimeInMs)
    commit('isRunning', true)
    if (!expirationTimeInMs || !inactivityTimer) return

    startInactivityTimer()
  },
  stopInactivityTimer ({ commit }) {
    clearTimeout(timeout)
    commit('isRunning', false)
  }
}

export default actions
