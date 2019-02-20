
import { TenantUrl } from './tenantEndpoints'
import base from '../base'

const api = {
  getTenants: () => base.get(`${TenantUrl}`)
}

export default api
