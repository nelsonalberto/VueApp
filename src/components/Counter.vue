<template>
  <div>
      <p>Current count: {{counter}} </p>
      <div>
          <button type="button" @click="setIncrement">Increment</button>
          <button type="button" @click="setDecrement">Decrement</button>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default 
{
    name: 'Counter',
    computed: mapState({ counter: (state) => state.count}),
    methods:
    {
       ...mapActions(['setIncrement','setDecrement'])
    }
}

</script>

<style>

</style>