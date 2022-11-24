<script>
import axios from "axios";
import ElencoSerieComp from "@/components/ElencoSerieComp.vue";
import TrailerSerieComp from "@/components/TrailerSerieComp.vue";
export default {
  components: { ElencoSerieComp, TrailerSerieComp },
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
    <div class="container my-5 principal">
      <div
        class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
      >
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1">
            {{ serieinfo.title || serieinfo.name }}
          </h1>
          <p class="lead">{{ serieinfo.overview }}</p>
          <p class="lead">
            Número de temporadas:{{ serieinfo.number_of_seasons }}
          </p>
          <p class="lead">
            Número de episódios:{{ serieinfo.number_of_episodes }}
          </p>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            :src="getImageUrl(serieinfo.poster_path)"
            class="col mt-4"
            alt="..."
          />
        </div>
        <ElencoSerieComp :id="id" />
        <TrailerSerieComp :id="id" />
      </div>
    </div>
  </main>
</template>
<style scoped>
h1 {
  color: #fff;
  display: flex;
  width: 100%;
}
h6 {
  padding-left: 100px;
  padding-top: 20px;
}
p {
  color: rgb(149, 148, 148);
}
main {
  padding: 60px;
  background-color: black;
}
template {
  background-color: black;
}

.sinopse {
  display: flex;
  width: 40%;
  justify-content: center;
  padding-left: 50px;
}
.principal {
  padding-bottom: 5.3%;
}
img {
  margin: 8%;
}
</style>
