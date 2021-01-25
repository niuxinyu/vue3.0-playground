<template>
  <div :style="getStyle()">
    <triangle :x="0" :y="0" :s="1000"></triangle>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs, watchEffect } from 'vue';
import triangle from "@/views/example/triangle.vue";

export default defineComponent({
  name: "example",
  components: {
    triangle
  },
  props: {
    elapsed: Number
  },
  setup (props: { elapsed: number }) {
    let transform;
    watchEffect(() => {
      const { elapsed } = toRefs(props);
      const t = (elapsed.value / 1000) % 10;
      const scale = 1 + (t > 5 ? 10 - t : t) / 10;
      console.log(scale);
      transform = 'scaleX(' + (scale / 2.1) + ') scaleY(0.7) translateZ(0.1px)';
    });
    const seconds = reactive({
      seconds: 0
    });

    const getStyle = () => {
      return {
        position: 'absolute',
        transformOrigin: '0 0',
        left: '50%',
        top: '50%',
        width: '10px',
        height: '10px',
        background: '#eee',
        transform
      };
    };

    const tick = () => {
      seconds.seconds = (seconds.seconds % 10) + 1;
    };

    onMounted(() => {
      setInterval(tick, 1000);
    });

    return {
      getStyle
    };
  }
});
</script>

<style scoped>
</style>
