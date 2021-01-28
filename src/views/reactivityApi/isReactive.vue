<template>
检查对象是否为reactive创建的响应式对象
</template>
<script lang='ts' setup=''>
import { isReactive, reactive, readonly } from "vue";

const user = reactive({
    name: 'nxy'
});

const user2 = readonly({
    name: 'nxy2'
});

console.log('reactive user '+isReactive(user));
console.log('readonly user1 '+isReactive(user2));
</script>
<style lang='less' scoped>

</style>
