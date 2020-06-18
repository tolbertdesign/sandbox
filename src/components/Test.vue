<template>
  <div>
    <h3>Welcome to our Vue suspense demo in action</h3>

    <div>
      <h3>I am {{ userInfo.name }}</h3>

      <span>
        <u>Find me on</u>
      </span>

      <p>Github: {{ userInfo.github }}</p>

      <p>Twitter: {{ userInfo.twitter }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  async setup() {
    const userInfo = await fetchUser()
    return {userInfo}
  },
}
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
async function fetchUser() {
  await timeout(4000)
  return {
    name: 'Victor Tolbert',
    github: 'https://github.com/VictorTolbert',
    twitter: 'https://twitter.com/VictorTolbert',
  }
}
</script>

<style scoped>
h3 {
  margin-top: 70px;
}
</style>
