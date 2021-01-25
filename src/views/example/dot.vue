<template>
  <div :style="getStyle()">0</div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: "dot",
  props: {
    size: Number,
    x: Number,
    y: Number
  },
  setup (props: { size: number }) {
    const { size, x, y } = toRefs(props);
    const dotStyle = {
      position: 'absolute',
      background: '#61dafb',
      font: 'normal 15px sans-serif',
      textAlign: 'center',
      cursor: 'pointer',
    };
    const s = size.value * 1.3;
    const getStyle = () => {
      return {
        ...dotStyle,
        width: s + 'px',
        height: s + 'px',
        left: x.value + 'px',
        top: y.value + 'px',
        'border-radius': (s / 2) + 'px',
        'line-height': (s) + 'px'
      };
    };

    return {
      getStyle
    };
  }
});
</script>

<style scoped>
</style>
