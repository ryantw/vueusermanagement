import axios from 'axios'
import { ApiRootUrl } from './endpoints'

const base = axios.create({
  baseURL: ApiRootUrl
})

// Add jwt token to request if one is saved in localstorage
base.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }
  const tenantId = localStorage.getItem('tenantId')
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

export default base
