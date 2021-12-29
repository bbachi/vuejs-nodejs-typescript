<template>
  <div class="hello">
   <Header />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-8">
                <CreateUser @createUser="userCreate($event)" />
            </div>
            <div class="col-md-4">
                <DisplayBoard :numberOfUsers="numberOfUsers" @getAllUsers="getAllUsers()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Users v-if="users && users.length > 0" :users="users" />
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import Header from './Header.vue'
import CreateUser from './CreateUser.vue'
import DisplayBoard from './DisplayBoard.vue'
import Users from './Users.vue'
import { UserService} from '../services/user.service'

@Component({
  components: {
    Header,
    CreateUser,
    DisplayBoard,
    Users
  }
})
export default class Dashboard extends Vue {

  data() {
      return {
          users: [],
          numberOfUsers: 0
      }
  }

  getAllUsers() {
    const userService = new UserService();
    userService.getAllUsers().then(response => {
        console.log(response)
        this.users = response
        this.numberOfUsers = response.length
    })
  }

    userCreate(data) {
      const userService = new UserService();
        console.log('data:::', data)
        userService.createUser(data).then(response => {
          console.log(response);
          this.getAllUsers();
        });
    }

    mounted () {
        this.getAllUsers();
    }
}
</script>