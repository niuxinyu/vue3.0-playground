<template>
  <h1>computed</h1>
</template>
<script lang='ts' setup=''>
import { computed, ref } from "vue";

// const count = ref(0);
// const countCom = computed(() => count.value + 1);
// console.log(countCom.value);
// countCom.value += 1;

const count = ref(0);
const countCom = computed({
    get: () => count.value + 1,
    set: (val: number) => {
        count.value = val;
    }
});

console.log(countCom.value); // 1 调用 get 0 + 1

countCom.value = 3;

console.log(countCom.value); // 4 调用 get 3 + 1

</script>
<style lang='less' scoped>

</style>
