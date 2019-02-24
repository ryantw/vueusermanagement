<template>
  <v-menu
    bottom
    left
  >
    <v-btn
      slot="activator"
      flat
    >
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile>
        <v-btn
          to="/users"
          tag="a"
          flat
          active-class="active"
        >
          Users
        </v-btn>
      </v-list-tile>
      <v-list-tile>
        <v-btn
          v-if="user"
          flat
          @click="logout"
        >
          Logout
        </v-btn>
        <v-btn
          v-else
          flat
          @click="login"
        >
          Login
        </v-btn>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
const MobileLinkList = {
  props: {
    user: {
      validator: prop => typeof Object || prop === null,
      required: true
    }
  },
  methods: {
    login () {
      this.$emit('login')
    },
    logout () {
      this.$emit('logout')
    }
  },
  computed: {
    isLoggedIn () {
      return this.user !== null
    }
  }
}

export default MobileLinkList
</script>
