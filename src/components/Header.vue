<template>
  <v-toolbar>
    <v-toolbar-title>
      <v-btn
        flat
        to="/"
      >
        User Management
      </v-btn>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        flat
        to="/users"
        tag="a"
        active-class="active"
        class="hidden-sm-and-down"
      >
        Users
      </v-btn>
      <v-btn
        flat
        class=""
        @click="showLoginDialog = true"
      >
        Login
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon
      class="hidden-md-and-up"
    />
    <login-dialog
      v-model="showLoginDialog"
      @close="handleCloseLoginDialog"
    />
  </v-toolbar>
</template>

<script>
import LoginDialog from '@/components/LoginDialog.vue'

export default {
  components: {
    LoginDialog
  },
  data () {
    return {
      showLoginDialog: false
    }
  },
  methods: {
    handleCloseLoginDialog () {
      this.showLoginDialog = false
    }
  }
}
</script>
