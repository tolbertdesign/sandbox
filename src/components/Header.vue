<template>
  <header class="text-gray-700 app-header body-font">
    <div
      class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row"
    >
      <a
        class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
      >
        <!-- <DesignLogo class="w-16 h-16 text-gray-900" /> -->
        <span class="ml-3 text-xl">Design System</span>
      </a>
      <!-- <nav class="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
        <a class="mr-5 hover:text-gray-900">About</a>
        <a class="mr-5 hover:text-gray-900">Pricing</a>
        <a class="mr-5 hover:text-gray-900">Contact</a>
        <a class="mr-5 hover:text-gray-900">Login</a>
      </nav> -->
    </div>

    <Teleport to="#footer">
      <div class="py-5 text-center">
        <h2>Vue {{ version }} Playground</h2>

        <p class="lead">
          Below is an example form built with the Vue {{ version }} Composition
          API.
        </p>
      </div>

      <p class="mb-1">&copy; {{ state.year }}</p>
    </Teleport>
  </header>
</template>

<script>
import DesignLogo from './DesignLogo.vue'

import {useVersion} from '../version'
import {useStore} from 'vuex'

export default {
  name: 'Header',
  components: {
    DesignLogo,
  },
  setup() {
    const {state} = useStore()

    return {
      version: useVersion(),
      state,
    }
  },
}
</script>

<style>
.app-header {
  @apply text-white;
  background-image: linear-gradient(
    180deg,
    theme('colors.gray.300'),
    theme('colors.gray.400')
  );
}
</style>
