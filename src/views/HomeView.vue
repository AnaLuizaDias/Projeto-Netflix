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
  <div class="carrossel">
    <div
      id="carouselExampleControlsNoTouching"
      class="carousel slide"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/images/bb.jpg"
            class="d-block w-100"
            alt="Foto 1"
            style="width: 100% "
          />
        </div>
        <div class="carodiv clusel-item">
          <img
            src="@/assets/images/pb.jpg"
            class="d-block w-100"
            alt="Foto 2"
            style="width: 100%"
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/images/bcs.jpg"
            class="d-block w-100"
            alt="Foto 3"
            style="width: 100%"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próxima</span>
      </button>
    </div>
  </div>
  <div class="container" id="filmes">
    <h2>NOVIDADES</h2>
    <!-- {{ dramas }} -->
  </div>
  <div class="container">
    <div class="row">
      <!-- <div class="col-md-3"> -->
      <div class="col mt-4" v-for="drama of dramas.slice(0, 8)" :key="drama.id">
        <!-- {{ drama.title }} -->
        <img :src="getImageUrl(drama.poster_path)" alt="" />
      </div>
      <!-- </div> -->
    </div>
  </div>

  <main>
    <!-- <div class="container" id="filmes">
      <h2>FILMES</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img src="@/assets/images/orgulho2.jpg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
        </div>
        <div class="col-md-3">
          <img src="@/assets/images/20.jpg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
        </div>
        <div class="col-md-3">
          <img src="@/assets/images/jv.jpg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
        </div>
        <div class="col-md-3">
          <img src="@/assets/images/fallen1.jpg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
        </div>
        <br /><br />

        <br />
        <div class="container" id="series">
          <h2>SÉRIES</h2>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <img src="@/assets/images/bb1.jpg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
            </div>
            <div class="col-md-3">
              <img src="@/assets/images/peaky.jpg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
            </div>
            <div class="col-md-3">
              <img src="@/assets/images/better.jpg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
            </div>
            <div class="col-md-3">
              <img src="@/assets/images/jd.jpg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
            </div>
            <br /><br />

            <div class="container" id="documentarios">
              <h2>DOCUMENTÁRIOS</h2>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <img src="@/assets/images/doc1.jpg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
                </div>
                <div class="col-md-3">
                  <img src="@/assets/images/doc2.jpeg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
                </div>
                <div class="col-md-3">
                  <img src="@/assets/images/doc3.jpg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
                </div>
                <div class="col-md-3">
                  <img src="@/assets/images/doc4.jpg" class="d-block w-100" alt="Foto 3" style="width: 100%" />
                </div>
              </div>
            </div> -->
    <!-- </div>
        </div> -->
    <!-- </div>
    </div> -->
  </main>
</template>
