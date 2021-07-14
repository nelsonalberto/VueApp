<template>
  <div>
      <p>Current count: {{counter}} </p>
      <div>
          <button type="button" @click="incrementCounter">Increment</button>
          <button type="button" @click="decrementCounter">Decrement</button>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default 
{
    name: 'Counter',
    computed: mapState({ counter: (state) => state.count}),
    methods:
    {
        incrementCounter()
        {
            this.$store.commit("increment");
        },
        decrementCounter()
        {
            this.$store.commit("decrement");
        }
    }
}

</script>

<style>

</style>