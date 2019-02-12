export default class User {
  constructor (id, firstName = '', lastName = '', emailAddress = '', role = '') {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.emailAddress = emailAddress
    this.role = role
  }
}
