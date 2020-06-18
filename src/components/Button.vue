<template>
  <button class="button" :style="style">
    <slot />
  </button>
</template>

<script>
import {defineComponent} from 'vue'
export default {
  props: ['background', 'color'],
  computed: {
    style() {
      return {
        background: this.background,
        color: this.color,
      }
    },
  },
}
</script>
