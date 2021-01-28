<template>
  <div>
    <h1>{{ user.name }}+{{ user.age }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';

export default defineComponent({
  name: "reactive",
  setup () {
    const user = reactive<{ name: string; age: number }>({
      name: 'nxy',
      age: 24
    });
    onMounted(() => {
      setTimeout(() => {
        user.age += 1;
      }, 2000);
    });
    return {
      user
    };
  }
});
</script>

<style scoped>
</style>
