import axios from 'axios'
import { ApiRootUrl, UserUrl, UserLogin } from './endpoints.js'

const base = axios.create()

const api = {
  getUsers: () => base.get(`${ApiRootUrl}${UserUrl}`),
  getUser: (id) => base.get(`${ApiRootUrl}${UserUrl}/${id}`),
  deleteUser: (id) => base.delete(`${ApiRootUrl}${UserUrl}/${id}`),
  addUser: (user) => base.post(`${ApiRootUrl}${UserUrl}`, user),
  updateUser: (user) => base.put(`${ApiRootUrl}${UserUrl}/${user.id}`, user),
  loginUser: (user) => base.post(`${ApiRootUrl}${UserLogin}`, user)
}

export default api
