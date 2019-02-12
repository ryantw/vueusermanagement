const delay = 250

let users = [
  {
    id: 1,
    firstName: 'Ryan',
    lastName: 'Walker',
    emailAddress: 'ryanwalker@gmail.com',
    role: 'admin'
  }
]

function getGUID () {
  return 'xxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 10 | 0
    return parseInt(r)
  })
}

function getUsers () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.slice())
    }, delay)
  })
}

function getUser (id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.slice().find((u) => parseInt(u.id) === parseInt(id)))
    }, delay)
  })
}

function addUser (userAddRequest) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = { ...userAddRequest, id: getGUID() }
      users.push(newUser)
      resolve(newUser)
    }, delay)
  })
}

function deleteUser (id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = users.findIndex((u) => parseInt(u.id) === parseInt(id))
      if (index < 0) return
      users = users.slice(0, index).concat(users.slice(index + 1, users.length))
      resolve()
    }, delay)
  })
}

function updateUser (userUpdateRequest) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = users.findIndex((u) => parseInt(u.id) === parseInt(userUpdateRequest.id))
      if (index < 0) return
      users[index] = { ...users[index], ...userUpdateRequest }
      resolve(users[index])
    }, delay)
  })
}

const api = {
  getUsers: () => getUsers(),
  getUser: (id) => getUser(id),
  deleteUser: (id) => deleteUser(id),
  addUser: userAddRequest => addUser(userAddRequest),
  updateUser: userUpdateRequest => updateUser(userUpdateRequest)
}

export default api
