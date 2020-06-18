<template>
  <div>
    <Card
      v-for="color in colors"
      :key="color"
      :color="color"
      title="Title"
      body="This is the body"
    />
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {Card},
  data() {
    return {
      colors: ['brown', 'blue', 'green', 'red', 'pink'],
    }
  },
}
</script>
