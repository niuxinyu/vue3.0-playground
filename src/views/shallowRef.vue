<template>
  <h1>shallowRef</h1>
</template>
<script lang='ts' setup>
import {
  isReactive,
  isRef,
  onMounted,
  ref,
  shallowRef,
} from "vue";

const shallowRefUser = shallowRef({ name: "李四" });
const refUser = ref({ name: "张三" });

console.log(
  "shallowRef",
  "是否响应式 " + isReactive(shallowRefUser.value), // false
  "是否ref " + isRef(shallowRefUser) // true
);
console.log(
  "ref",
  "是否响应式 " + isReactive(refUser.value), // true
  "是否ref " + isRef(refUser) // true
);

onMounted(() => {
  setTimeout(() => {
    shallowRefUser.value.name = "你好";
    refUser.value.name = "你好";
  }, 2000);

  console.log(shallowRefUser.value); // { name: '李四' }
  console.log(refUser.value); // Proxy
});

</script>
<style lang='less' scoped>
</style>
