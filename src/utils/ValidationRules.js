import { email } from 'vuelidate/lib/validators'

export default {
  required: (v) => !!v || 'Required.',
  length255: (v) => (v && v.length <= 255) || 'Must be less than 256 characters',
  email: (v) => email(v) || 'Must be valid email address',
  number: (v) => (!v || !isNaN(parseFloat(v))) || 'Must be a number',
  decimal: (v) => (!v || v.indexOf('.') < 0 || v.indexOf('.') >= 0 &&
    v.substring(v.indexOf('.') + 1).length < 3) || 'Must be a valid amount',
  positive: (v) => (!v || parseFloat(v) > 0) || 'Must be greater than 0'
}
