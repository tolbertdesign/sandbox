<template>
  <div>
    <div class="async">
      This should show up... and be brown
    </div>
    <div>Loaded in {{ time }}ms.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {time: performance.now().toFixed(2)}
  },
}
</script>

<style scoped>
.async {
  color: #8b4513;
}
</style>
