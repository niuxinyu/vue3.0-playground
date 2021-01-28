<template>
  <div>
  <!-- <set-up></set-up> -->
   <!-- <LifeCycle/> -->
   <!-- <SetupScript/> -->
   <!-- <reactive/> -->
    <!-- <readonly/> -->
    <!-- <is-proxy></is-proxy> -->
    <!-- <is-reactive></is-reactive> -->
    <!-- <to-raw></to-raw> -->
  </div>
</template>

<script lang="ts" setup>
/**
 * 新的 script compositionApi 语法
 * 不再需要使用 export { default as Computed } from './views/compputed.vue';
 * 这种的语法了 只需要直接导入即可
 * https://github.com/vuejs/rfcs/pull/227
 * **/
// import SetUp from "./views/compositionApi/compositionApi.vue";
// import LifeCycle from './views/compositionApi/lifeCycle.vue';
// import SetupScript from './views/compositionApi/setup-script.vue';
// import reactive from "@/views/reactivityApi/reactive.vue";
// import readonly from "@/views/reactivityApi/readonly.vue";
// import isProxy from '@/views/reactivityApi/isProxy.vue';
// import isReactive from '@/views/reactivityApi/isReactive.vue';
// import toRaw from '@/views/reactivityApi/toRaw.vue';

// import diff from "@/views/example/diff.vue";
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: #fff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 1.7;
  margin: 0;
  padding: 30px;
}

a {
  color: #4183c4;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

code {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;
  font-size: 12px;
  margin: 0 2px;
  padding: 0px 5px;
}

h1, h2, h3, h4 {
  font-weight: bold;
  margin: 0 0 15px;
  padding: 0;
}

h1 {
  border-bottom: 1px solid #ddd;
  font-size: 2.5em;
  font-weight: bold;
  margin: 0 0 15px;
  padding: 0;
}

h2 {
  border-bottom: 1px solid #eee;
  font-size: 2em;
}

h3 {
  font-size: 1.5em;
}

h4 {
  font-size: 1.2em;
}

p, ul {
  margin: 15px 0;
}

ul {
  padding-left: 30px;
}
</style>
