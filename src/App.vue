<template>
  <div>
    <div>
      <h2>Basic counter using Vuex</h2>
      <Counter></Counter>
    </div>
    <hr>
    <Users 
      v-for="user in userlisting"
      :key="user.id" 
      :name="user.name" 
      :username="user.username">
        <div><small>This is user is from fake API</small></div>
      </Users>
  </div>
</template>

<script>

import Http from "axios";
import Users from "./components/Users.vue";
import Counter from "./components/Counter.vue";

export default
{
  name: 'App',
  components: 
  {
    Users, Counter
  },
  data() { return { userlisting: []}},
  methods:
  {
      getUsers()
      {
        Http.get("https://jsonplaceholder.typicode.com/users")
            .then((response) =>this.userlisting = response.data)
      }
  },
  mounted()
  {
    this.getUsers();
  }
}
</script>
