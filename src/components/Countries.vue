<template>
    <ul>
        <li v-for="country in getContries" v-bind:key="country">{{country}}</li>
    </ul>
</template>

<script>

import { mapGetters  } from 'vuex';

export default {
    name: 'Countries',
    computed: mapGetters(['getContries'])
}
</script>

<style>

</style>