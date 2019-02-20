<template>
  <v-snackbar
    v-model="snackbarVisible"
    :color="snackbarValue.type"
    vertical
    :timeout="6000"
  >
    {{ snackbarValue.text }}
    <v-btn
      v-if="closeBtn"
      dark
      flat
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>

const TheSnackBar = {
  props: {
    closeBtn: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    snackbarVisible: {
      get () {
        return this.$store.getters.snackbarVisible
      },
      set () {
        this.$store.dispatch('hideSnackbar')
      }
    },
    snackbarValue () {
      return this.$store.getters.snackbarValue
    }
  }
}

export default TheSnackBar
</script>
