export default class UserAddRequest {
  constructor (firstName = '', lastName = '', emailAddress = '', role) {
    this.firstName = firstName
    this.lastName = lastName
    this.emailAddress = emailAddress
    if (role && role.length) {
      this.role = role
    }
  }
}
