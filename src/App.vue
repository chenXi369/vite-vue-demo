<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="name">前端</div>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import { getData } from './services/index'

import { onMounted } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    onMounted(async () => {
      const data = await getData()
      console.log(data)
    })
  }
}
</script>

<style lang="scss">
  .name {
    color: red;
  }
</style>