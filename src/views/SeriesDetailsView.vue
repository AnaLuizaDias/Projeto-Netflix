<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      serieinfo: {},
    };
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    },
  },
  async created() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${this.id}?api_key=ed777039147c6c57657810892e0b2acd&language=pt-BR`
    );
    this.serieinfo = data;
  },
};
</script>

<template>
  <main>
    <div class="texto">
      <!-- {{ serieinfo }} -->
      <h1 class="display-5 fw-bold lh-1 mb-3">
        {{ serieinfo.title || serieinfo.name }}
      </h1>
      <h5 class="d-flex justify-content-end"> Sinopse: {{ serieinfo.overview }}</h5>
      <h3>Número de temporadas:{{ serieinfo.number_of_seasons }}</h3>

      <img :src="getImageUrl(serieinfo.poster_path)" class="card-img-top" alt="..." />
    </div>
  </main>
</template>
<style scoped>
h1 {
  color: #fff;
}
p {
  color: rgb(149, 148, 148);
}
main {
  padding: 30px;
  background-color: black;
}
template {
  background-color: black;
}
.img {
  display: flex;
  width: 30%;
}
.texto {
  display: flex;
}
</style>
