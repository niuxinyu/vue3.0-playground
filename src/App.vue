<template>
  <div>
    <!-- <h1>vue 3.0 ts</h1> -->
    <!-- <set-up></set-up> -->
    <!-- <ref></ref> -->
    <!-- <unref></unref> -->
    <!-- <to-ref></to-ref> -->
    <!-- <shallow-ref></shallow-ref> -->
    <!-- <trigger-ref></trigger-ref> -->
    <!-- <Computed></Computed> -->
    <!-- <watch></watch> -->
    <!-- <on-before-route-leave></on-before-route-leave> -->
    <!-- <router-view></router-view> -->
    <!-- <use-store></use-store> -->
    <!-- <functional-com></functional-com> -->
    <!-- <proxy></proxy> -->
    <!-- <SetupScript></SetupScript> -->
    <diff :start="new Date().getTime()"></diff>
  </div>
</template>

<script lang="ts" setup>
/**
 * 新的 script setup 语法
 * 不再需要使用 export { default as Computed } from './views/compputed.vue';
 * 这种的语法了 只需要直接导入即可
 * https://github.com/vuejs/rfcs/pull/227
 * **/
// import SetUp from "./views/setup.vue";
// import Ref from './views/ref.vue';
// import Unref from './views/unref.vue';
// import ToRef from './views/toRef.vue';
// import ShallowRef from './views/shallowRef.vue';
// import TriggerRef from "./views/triggerRef.vue";
// import Computed from "./views/computed.vue";
// import Watch from './views/watch.vue';
// import OnBeforeRouteLeave from './views/onBeforeRouteLeave.vue';
// import UseStore from './views/useStore.vue';
// import FunctionalCom from './views/functionalcom.vue';
// import Proxy from './views/proxy.vue';
// import SetupScript from './views/setup-script.vue';
import diff from "@/views/example/diff.vue";
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
