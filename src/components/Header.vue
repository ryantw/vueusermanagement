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
        v-if="!isLoggedIn"
        flat
        class=""
        @click="showLoginDialog = true"
      >
        Login
      </v-btn>
      <v-menu
        v-else
        bottom
        left
      >
        <v-btn
          slot="activator"
          flat
        >
          {{ user.username }}
        </v-btn>
        <div>
          <v-btn
            @click="logout"
          >
            Logout
          </v-btn>
        </div>
      </v-menu>
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
import LoginDialog from '@/components/login/LoginDialog.vue'

export default {
  components: {
    LoginDialog
  },
  data () {
    return {
      showLoginDialog: false
    }
  },
  computed: {
    isLoggedIn () {
      return this.user !== null
    },
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    handleCloseLoginDialog () {
      this.showLoginDialog = false
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
