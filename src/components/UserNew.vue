<template>
  <div>
    <h1>Creating New User</h1>
    <div v-if="userSaved">
      <h2>User saved.</h2>
    </div>
    <v-form>
      <v-container>
        <v-layout>
          <v-flex
            xs12
            md4
          >
            <v-text-field
              id="firstName"
              v-model="user.firstName"
              label="First name"
              type="text"
              name="firstName"
              class="form-control"
              :rules="[rules.required, rules.length255]"
              required
            />
          </v-flex>
          <v-flex
            xs12
            md4
          >
            <v-text-field
              id="lastName"
              v-model="user.lastName"
              label="Last name"
              type="text"
              name="lastName"
              class="form-control"
              :rules="[rules.required, rules.length255]"
              required
            />
          </v-flex>
          <v-flex
            xs12
            md4
          >
            <v-text-field
              id="emailAddress"
              v-model="user.emailAddress"
              label="Email address"
              type="text"
              name="emailAddress"
              class="form-control"
              :rules="[rules.required, rules.email, rules.length255]"
              required
            />
          </v-flex>
        </v-layout>
        <v-btn
          type="submit"
          color="success"
          @click.prevent="updateUser"
        >
          Save Changes
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import ValidationRules from '@/utils/ValidationRules'
import UserAddRequest from '@/models/requests/UserAddRequest'

export default {
  data () {
    return {
      user: {
        id: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        role: ''
      },
      userSaving: false,
      userSaved: false,
      userToken: this.$store.getters.getUserToken,
      rules: ValidationRules
    }
  },
  methods: {
    async updateUser () {
      const userAddRequest = new UserAddRequest(
        this.user.firstName,
        this.user.lastName,
        this.user.emailAddress
      )

      try {
        await this.$store.dispatch('User/addUser', userAddRequest)
        this.$router.push('/users')
      } catch (e) {
        console.log('failed to add user, not changing route')
      }
    }
  }
}
</script>
