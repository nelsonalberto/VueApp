<template>
<div>
  <UserList  v-for="user in users"
        :key="user.id" 
        :name="user.name" 
        :username="user.username">
         <div><small>This is user is from fake API</small></div>
  </UserList>
</div>
</template>

<script>

import UserList from './UserList.vue';
import { mapActions, mapState  } from 'vuex';

export default 
{
    name: "Users",
    components: { UserList },
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
