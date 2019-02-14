import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const ActivityStore = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

export default ActivityStore
