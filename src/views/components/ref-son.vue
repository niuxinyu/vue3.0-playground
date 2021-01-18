<template>
  <h1 v-for="item in result" :key="item">xxx</h1>
</template>
<script lang='ts'>
import { defineComponent, watchEffect } from "vue";

export default defineComponent({
  name: "ref-son",
  props: {
      result: {
          type: Array,
          default: () => []
      }
  },
  setup (props: any) {
      console.log(props.result);

      watchEffect(() => {
          console.log(props.result.length);
      });
  }
});
</script>
<style lang='less' scoped>
</style>
