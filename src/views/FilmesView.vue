<script>
import axios from 'axios'
export default {
  props: ['id'],
  data() {
    return {
      filmes: []
    }
  },
  methods: {
    async buscarFilmesPorGenero(genero) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genero}&with_watch_monetization_types=flatrate`
      );
      this.filmes = res.data.results;
    },
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`
    }
  },
  async created() {
    await this.buscarFilmesPorGenero(this.id)
  },
  watch: {
    async id() {
      await this.buscarFilmesPorGenero(this.id)
    }
  },
}
</script>
<template>
  <div class="container" id="filmes">
    <h2>FILMES - {{ id }}</h2>
  </div>
  <div class="container">
    <div class="row">
      <div class="col" v-for="filme of filmes" :key="filme.id">
        <img
          :src="getImageUrl(filme.poster_path)"
        />
      </div>
      <!-- <div class="col-md-3">
        <img
          src="@/assets/images/20.jpg"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div>
      <div class="col-md-3">
        <img
          src="@/assets/images/jv.jpg"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div>
      <div class="col-md-3">
        <img
          src="@/assets/images/fallen1.jpg"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div> -->
    </div>
  </div>
  <!-- <br><br> -->
  <!-- <div class="container">
    <div class="row">
      <div class="col-md-3">
        <img
          src="@/assets/images/divergente.jpg"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div>
      <div class="col-md-3">
        <img
          src="@/assets/images/hereditario.jpg"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div>
      <div class="col-md-3">
        <img
          src="@/assets/images/corra.jpg"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div>
      <div class="col-md-3">
        <img
          src="@/assets/images/predestinado.png"
          class="d-block w-100"
          alt="Foto 3"
          style="width: 100%"
        />
      </div>
      <br /><br />
      <br />
    </div> -->
  <!-- </div> -->
</template>
