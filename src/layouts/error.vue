<template>
  <div>
    <h1 v-if="error.statusCode === 404">404: Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error']
  }
</script>
