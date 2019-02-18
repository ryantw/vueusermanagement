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
        <v-form>
          <v-container>
            <v-layout column>
              <v-text-field
                id="emailAddress"
                v-model="emailAddress"
                label="Email address"
                name="emailAddress"
                autocomplete="username email"
              />
              <v-text-field
                id="password"
                v-model="password"
                autocomplete="current-password"
                label="Password"
                name="password"
                type="password"
              />
              <v-btn
                color="success"
                type="submit"
                @click.prevent="handleSubmit"
              >
                Login
              </v-btn>
            </v-layout>
          </v-container>
        </v-form>
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
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      emailAddress: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      try {
        this.$store.dispatch('User/login', new UserLoginRequest(this.emailAddress, this.password))
        this.$emit('close')
      } catch (e) {
      }
    },
    handleModelChanged (value) {
      this.$emit('close')
    }
  }
}
</script>
