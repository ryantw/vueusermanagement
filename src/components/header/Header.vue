<template>
  <v-toolbar
    color="cyan accent-2"
  >
    <v-toolbar-title>
      <v-btn
        flat
        to="/"
      >
        User Management
      </v-btn>
    </v-toolbar-title>
    <v-spacer />
    <link-list
      class="hidden-xs-only"
      :user="user"
      @login="showLoginDialog = true"
      @logout="logout"
    />
    <mobile-link-list
      class="hidden-sm-and-up"
      :user="user"
      @login="showLoginDialog = true"
      @logout="logout"
    />
    <login-dialog
      v-model="showLoginDialog"
      @close="handleCloseLoginDialog"
    />
  </v-toolbar>
</template>

<script>
import LoginDialog from '@/components/login/LoginDialog.vue'
import LinkList from '@/components/header/LinkList.vue'
import MobileLinkList from '@/components/header/MobileLinkList.vue'

export default {
  components: {
    LoginDialog,
    LinkList,
    MobileLinkList
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
