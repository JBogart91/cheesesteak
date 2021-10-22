<template>
  <div>
    <h1>Movie Picker</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.name">
        {{ movie.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import movies from '../models/movies'

export default {
  data: function () {
    return {
      movies
    } 
  }
}
</script>