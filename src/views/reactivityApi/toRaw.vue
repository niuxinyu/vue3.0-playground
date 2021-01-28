<template>
一个转意接口，用于将reactive、readonly创建的proxy对象转换为原始对象
</template>
<script lang='ts' setup=''>
import { reactive, toRaw } from "vue";

const sourceUser = {
    name: 'nxy'
};

const user = reactive(sourceUser);

const transferUser = toRaw(user);

console.log(sourceUser === transferUser);
</script>
<style lang='less' scoped>

</style>
