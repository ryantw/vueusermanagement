export default class User {
  constructor (id, firstName = '', lastName = '', email = '', username = '') {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.username = username
  }
}
