<template>
标记一个对象使其永远不会被转换为响应式对象
</template>
<script lang='ts' setup=''>
import { markRaw } from "vue";

const user = {
    name: 'nxy',
    other: {
        age: 23
    }
};
const user2 = markRaw(user);

</script>
<style lang='less' scoped>

</style>
