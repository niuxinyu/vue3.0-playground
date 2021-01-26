<template>
  <div :style="getStyle()">{{text}}</div>
</template>

<script lang="ts">
interface Props {
  size: number;
  x: number;
  y: number;
  text: number;
}
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: "dot",
  props: {
    size: {
      type: Number,
      default: 0
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    text: {
      type: Number,
      default: 0
    }
  },
  setup (props: Props) {
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
