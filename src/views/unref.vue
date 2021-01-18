<template>
  <h1>unref</h1>
</template>
<script lang='ts'>
import { defineComponent, ref, unref } from 'vue';

export default defineComponent({
  name: 'unref',
  setup () {
      const count = ref(0);
      const users = ref(['niu']);

      const sourceCount = unref(count);
      const sourceUsers = unref(users);

      console.log(sourceCount); // 0
      console.log(sourceUsers, users); // Proxy RefImpl
  }
});
</script>
<style lang='less' scoped>

</style>
