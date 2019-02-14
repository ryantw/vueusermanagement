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
            <v-text-field
              id="emailAddress"
              v-model="user.emailAddress"
              label="Email Address"
              type="text"
              autocomplete="username email"
              name="emailAddress"
              class="form-control"
              :rules="[rules.required, rules.email, rules.length255]"
            />
            <v-text-field
              id="password"
              v-model="user.password"
              label="Password"
              type="password"
              autocomplete="current-password"
              name="password"
              class="form-control"
              :rules="[rules.required, rules.length255]"
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
import ValidationRules from '@/utils/ValidationRules'
export default {
  data () {
    return {
      user: {
        emailAddress: '',
        password: ''
      },
      loginErrors: false,
      rules: ValidationRules
    }
  },
  methods: {
    async loginUser () {
      const userLoginRequest = new UserLoginRequest(
        this.emailAddress,
        this.password
      )
      try {
        await this.$store.dispatch('User/loginUser', userLoginRequest)
        this.$router.push('/users')
      } catch (e) {
        this.loginErrors = true
        console.log('Login failed, parse out and handle diff return codes?')
      }
    }
  }
}
</script>
