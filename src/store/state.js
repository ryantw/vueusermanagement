const state = {
  isLoading: false,
  user: null,
  messages: [ { message: 'Test message.', type: 'info' } ],
  selectedMessageIndex: 0,
  tenants: [],
  selectedTenantIndex: 0,
  snackbarValue: '',
  snackbarVisible: false
}

export default state
