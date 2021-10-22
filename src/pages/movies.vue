<template>
  <div>
    <h1>Movie Picker</h1>
    <movie-card :movie="movie" />
  </div>
</template>

<script>
import movies from '../models/movies'
import MovieCard from '../components/movieCard.vue'

const randomMovie = (moviesArray) => {
  return moviesArray[Math.floor(Math.random() * moviesArray.length)]
}

export default {
  data: function () {
    return {
      movie: randomMovie(movies)
    } 
  },
  components: {
    MovieCard
  }
}
</script>