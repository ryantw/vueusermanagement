<template>
  <div>
    <h1>Users</h1>
    <p>
      <v-btn
        color="primary"
        :to="{name: 'userNew'}"
      >
        Add New User
      </v-btn>
      <v-btn
        color="secondary"
        @click="getUsers()"
      >
        Refresh
      </v-btn>
    </p>
    <div v-if="users.length > 0">
      <v-data-table
        :headers="headers"
        :items="users"
      >
        <template
          slot="items"
          slot-scope="props"
        >
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.firstName }}</td>
          <td>{{ props.item.lastName }}</td>
          <td>{{ props.item.emailAddress }}</td>
          <td>{{ props.item.role }}</td>
          <td>
            <v-btn
              color="success"
              tag="a"
              :to="{ name: 'userEdit', params: { id: props.item.id }}"
            >
              Edit
            </v-btn>
            <v-btn
              color="error"
              href=""
              @click="deleteUser(props.item.id)"
            >
              Delete
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </div>
    <div v-else>
      <p>No users.</p>
    </div>
    <yes-no-dialog
      v-model="showDialog"
      :text="`Remove ${selectedUser.firstName} ${selectedUser.lastName}`"
      @dialogResponse="handleDialogResponse"
    />
  </div>
</template>

<script>
import YesNoDialog from '@/components/YesNoDialog.vue'
export default {
  components: {
    YesNoDialog
  },
  data () {
    return {
      headers: [
        { text: 'ID', sortable: true, value: 'id' },
        { text: 'First Name', sortable: true, value: 'firstName' },
        { text: 'Last Name', sortable: true, value: 'lastName' },
        { text: 'Email Address', sortable: true, value: 'emailAddress' },
        { text: 'Role', sortable: true, value: 'role' },
        { text: 'Actions', sortable: false }],
      showDialog: false,
      selectedUser: {}
    }
  },
  computed: {
    users: function () {
      return this.$store.getters['User/users']
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    async deleteUser (id) {
      this.selectedUser = await this.$store.dispatch('User/getUser', id)
      this.showDialog = true
    },
    async getUsers () {
      await this.$store.dispatch('User/getUsers')
    },
    async handleDialogResponse (response) {
      this.showDialog = false
      if (!response) return

      await this.$store.dispatch('User/deleteUser', this.selectedUser.id)
    }
  }
}
</script>
