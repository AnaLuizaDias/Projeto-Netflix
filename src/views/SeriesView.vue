<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      series: [],
    };
  },
  methods: {
    async buscarSeriesPorGenero(genero) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genero}&with_watch_monetization_types=flatrate`
      );
      this.series = res.data.results;
    },
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    },
    go(id) {
      this.$router.push(`/serie/${id}`)
    }
  },
  async created() {
    await this.buscarSeriesPorGenero(this.id);
  },
  watch: {
    async id() {
      await this.buscarSeriesPorGenero(this.id);
    },
  },
};
</script>

<template>
  <div class="container" id="series">
    <h2>SERIES - {{ id }}</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col mt-4" v-for="serie of series" :key="serie.id" @click="go(serie.id)">
        <img :src="getImageUrl(serie.poster_path)" />
      </div>
    </div>
  </div>
</template>
