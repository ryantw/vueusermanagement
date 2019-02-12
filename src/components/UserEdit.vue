<template>
    <div>
        <h1>Edit User {{ id }}</h1>
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
                          v-model="user.firstName"
                        >
                    </div>
                    <div class="form-group col-md-4">
                        <label for="lastName">Lastname</label>
                        <input
                          type="text"
                          id="lastName"
                          class="form-control"
                          v-model="user.lastName"
                        >
                    </div>
                    <div class="form-group col-md-4">
                        <label for="emailAddress">Email Address</label>
                        <input
                            type="text"
                            id="emailAddress"
                            class="form-control"
                            v-model="user.emailAddress"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <button
                            class="btn btn-success"
                            @click.prevent="saveUser"
                          >
                            Save Changes
                          </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import UserUpdateRequest from '@/models/requests/UserUpdateRequest'

export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {
      user: {
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
    async saveUser () {
      const userUpdateRequest = new UserUpdateRequest(
        this.id,
        this.user.firstName,
        this.user.lastName,
        this.user.emailAddress
      )
      try {
        await this.$store.dispatch('User/updateUser', userUpdateRequest)
        this.$router.push('/users')
      } catch (e) {
        console.log('failed to update user, not changing routes')
      }
    },

    async getUser () {
      let user = {}
      try {
        user = await this.$store.dispatch('User/getUser', this.id)
      } catch (e) {
        console.log('could not find user', this.id)
      } finally {
        this.user = user
      }
    }
  },
  created () {
    // should take supplied prop ID and call api to get up to date data on user
    // then use that data to update form fields

    this.getUser()
  }
}
</script>
