<template>
  <h1>onBeforeRouteLeave</h1>
  <router-link :to="{ path: '/home', query: { t: new Date() } }">路由跳转</router-link>
</template>
<script lang='ts' setup=''>
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route);

</script>
<style lang='less' scoped>

</style>
