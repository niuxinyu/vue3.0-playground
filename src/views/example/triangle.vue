<template>
  <template v-if="otherS <= 25">
    <dot
        :x="x - (25 / 2)"
        :y="y - (25 / 2)"
        :size="25"
    ></dot>
  </template>
  <template v-else>
    <triangle
        :x="x"
        :y="y - (otherS / 2)"
        :s="otherS"
    >
    </triangle>
    <triangle
        :x="x - otherS"
        :y="y + (otherS / 2)"
        :s="otherS"
    >
    </triangle>
    <triangle
        :x="x + otherS"
        :y="y + (otherS / 2)"
        :s="otherS"
    >
    </triangle>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import dot from './dot.vue';

export default defineComponent({
  name: "triangle",
  components: {
    dot
  },
  props: {
    s: Number,
    x: Number,
    y: Number,
    size: Number
  },
  setup (props: any) {
    const otherS = ref(props.s);
    if (otherS.value > 25) {
      otherS.value /= 2;
    }
    return {
      otherS
    };
  }
});
</script>
