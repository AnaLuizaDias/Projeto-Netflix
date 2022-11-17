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
    <!-- {{ serieinfo }} -->
    <h1 class="display-2 fw-bold lh-1 mb-2">
      {{ serieinfo.title || serieinfo.name }}
    </h1>
    <h6>
      Número de temporadas:{{ serieinfo.number_of_seasons }} <br />
      Número de episódios:{{ serieinfo.number_of_episodes }}
    </h6>
    <div class="sinopse">
      <h5 class="d-flex justify-content-end">
        Sinopse: {{ serieinfo.overview }}
      </h5>
    </div>
    <div class="imagem">
      <img
        :src="getImageUrl(serieinfo.poster_path)"
        class="card-img-top"
        alt="..."
      />
    </div>
  </main>
</template>
<style scoped>
h1 {
  color: #fff;
  display: flex;
  width: 100%;
  padding-left: 100px;
  padding-top: 100px;
}
h6 {
  padding-left: 100px;
  padding-top: 20px;
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
.imagem {
  display: flex;
  width: 20%;
}
.texto {
  display: flex;
  padding: 90px;
}
h5 {
  padding: 50px;
}
.sinopse {
  display: flex;
  width: 40%;
  justify-content: center;
  padding-left: 50px;
}
</style>
