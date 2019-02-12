<template>
  <div>
    <h1>Users</h1>
    <hr>
    <p>
      <router-link
        class="btn btn-success m-1"
        :to="{name: 'userNew'}"
      >
        Add New User
      </router-link>
      <button
        class="btn btn-secondary m-1"
        @click="getUsers()"
      >
        Refresh
      </button>
    </p>
    <div v-if='users.length > 0'>
      <table class='table table-striped table-dark'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Roles</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(user, index) in users' :key='user.id'>
            <th scope='row'>{{ user.id }}</th>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.emailAddress }}</td>
            <td>{{ user.role }}</td>
            <td>
              <router-link
                tag="a"
                :to="{ name: 'userEdit', params: { id: user.id }}"
                class="btn btn-info m-1"
              >
                Edit
              </router-link>
              <button
                href=""
                class="btn btn-danger m-1"
                @click="deleteUser(index, user)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No users.</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    async deleteUser (index, user) {
      if (!confirm('Delete: ' + user.firstName + ' ' + user.lastName + '?')) {
        return
      }

      this.$store.dispatch('User/deleteUser', user.id)
    },
    async getUsers () {
      await this.$store.dispatch('User/getUsers')
    }
  },
  computed: {
    users: function () {
      return this.$store.getters['User/users']
    }
  },
  created () {
    this.getUsers()
  }
}
</script>
