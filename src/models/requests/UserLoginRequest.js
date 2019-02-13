export default class UserLoginRequest {
  constructor (emailAddress = '', password = '') {
    this.emailAddress = emailAddress
    this.password = password
  }
}
