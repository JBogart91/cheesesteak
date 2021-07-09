<template>
  <div>
    <nav-bar :items="links"></nav-bar>
    <main>
      <nuxt></nuxt>
    </main>
  </div>
</template>

<script>
import navBar from '../components/nav.vue'

export default {
  data () {
    return {
      links: [
        { href: '/', label: 'Home'},
        { href: '/movies', label: 'Movie Picker'}
      ]
    }
  },
  components: {
    navBar
  }
}
</script>

<style lang="scss" scoped>
  main {
    background-color: white;
    overflow-y: auto;
    padding: 16px;
  }
</style>
