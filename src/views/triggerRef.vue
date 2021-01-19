<template>
  <h1>triggerRef</h1>
  <button @click="handleTriggerRef">触发shallowRef更新</button>
</template>
<script lang='ts' setup=''>
import { onMounted, shallowRef, triggerRef, watchEffect } from "vue";

const shallowRefMsg = shallowRef({
    msg: '这是原始字符串'
});

const handleTriggerRef = () => {
    // 触发更新
    triggerRef(shallowRefMsg);
};

onMounted(() => {
    setTimeout(() => {
        // 这里的更改不会触发watchEffect 因为 ref 很浅层
        shallowRefMsg.value.msg = '手动更改了的msg值';
    }, 2000);
});

watchEffect(() => {
    console.log(shallowRefMsg.value.msg);
});

</script>
<style lang='less' scoped>

</style>
