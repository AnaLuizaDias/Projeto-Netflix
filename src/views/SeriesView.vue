<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      series: []
    };
  },
  methods: {
    async buscarSeriesPorGenero(genero) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br`
      );
      this.series = res.data.results;
    },
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    },
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
      <div class="col" v-for="serie of series" :key="serie.id">
        <img :src="getImageUrl(serie.poster_path)" />
      </div>
    </div>
  </div>
</template>
