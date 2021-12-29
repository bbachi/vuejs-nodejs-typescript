<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create User</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6 mrgnbtm">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="text" class="form-control" v-model="firstName" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                    </div>
                    <div class="form-group col-md-6 mrgnbtm">
                        <label htmlFor="exampleInputPassword1">Last Name</label>
                        <input type="text" class="form-control" v-model="lastName" name="lastname" id="lastname" placeholder="Last Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12 mrgnbtm">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="text" class="form-control" v-model="email" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                </div>
                <button type="button" @click='createUser()' class="btn btn-danger mrgnbtm">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CreateUser extends Vue {

    @Prop([]) users;

    data() {
        return {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    createUser() {
        console.log(this.firstName)
        const payload = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        }
        this.$emit('createUser', payload)
        this.clearForm();
    }
      
    clearForm() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
    }
}
</script>