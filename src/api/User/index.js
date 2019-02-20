
import { UserUrl, UserLoginUrl, WhoAmIUrl } from './userEndpoints'
import base from '../base'

const api = {
  getUsers: () => base.get(`${UserUrl}`),
  getUser: (id) => base.get(`${UserUrl}/${id}`),
  deleteUser: (id) => base.delete(`${UserUrl}/${id}`),
  addUser: (user) => base.post(`${UserUrl}`, user),
  updateUser: (user) => base.put(`${UserUrl}/${user.id}`, user),
  loginUser: (loginRequest) => base.post(`${UserLoginUrl}`, loginRequest),
  whoAmI: () => base.post(`${WhoAmIUrl}`)
}

export default api
