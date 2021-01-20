<template>
  <h1>functionalcom</h1>
</template>
<script lang='ts'>
import { defineComponent, h } from 'vue';
// import functionalcom from './functionalcom';
import ref from './ref.vue';

export default defineComponent({
  setup () {
    return () => {
      return h('h1', {}, h(ref));
    };
  }
});
</script>
<style lang='less' scoped>

</style>
