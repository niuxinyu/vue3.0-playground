<template>
  <div>
    <h1>readonly {{ reactiveUser.name }} + {{ reactiveUser.age }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, readonly } from 'vue';

export default defineComponent({
  name: "readonly",
  setup () {
    const user = { name: 'nxy', age: 23 };
    const reactiveUser = readonly<{ name: string; age: string }>(user);
    onMounted(() => {
      setTimeout(() => {
        user.age += 1;
      }, 2000);
    });
    return {
      reactiveUser
    };
  }
});
</script>

<style scoped>
</style>
