<template>
  <div v-if="isPending">
    Loading...
  </div>

  <div v-else-if="isEmpty" class="empty-results">
    There are no threads!
  </div>
  <div v-else>
    {{ threads }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      threads: [],
      isPending: true,
    }
  },
  computed: {
    isEmpty() {
      return !this.isPending && this.threads.length < 1
    },
  },
  async created() {
    this.threads = await fetch(
      'https://mgghdfgh.free.beeceptor.com',
    ).then(res => res.json())
    this.isPending = false
  },
}
</script>

<style scoped>
.empty-results {
  margin: 1rem;
  font-size: 0.875rem;
  text-align: center;
}

@media (min-width: 1024px) {
  margin: 0.875rem;
}
</style>
