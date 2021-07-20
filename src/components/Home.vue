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
  </div>
</template>

<script>
import Counter from "./Counter.vue";
import Countries from "./Countries.vue";

export default 
{
    name: 'Home',
    components: 
    {
        Counter, Countries
    }
}
</script>

<style>

</style>