<template>
    <div class="display-board">
        <h4>Users Created</h4>
        <div class="number">
        {{numberOfUsers}}
        </div>
        <div class="btn">
            <button @click='getAllUsers()' type="button" class="btn btn-warning">Get all Users</button>
        </div>
    </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class DisplayBoard extends Vue {

  @Prop(Number) numberOfUsers;

  getAllUsers() {
    this.$emit('getAllUsers')
  }
}
</script>