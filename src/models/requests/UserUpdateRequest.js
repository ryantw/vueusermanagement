export default class UserUpdateRequest {
  constructor (id, firstName = '', lastName = '', emailAddress = '', role) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.emailAddress = emailAddress
    if (role && role.length) {
      this.role = role
    }
  }
}
