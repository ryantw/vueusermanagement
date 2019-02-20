const getters = {
  isLoading: (state) => state.isLoading,
  user: (state) => state.user,
  messages: (state) => state.messages,
  selectedMessageIndex: (state) => state.selectedMessageIndex,
  selectedMessage: (state) => state.messages[state.selectedMessageIndex],
  tenants: (state) => state.tenants,
  selectedTenantIndex: (state) => state.selectedTenantIndex,
  selectedTenant: (state) => state.tenants[state.selectedTenantIndex],
  snackbarVisible: (state) => state.snackbarVisible,
  snackbarValue: (state) => state.snackbarValue
}

export default getters
