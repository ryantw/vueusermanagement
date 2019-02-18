export default class UserUpdateRequest {
  constructor (id, firstName = '', lastName = '', emailAddress = '') {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.emailAddress = emailAddress
  }
}
