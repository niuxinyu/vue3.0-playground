<template>
  <h1>useStore</h1>
  <h2>{{ getMsg }}</h2>
  <h2>{{ getMsgs }}</h2>
</template>
<script lang='ts' setup=''>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

store.commit("sayHi", "hello world");

// 访问getter
const getMsg = computed(() => store.getters.getMsg);

// 直接访问 state 类似 getter
const getMsgs = computed(() => store.state.msg);
</script>
<style lang='less' scoped>
</style>
