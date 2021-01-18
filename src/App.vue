<template>
  <h1>vue 3.0 ts</h1>
  <!-- <set-up></set-up> -->
  <!-- <ref></ref> -->
  <!-- <unref></unref> -->
  <!-- <to-ref></to-ref> -->
  <!-- <shallow-ref></shallow-ref> -->
</template>

<script lang="ts">
import {
  defineComponent,
  onErrorCaptured,
  provide,
  reactive,
  onMounted,
} from "vue";
// import SetUp from "./views/setup.vue";
// import Ref from './views/ref.vue';
// import Unref from './views/unref.vue';
// import ToRef from './views/toRef.vue';
// import ShallowRef from './views/shallowRef.vue';

export default defineComponent({
  name: "App",
  components: {
    // SetUp,
    // Ref,
    // Unref,
    // ToRef,
    // ShallowRef
  },
  setup () {
    const nxy = reactive<{ name: string; age: number }>({
      name: "",
      age: 0,
    });

    provide("nxy", nxy);

    onMounted(() => {
      setTimeout(() => {
        nxy.name = "牛鑫宇";
        nxy.age = 23;
      }, 2000);
    });

    onErrorCaptured((err, vm) => {
      console.log(err, vm);
    });
  },
});
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
