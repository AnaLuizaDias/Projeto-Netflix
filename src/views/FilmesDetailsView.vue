<script>
import axios from "axios";
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
    <div class="texto">
      {{ filmeinfo}}
      <h1 class="display-5 fw-bold lh-1 mb-3">
        {{ filmeinfo.title || filmeinfo.name }}
      </h1>
      <h5 class="d-flex justify-content-end"> Sinopse: {{ filmeinfo.overview }}</h5>
      <img :src="getImageUrl(filmeinfo.poster_path)" class="card-img-top" alt="..." />
      <video :src="get"></video>

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
