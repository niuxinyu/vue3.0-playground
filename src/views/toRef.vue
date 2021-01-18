<template>
  <h1>toRef</h1>
</template>
<script lang='ts'>
import {
  defineComponent,
  onMounted,
  reactive,
  toRef,
  toRefs,
  watchEffect,
} from "vue";

export default defineComponent({
  name: "toRef",
  setup () {
    const user = reactive({
      name: "牛鑫宇",
      age: 23,
    });

    const user2 = { age: toRef(user, 'age') }; // 通过 通过toRef 将响应式对象 user 的 age 键 对应的值转换为响应式的
    const user3 = { age: user.age }; // 直接赋值
    const user4 = { ...toRefs(user) };

    watchEffect(() => {
      console.log('toRef', user2.age.value); // 24
      console.log('原始对象', user3.age); // 23
      console.log('toRefs', user4.age.value); // 24
    });

    onMounted(() => {
      setTimeout(() => {
        user.age += 1;
      }, 2000);
    });
  },
});
</script>
<style lang='less' scoped>
</style>
