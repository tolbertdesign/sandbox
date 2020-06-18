<template>
  <div class="default-layout">
    <AppNav />
    <Header />
    <PageHeader />
    <slot />
  </div>
</template>

<script>
import json from '/data.json'
import AppNav from '../components/AppNav.vue'
import Header from '../components/Header.vue'
import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'DefaultLayout',
  components: {AppNav, Header, PageHeader},
  data: () => ({
    json,
  }),
}
</script>

<style lang="scss">
@import '../styles/normalize';
@import '../styles/base';
@import url('https://fonts.googleapis.com/css?family=Rubik:400,700');

#app {
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

.default-layout {
  @apply relative;
  @apply flex;
  @apply flex-col;
  @apply min-h-screen;
}
</style>
