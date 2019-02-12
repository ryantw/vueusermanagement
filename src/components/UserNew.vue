<template>
    <div>
        <h1>Creating New User</h1>
        <div v-if="userSaved">
            <div class="row">
                <div class="alert alert-success text-center">
                    <h2>User saved.</h2>
                </div>
            </div>
        </div>
        <div v-if="!userSaving">
            <form>
                <div class="row">
                    <div class="form-group col-md-4">
                        <label for="firstName">Firstname</label>
                        <input
                            type="text"
                            id="firstName"
                            class="form-control"
                            v-model="user.firstName">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="lastName">Lastname</label>
                        <input
                            type="text"
                            id="lastName"
                            class="form-control"
                            v-model="user.lastName">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="emailAddress">Email Address</label>
                        <input
                            type="text"
                            id="emailAddress"
                            class="form-control"
                            v-model="user.emailAddress">
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <button
                          type="submit"
                          class="btn btn-success"
                          @click.prevent="updateUser"
                        >
                          Save Changes
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div v-else>
            <div class="row">
                <div class="col-lg-12">
                    <img src="../assets/loading.png" class="mx-auto d-block" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserAddRequest from '@/models/requests/UserAddRequest'

export default {
  data () {
    return {
      user: {
        id: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        role: ''
      },
      userSaving: false,
      userSaved: false,
      userToken: this.$store.getters.getUserToken
    }
  },
  methods: {
    async updateUser () {
      const userAddRequest = new UserAddRequest(
        this.user.firstName,
        this.user.lastName,
        this.user.emailAddress
      )

      try {
        await this.$store.dispatch('User/addUser', userAddRequest)
        this.$router.push('/users')
      } catch (e) {
        console.log('failed to add user, not changing route')
      }
    }
  }
}
</script>
