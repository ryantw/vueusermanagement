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
              @emailChanged="handleEmailChanged"
              @passwordChanged="handlePasswordChanged"
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
import LoginForm from '@/components/login/LoginForm.vue'

export default {
  components: {
    LoginForm
  },
  data () {
    return {
      email: '',
      password: '',
      loginErrors: false
    }
  },
  methods: {
    async loginUser () {
      const userLoginRequest = new UserLoginRequest(
        this.email,
        this.password
      )
      try {
        await this.$store.dispatch('User/login', userLoginRequest)

        if (this.$route.query.reroute) {
          const decodedUri = decodeURI(this.$route.query.reroute)
          const path = { path: `${decodedUri}` }
          this.$router.push(path)
        }
      } catch (e) {
        // handled by snackbar now
        // this.$store.dispatch('addMessage', { message: 'Log in failed.', type: 'error' })
        this.loginErrors = true
      }
    },
    handlePasswordChanged (value) {
      this.password = value
    },
    handleEmailChanged (value) {
      this.email = value
    }
  }
}
</script>
