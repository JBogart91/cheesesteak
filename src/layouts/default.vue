<template>
  <div>
    <nav-bar :items="links"></nav-bar>
    <main>
      <div class="container">
        <nuxt></nuxt>
      </div>
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
    display: flex;
    justify-content: center;
  }

  .container {
    width: 72%;
  }
</style>
