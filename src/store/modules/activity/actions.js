let timeout // the timer till timeout
let timeoutTime = 1 // the time in ms that the timer is set for
let inactivityTimer = false // value if inactivity timer is started
let sessionStartTime // session time

function startInactivityTimer (dispatch) {
  inactivityTimer = true
  sessionStartTime = Date.now()

  refresh(dispatch)
}

function refresh (dispatch) {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    // Log out the user
    dispatch('User/logout')
  }, timeoutTime)
}

function getSessionTime () {
  const now = Date.now()
  return now - sessionStartTime
}

const actions = {
  setLoggedIn ({ commit }, loginResponse) {
    if (!loginResponse.expires_in) {
      commit('setLoggedIn', false)
      return
    }
    commit('setExpirationTime', loginResponse.expires_in)
    commit('setLoggedIn', true)
    if (!loginResponse || inactivityTimer) return

    startInactivityTimer()
  }
}

export default actions
