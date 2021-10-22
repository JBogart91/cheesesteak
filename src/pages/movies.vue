<template>
  <div>
    <h1>Movie Picker</h1>
    <p>{{movie}}</p>
  </div>
</template>

<script>
import movies from '../models/movies'

const randomMovie = (moviesArray) => {
  return moviesArray[Math.floor(Math.random() * moviesArray.length)]
}

export default {
  data: function () {
    return {
      movie: randomMovie(movies)
    } 
  }
}
</script>