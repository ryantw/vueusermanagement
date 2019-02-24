<template>
  <v-toolbar-items>
    <v-btn
      flat
      to="/users"
      tag="a"
      active-class="active"
    >
      Users
    </v-btn>
    <v-btn
      v-if="!isLoggedIn"
      flat
      @click="login"
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
      <v-list>
        <v-list-tile>
          <v-btn
            flat
            @click="logout"
          >
            Logout
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar-items>
</template>

<script>
const LinkList = {
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

export default LinkList
</script>

<style>

</style>
