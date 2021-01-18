<template>
  <h1>ref</h1>
  <ref-son :result="list"></ref-son>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from "vue";
import RefSon from './components/ref-son.vue';

export default defineComponent({
  name: "ref",
  components: {
    RefSon
  },
  setup () {
    const list = ref<Array<number>>([]);

    const getRes = () => {
      return new Promise<number>(resolve => {
        setTimeout(() => {
          resolve(3);
        }, 2000);
      });
    };

    onMounted(() => {
      getRes().then(res => {
        list.value.length = res;
      });
    });

    return {
      list
    };
  }
});
</script>
<style lang='less' scoped>
</style>
