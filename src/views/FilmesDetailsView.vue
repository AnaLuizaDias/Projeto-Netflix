<script>
import axios from "axios";
import ElencoFilmeComp from "@/components/ElencoFilmeComp.vue";
export default {
  props: ["id"],
  data() {
    return {
      filmeinfo: {},
    };
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    },
    getVideoUrl(poster_path) {
      return `https://api.themoviedb.org/3/movie/15/videos?api_key=ed777039147c6c57657810892e0b2acd&language=en-US${poster_path}`;
    },
  },
  async created() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.id}?api_key=ed777039147c6c57657810892e0b2acd&language=pt-BR`
    );
    this.filmeinfo = data;
  },
};
</script>

<template>
  <main>
    {{ filmeinfo.video}}
    {{ filmeinfo }}
    <div class="container my-5 principal">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">{{ filmeinfo.title || filmeinfo.name }}</h1>
        <p class="lead">{{ filmeinfo.overview }}</p>
        <p class="lead">Tempo de duração: {{ filmeinfo.runtime }} minutos</p>
        <p class="lead"> Data de lançamento: {{filmeinfo.release_date}}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Elenco</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Trailer</button>
        </div>
        <video src="video"></video>
        <video :src="getVideoUrl(filmeinfo.poster_path)"></video>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img :src="getImageUrl(filmeinfo.poster_path) "
        class="col mt-4"
        alt="...">
      </div>
      <ElencoFilmeComp />
    </div>
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
