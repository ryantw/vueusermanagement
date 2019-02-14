import axios from 'axios'
import { ApiRootUrl, UserUrl, UserLoginUrl, WhoAmIUrl } from './endpoints.js'

const base = axios.create()
// Add jwt token to request if one is saved in localstorage
base.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (!token) return
  config.headers.authorization = `Bearer ${token}`
  return config
}, (error) => Promise.reject(error))

const api = {
  getUsers: () => base.get(`${ApiRootUrl}${UserUrl}`),
  getUser: (id) => base.get(`${ApiRootUrl}${UserUrl}/${id}`),
  deleteUser: (id) => base.delete(`${ApiRootUrl}${UserUrl}/${id}`),
  addUser: (user) => base.post(`${ApiRootUrl}${UserUrl}`, user),
  updateUser: (user) => base.put(`${ApiRootUrl}${UserUrl}/${user.id}`, user),
  loginUser: (loginRequest) => base.post(`${ApiRootUrl}${UserLoginUrl}`, loginRequest),
  whoAmI: () => base.post(`${ApiRootUrl}${WhoAmIUrl}`)
}

export default api
