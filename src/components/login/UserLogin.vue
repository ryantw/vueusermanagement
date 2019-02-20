<template>
  <div>
    <h1>Login</h1>
    <div v-if="loginErrors">
      <h4>The login information you entered in invalid.</h4>
    </div>
    <v-form>
      <v-container>
        <v-layout>
          <v-flex
            xs12
            md4
          >
            <login-form
              :email="email"
              :password="password"
              @emailChanged="user.email = value"
              @passwrodChanged="user.password = value"
            />
            <v-btn
              color="success"
              @click.prevent="loginUser"
            >
              Login
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import UserLoginRequest from '@/models/requests/UserLoginRequest'

export default {
  data () {
    return {
      user: {
        emailAddress: '',
        password: ''
      },
      loginErrors: false
    }
  },
  methods: {
    async loginUser () {
      const userLoginRequest = new UserLoginRequest(
        this.emailAddress,
        this.password
      )
      try {
        const loginResponse = await this.$store.dispatch('User/login', userLoginRequest)
        console.log(loginResponse)
      } catch (e) {
        // handled by snackbar now
        // this.$store.dispatch('addMessage', { message: 'Log in failed.', type: 'error' })
        this.loginErrors = true
      }
    }
  }
}
</script>
