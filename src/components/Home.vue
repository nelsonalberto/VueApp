<template>
  <div>
      <div>
      <h2>Basic counter using Vuex</h2>
      <Counter></Counter>
    </div>
    <hr>
    <div>
      <h3>Countries</h3>
      <Countries></Countries>
    </div>
    <hr>
    <Users 
      v-for="user in users"
      :key="user.id" 
      :name="user.name" 
      :username="user.username">
        <div><small>This is user is from fake API</small></div>
      </Users>
  </div>
</template>

<script>
import Users from './Users.vue';
import Counter from "./Counter.vue";
import Countries from "./Countries.vue";
import { mapActions, mapState  } from 'vuex';

export default 
{
    name: 'Home',
    components: 
    {
        Users, Counter, Countries
    },
    data() { return { currentUser: null }},
    computed: 
    {
        ...mapState(['users']),
    },
    methods:
    {
        ...mapActions(['getUsers'])
    },
    mounted()
    {
        this.getUsers();
    }
}
</script>

<style>

</style>