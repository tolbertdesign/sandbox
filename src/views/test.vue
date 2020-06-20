<template>
  <div>
    <TestingComponent />
  </div>
</template>

<script>
import TestingComponent from '../components/TestingComponent.vue'

export default {
  name: 'Test',
  components: {
    TestingComponent,
  },
  mounted() {
    let timestamp = new Date()
    console.log(timestamp)
  },
}
</script>
