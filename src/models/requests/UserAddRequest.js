export default class UserAddRequest {
  constructor (firstName = '', lastName = '', email = '', password = 'test', username = '') {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.username = username || email
  }
}
