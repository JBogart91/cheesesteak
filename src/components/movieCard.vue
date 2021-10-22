<template>
  <div>
    <div><b>{{ movie.name }}</b> ({{ movie.year }})</div>
    <div>Directed by: {{ directors  }}</div>
    <div v-for="genre in genres" :key="genre">{{ genre }}</div>
    <div>{{ movie.runtime }} mins</div>
  </div>
</template>

<script>
export default {
  name: 'movie-card',
  props: {
    movie: Object
  },
  computed: {
    directors: function () {
      let string
      this.movie.director.forEach((director, index) => {
        console.log(index)
        if (index === this.movie.director.length - 1) {
          string = `${director}`
        } else {
          string = `${director}, `
        }
      })
      return string
    },
    genres: function () {
      let genres = []
      this.movie.genre.forEach(element => {
        genres.push(element.charAt(0).toUpperCase() + element.slice(1))
      })
      return genres
    }
  }
}
</script>