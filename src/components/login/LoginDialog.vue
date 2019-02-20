<template>
  <v-dialog
    :value="value"
    max-width="290"
    @input="handleModelChanged"
  >
    <v-card>
      <v-card-title
        class="headline"
      >
        Login
      </v-card-title>
      <v-card-text>
        <login-form
          :email="email"
          :password="password"
          @emailChanged="handleEmailChanged"
          @passwordChanged="handlePasswordChanged"
        />
        <v-container>
          <v-layout column>
            <v-btn
              color="success"
              type="submit"
              @click.prevent="handleSubmit"
            >
              Login
            </v-btn>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="green darken-1"
          flat="flat"
          @click.prevent="handleModelChanged"
        >
          Cancel
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import UserLoginRequest from '@/models/requests/UserLoginRequest'
import LoginForm from '@/components/login/LoginForm.vue'

export default {
  components: {
    LoginForm
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        await this.$store.dispatch('User/login', new UserLoginRequest(this.email, this.password))
        this.$emit('close')
      } catch (e) {
        // login failed
      }
    },
    handleModelChanged (value) {
      this.$emit('close')
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
