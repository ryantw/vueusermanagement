let api = {}

const actions = {
  initStore ({ commit }, options) {
    api = options.api
  },

  async getUsers ({ dispatch, commit }) {
    let users = []
    dispatch('setIsLoading', true, { root: true })
    try {
      const usersResponse = await api.getUsers()
      users = usersResponse.data
    } catch (e) {
      console.log('failed to get users', e)
      dispatch('addMessage', { message: 'Failed to load users.', type: 'error' }, { root: true })
    } finally {
      commit('setUsers', users)
      dispatch('setIsLoading', false, { root: true })
    }
  },

  async getUser ({ dispatch, commit }, id) {
    let user = {}
    dispatch('setIsLoading', true, { root: true })
    try {
      const userResponse = await api.getUser(id)
      user = userResponse.data
    } catch (e) {
      console.log('failed to get user', id, e)
    } finally {
      dispatch('setIsLoading', false, { root: true })
    }
    return user
  },

  async addUser ({ dispatch, commit, getters }, request) {
    dispatch('setIsLoading', true, { root: true })
    try {
      const response = await api.addUser(request)
      const user = response.data
      commit('setUsers', getters.users.concat(user))
    } catch (e) {
      console.log('failed to add new user', e)
    } finally {
      dispatch('setIsLoading', false, { root: true })
    }
  },

  async updateUser ({ getters, dispatch, commit }, request) {
    dispatch('setIsLoading', true, { root: true })
    try {
      const response = await api.updateUser(request)
      const index = getters.users.findIndex((u) => u === request.id)
      let updatedUsers = getters.users
      updatedUsers[index] = request

      commit('setUsers', updatedUsers)
      console.log('updated user', request.id, response.data)
    } catch (e) {
      console.log('failed to add new user', e)
    } finally {
      dispatch('setIsLoading', false, { root: true })
    }
  },

  async deleteUser ({ dispatch, commit, getters }, id) {
    dispatch('setIsLoading', true, { root: true })
    try {
      const response = await api.deleteUser(id)
      const index = getters.users.findIndex((a) => a.id === id)
      console.log(index)
      const updatedUsers = getters.users.slice(0, index).concat(getters.users.slice(index + 1, getters.users.length))
      commit('setUsers', updatedUsers)
      console.log('deleted user', id, response.data)
    } catch (e) {
      console.log('failed to delete user', id, e)
    } finally {
      dispatch('setIsLoading', false, { root: true })
    }
  },

  async login ({ dispatch, commit, state }, loginRequest) {
    console.log('in login()')
    dispatch('setIsLoading', true, { root: true })
    try {
      // gets JWT and expiration time only
      const loginResponse = await api.loginUser(loginRequest)
      const id = loginResponse.data.userId

      // add token to localStorage
      localStorage.setItem('token', loginResponse.data.access_token)

      dispatch('Activity/setLoggedin', loginResponse.data)

      // fetch user from user api
      try {
        const userResponse = await api.getUser(id)
        const user = { ...userResponse.data, id }

        localStorage.setItem('user', user)
        dispatch('setUser', user, { root: true })
      } catch (e) {
        console.log('failed to get user:', id)
      }
    } catch (e) {
      dispatch('showSnackbar', { text: `Failed to login: ${e.message}`, type: 'error' }, { root: true })
      throw e
    } finally {
      dispatch('setIsLoading', false, { root: true })
    }
  }
}

export default actions
