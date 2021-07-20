<template>
  <div>
      <h2>Post number: {{id}} </h2>
      <br>
      <button @click="goBack">GoBack</button>
  </div>
</template>

<script>
export default {
    name: 'Posts',
    data() {        
        const {id} = this.$route.params;
        return {
            id
        }   
    },
    methods:
    {
        goBack()
        {
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>