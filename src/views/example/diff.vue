<template>
  <example :elapsed="time - start"></example>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, SetupContext } from 'vue';
import example from "@/views/example/example.vue";

export default defineComponent({
  name: "diff",
  components: {
    example
  },
  props: {
    start: Number
  },
  data () {
    return {
      time: new Date().getTime()
    };
  },
  methods: {
    getTime () {
      this.time = new Date().getTime();
      requestAnimationFrame(this.getTime);
    }
  },
  mounted () {
    requestAnimationFrame(this.getTime);
    // setInterval(this.getTime, 16);
  }
});
</script>

<style scoped>
</style>
