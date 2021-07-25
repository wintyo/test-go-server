<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { BookApi } from './api/'

const api = new BookApi({
  basePath: 'http://localhost:8080'
})

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    api.apiV1BooksGet()
      .then((res) => {
        console.log(res.data)
      })
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
