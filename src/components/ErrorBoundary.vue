<template>
  <div v-if="!!error">Whoops! {{ error }}</div>

  <div v-else>
    <slot />
  </div>
</template>

<script>
export default {
  data: () => ({
    error: null,
  }),

  errorCaptured(error, vm, info) {
    this.error = error
  },
}
</script>
