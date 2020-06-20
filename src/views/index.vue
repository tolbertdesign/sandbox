<template>
  <div>
    <!-- <VButton />

    <h1>Stories</h1>

    <div v-for="story in stories" :key="story">
      <RouterLink :to="`/${story}`">
        {{ story }}
      </RouterLink>
    </div>

    <div v-if="currentStory">
      <h2>Stories for {{ currentStory.name }}</h2>

      <component :is="currentStory.component" />
    </div> -->

    <div v-if="error">
      {{ error }}
    </div>

    <div v-else>
      <Suspense>
        <template v-slot>
          <Test />
        </template>
        <template v-slot:fallback>
          <VLoader />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import {split} from 'lodash-es'
import {computed, defineAsyncComponent} from 'vue'
import {useRoute} from 'vue-router'

import Test from '../components/Test.vue'
import TestJsx from '../components/TestJsx.vue'
import VButton from '../components/VButton.vue'
import VLoader from '../components/VLoader.vue'
import ButtonStories from '../components/Button.stories.vue'
import CardStories from '../components/Card.stories.vue'
// import path from './foo.png'

export default {
  name: 'App',
  setup() {
    const storyMap = {
      button: {
        name: 'button',
        component: ButtonStories,
      },
      card: {
        name: 'card',
        component: CardStories,
      },
    }

    const stories = Object.keys(storyMap)

    const route = useRoute()

    const currentStory = computed(() => {
      const story = storyMap[route.params.name]
      if (story) {
        return story
      }
    })

    return {
      storyMap,
      stories,
      route,
      currentStory,
    }
  },
  components: {
    VButton,
    VLoader,
    Test,
    TestJsx,
    TestAsync: defineAsyncComponent(() =>
      import('../components/TestAsync.vue'),
    ),
  },
  data: () => ({
    error: false,
    modalOpen: false,
  }),
}
</script>
