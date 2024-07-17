<template>
  <HeaderPage />
  <HomePage />
</template>

<script>
import HomePage from '../src/components/HomePage.vue'
import HeaderPage from '../src/components/HeaderPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    HeaderPage,
  }
}
</script>


<!-- 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
