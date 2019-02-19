const getters = {
  isRunning: (state) => state.isRunning,
  sessionStartTime: (state) => state.sessionStartTime,
  sessionTime: (state) => Date.now() - state.sessionStartTime
}

export default getters
