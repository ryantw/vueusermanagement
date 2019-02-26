export default class UserUpdateRequest {
  constructor (id, firstName = '', lastName = '', email = '', isEnabled = true, username = '') {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.isEnabled = isEnabled
    this.username = username || email
  }
}
