<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: "lifeCycle",
  setup () {
    onMounted(() => {
      console.log('-----onMounted-----'); // 先执行
    });
  },
  mounted () {
    console.log('-----mounted-----'); // 后执行
  },
});
</script>

<style scoped>
</style>
