import axios from 'axios'

export default class Fetch {
  checkResponseStatus (response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    throw new Error(response.statusText)
  }

  fetch (url, method, config = {}) {
    return axios.request({ url, method, headers: config.headers, data: config.data })
      .then(this.checkResponseStatus)
      .then((response) => {
        this.retry = 0
        return response.data
      })
      .catch((error) => {
        // if 401 with www auth redirect to login
        // add external logger
        throw error // throw for client error handling
      })
  }

  get (url, config = {}) {
    const method = 'get'
    return this.fetch(url, method, config)
  }

  post (url, config = {}) {
    const method = 'post'
    return this.fetch(url, method, config)
  }

  put (url, config = {}) {
    const method = 'put'
    return this.fetch(url, method, config)
  }

  delete (url, config = {}) {
    const method = 'delete'
    return this.fetch(url, method, config)
  }
}
