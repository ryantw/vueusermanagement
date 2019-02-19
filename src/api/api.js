import axios from 'axios'
import { ApiRootUrl, UserUrl, UserLoginUrl, WhoAmIUrl } from './endpoints.js'

const base = axios.create()
// Add jwt token to request if one is saved in localstorage
base.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }
  const tenantId = process.env.VUE_APP_TENANTID
  if (tenantId) {
    config.headers['X-TenantID'] = tenantId
  }
  return config
}, (error) => {
  console.log(error.response.status)
  return Promise.reject(error.response)
})

base.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response.status === 401) {
      // call logout
      // do login prompt?
    }
    return Promise.reject(error.response.data)
  })

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
