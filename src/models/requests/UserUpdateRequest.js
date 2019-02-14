export default class UserUpdateRequest {
  constructor (id, firstName = '', lastName = '', email = '') {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
  }
}
