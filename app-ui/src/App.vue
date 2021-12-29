<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Dashboard from './components/Dashboard.vue'

@Component({
  components: {
    Dashboard
  }
})
export default class App extends Vue {
  
}
</script>

<style>
  @import './assets/styles/global.css';
</style>