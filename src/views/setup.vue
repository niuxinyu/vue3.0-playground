<template>
  <h1>setup</h1>
  <h2>{{nxy.name}}</h2>
</template>
<script lang="ts">
import { defineComponent, ref, inject, watchEffect,watch } from "vue";

export default defineComponent({
  name: "setup",
  setup () {

    const nxy = inject<{ name: string; age: number }>('nxy');

    const count = ref(0);

    watchEffect(
      () => console.log(nxy?.age)
    );

    watch(
      () => nxy,
      (newVal) => {
        console.log(newVal);
      },
      {
        deep: true
      }
    );

    return {
      count,
      nxy
    };
  },
});
</script>
