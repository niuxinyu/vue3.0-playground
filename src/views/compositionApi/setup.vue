<template>
  <h1>setup</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "setup",
  setup () {
    console.log('---------compositionApi------------');
  },
  beforeCreate () {
    console.log('---------beforeCreate------------');
  },
  created () {
    console.log('------------created------------');
  },
  beforeMount () {
    console.log('------------beforeMount------------');
  },
  mounted () {
    console.log('------------mounted------------');
  },
});
</script>
