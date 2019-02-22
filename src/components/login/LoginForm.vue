<template>
  <v-form>
    <v-container>
      <v-layout column>
        <tenant-selector />
        <v-text-field
          id="emailAddress"
          :value="email"
          label="Email address"
          name="emailAddress"
          autocomplete="username email"
          :rules="[rules.required, rules.email, rules.length255]"
          @input="emailChanged"
        />
        <v-text-field
          id="password"
          :value="password"
          autocomplete="current-password"
          label="Password"
          name="password"
          type="password"
          :rules="[rules.required, rules.length255]"
          @input="passwordChanged"
        />
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import TenantSelector from '@/components/TenantSelector.vue'
import ValidationRules from '@/utils/ValidationRules'
const LoginForm = {
  components: {
    TenantSelector
  },
  metaInfo: {
    title: 'Login'
  },
  data () {
    return {
      rules: ValidationRules
    }
  },
  props: {
    email: {
      type: String,
      default: '',
      required: true
    },
    password: {
      type: String,
      default: '',
      required: true
    }
  },
  mounted () {
    this.emailChanged(this.email)
    this.passwordChanged(this.password)
  },
  methods: {
    emailChanged (value) {
      this.$emit('emailChanged', value)
    },
    passwordChanged (value) {
      this.$emit('passwordChanged', value)
    }
  }
}

export default LoginForm
</script>
