<template>
  <h1>isProxy</h1>
  检查对象是否为reactive或readonly的
</template>
<script lang='ts' setup=''>
import { isProxy, reactive, readonly, ref } from "vue";

const value1 = reactive({
    name: 'nxy'
});

const value2 = readonly({
    name: 'nxy2'
});

const value3 = ref(0);

console.log('value1是'+isProxy(value1));
console.log('value2是'+isProxy(value2));
console.log('value3是'+isProxy(value3));
</script>
<style lang='less' scoped>

</style>
