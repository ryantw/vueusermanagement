let api = {}

const actions = {
  initStore ({ commit }, options) {
    api = options.api
  },

  async getUsers ({ dispatch, commit }) {
    let users = []
    dispatch('setIsLoading', true, { root: true })
    try {
      users = await api.getUsers()
    } catch (e) {
      console.log('failed to get users', e)
    } finally {
      commit('setUsers', users)
      dispatch('setIsLoading', false, { root: true })
    }
  },

  async getUser ({ dispatch, commit }, id) {
    let user = {}
    dispatch('setIsLoading', true, { root: true })
    try {
      user = await api.getUser(id)
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
      commit('setUsers', getters.users.concat(response))
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
      console.log('updated user', request.id, response)
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
      console.log('deleted user', id, response)
    } catch (e) {
      console.log('failed to delete user', id, e)
    } finally {
      dispatch('setIsLoading', false, { root: true })
    }
  },

  async loginUser ({ dispatch, commit, state }, user) {
    console.log('in loginUser()')
    dispatch('setIsLoading', true, { root: true })
    try {
      const response = await api.loginUser(user)
      console.log(response)
    } catch (e) {
      console.log('login failed: ', e)
    } finally {
      dispatch('setIsLoading', false, { root: true })
    }
  }
}

export default actions
