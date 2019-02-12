<template>
  <div>
    <h1>Edit User {{ id }}</h1>
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
              label="First Name"
              type="text"
              name="firstName"
              class="form-control"
              :rules="[rules.required, rules.length255]"
            />
          </v-flex>
          <v-flex
            xs12
            md4
          >
            <v-text-field
              id="lastName"
              v-model="user.lastName"
              label="Last Name"
              type="text"
              name="lastName"
              class="form-control"
              :rules="[rules.required, rules.length255]"
            />
          </v-flex>
          <v-flex
            xs12
            md4
          >
            <v-text-field
              id="emailAddress"
              v-model="user.emailAddress"
              label="Email Address"
              type="text"
              name="emailAddress"
              class="form-control"
              :rules="[rules.required, rules.email, rules.length255]"
            />
          </v-flex>
        </v-layout>
        <v-btn
          color="success"
          @click.prevent="saveUser"
        >
          Save Changes
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import UserUpdateRequest from '@/models/requests/UserUpdateRequest'
import ValidationRules from '@/utils/ValidationRules'

export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {
      user: {
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
  created () {
    // should take supplied prop ID and call api to get up to date data on user
    // then use that data to update form fields

    this.getUser()
  },
  methods: {
    async saveUser () {
      const userUpdateRequest = new UserUpdateRequest(
        this.id,
        this.user.firstName,
        this.user.lastName,
        this.user.emailAddress
      )
      try {
        await this.$store.dispatch('User/updateUser', userUpdateRequest)
        this.$router.push('/users')
      } catch (e) {
        console.log('failed to update user, not changing routes')
      }
    },

    async getUser () {
      let user = {}
      try {
        user = await this.$store.dispatch('User/getUser', this.id)
      } catch (e) {
        console.log('could not find user', this.id)
      } finally {
        this.user = user
      }
    }
  }
}
</script>
