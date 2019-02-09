<template>
  <div>
    <h1>Users</h1>
    <hr>
    <p>
      <router-link
      class="btn btn-success"
      :to="{name: 'userNew'}"
      >Add New User</router-link>
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
            <td>{{ user.roles }}</td>
            <td>
              <router-link
                tag="a"
                :to="{ name: 'userEdit', params: { id: user.id }}"
                class="btn btn-info"
                >Edit</router-link>
              <a href='#' class='btn btn-danger' @click="userDelete(index, user)">Delete</a>
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
      users: []
    }
  },
  methods: {
      userDelete (index, user) {
          if(confirm("Delete: " + user.firstName + " " + user.lastName + "?")){
              this.$http.delete('/api/admin/users/' + user.id)
                .then(res => {
                    this.users.splice(index, 1);
                    console.log(res.status);
                }).catch((e) => {
                  console.log(e);
                })
          }
      }
  },
  created() {
      this.$http.get('/api/admin/users')
        .then(res => {
            console.log(res);
            this.users = res.data;
        }).catch((e) => {
            console.log(e);
        })
  }
}
</script>
