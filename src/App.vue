<template>
  <div class="primaryCSS">
    <HeaderPage />
    <HomePage />
  </div>
  
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

