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
                            class="btn btn-success"
                            @click.prevent="saveUser"
                            >Save Changes</button>
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
    export default {
        props: [ 'id' ],
        data() {
            return { 
                user: {
                    id: '',
                    firstName: '',
                    lastName: '',
                    emailAddress: '',
                    role: ''
                },
                userSaving: false,
                userSaved: false
            }
        },
        methods: {
            saveUser() {
                this.userSaving = true;
                const formData = {
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    emailAddress: this.user.emailAddress
                }
                this.$http.put("/api/admin/users/" + this.id, formData)
                    .then(res => {
                        console.log(res);
                        if(res.status === 200){
                            this.userSaving = false;
                            this.userSaved = true;
                        }
                    }).catch(error => console.log(error));
            }
        },
        created() {
            this.$http.get("/api/admin/users/" + this.id)
                .then(res => {
                    this.user = res.data;
                });
        }
    }
</script>