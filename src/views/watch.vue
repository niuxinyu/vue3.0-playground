<template>
  <h1>watch</h1>
</template>
<script lang='ts' setup=''>
import { onMounted, reactive, watch, ref } from "vue";

const countObj = reactive({ count: 0 });

const count = ref(0);

onMounted(() => {
    setTimeout(() => {
        countObj.count = 1;
        count.value = 3;
    }, 2000);
});

// watch(
//     () => countObj.count, // 侦听一个getter函数
//     (newVal) => {
//         console.log(newVal);
//     }
// );

// watch(
//     count, // 侦听一个 ref
//     (newVal) => console.log(newVal)
// );

watch(
    [countObj, count],
    ([newCountObj, newCount]) => console.log(newCountObj, newCount)
);


</script>
<style lang='less' scoped>

</style>
