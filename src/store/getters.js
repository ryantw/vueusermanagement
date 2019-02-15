const getters = {
  isLoading: (state) => state.isLoading,
  user: (state) => state.user,
  messages: (state) => state.messages,
  selectedMessageIndex: (state) => state.selectedMessageIndex,
  selectedMessage: (state) => state.messages[state.selectedMessageIndex]
}

export default getters
