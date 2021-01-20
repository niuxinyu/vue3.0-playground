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
    <proxy></proxy>
  </div>
</template>

<script lang="ts" setup>
/**
 * 新的 script setup 语法 不再需要使用 export { default as Computed } from './views/compputed.vue';
 * 这种的语法了 只需要直接导入即可
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
import Proxy from './views/proxy.vue';
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
