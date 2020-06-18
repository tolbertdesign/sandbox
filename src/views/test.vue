<template>
  <div>
    <TestingComponent />
    <p class="dev">
      <code>__DEV__: {{ dev }}</code>
    </p>
    <p class="node_env">
      <code>process.env.NODE_ENV: {{ env }}</code>
    </p>
  </div>
</template>

<script>
import TestingComponent from '../components/TestingComponent.vue'

export default {
  name: 'Test',
  components: {
    TestingComponent,
  },
  data: () => ({
    dev: __DEV__,
    env: process.env.NODE_ENV,
  }),
  mounted() {
    let timestamp = new Date()
    console.log(timestamp)
  },
}
</script>
