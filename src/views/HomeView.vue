<script>
import axios from "axios";

export default {
  data() {
    return {
      genres: [],
      movies: [],
      dramas: [],
      details: [],
    };
  },
  async created() {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br"
      );
      this.genres = data.genres;
      const res = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=18&with_watch_monetization_types=flatrate"
      );
      // this.movies = data.movies;
      // const ress = await axios.get(
      //   "https://api.themoviedb.org/3/genre/tv/list?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br"
      // );
      this.dramas = res.data.results;
      const details = await axios.get(
        "https://api.themoviedb.org/3/movie/661791?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br"
      );
      this.details = details.data;
    } catch (e) {
      alert("algo errado");
    }
  },
  methods: {
    getImageUrl(path) {
      return `https://image.tmdb.org/t/p/w500/${path}`;
    },
    async getMovies(path) {
      return `https://api.themoviedb.org/3/movie/661791?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br${path}`;
    },
    async getSeries(path) {
      return `https://api.themoviedb.org/3/tv/661791?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br${path}`;
    },
  },
};
</script>

<template>
  <div class="container" id="filmes">
    <h2>NOVIDADES</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col mt-4" v-for="drama of dramas.slice(0, 8)" :key="drama.id">
        <img :src="getImageUrl(drama.poster_path)" alt="" />
      </div>
    </div>
  </div>
  <main>
  </main>
</template>
