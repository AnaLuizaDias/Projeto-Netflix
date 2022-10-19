<script>
import axios from "axios";

export default {
  data() {
    return {
      genres_tv: [],
      genres_movies: [],
      dramas: [],
      details: [],
    };
  },
  async created() {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br"
      );
      this.genres_tv = data.genres;
      const res = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br"
        // "https://api.themoviedb.org/3/discover/movie?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=18&with_watch_monetization_types=flatrate"
      );
      this.genres_movies = res.data.genres;
      const resultado = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=ed777039147c6c57657810892e0b2acd&language=pt-brhttps://api.themoviedb.org/3/collection/27?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br"
      );
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
    mostrarFilmePorGenero(genre) {
      console.log(genre.id);
      this.$router.push(`/filmes/${genre.id}`);
    },
    async getSeries(path) {
      return `https://api.themoviedb.org/3/tv/661791?api_key=ed777039147c6c57657810892e0b2acd&language=pt-br${path}`;
    },
    mostrarSeriePorGenero(genre) {
      console.log(genre.id);
      this.$router.push(`/series/${genre.id}`);
    },
  },
};
</script>

<template>
  <div class="black">
    <img
      id="logonet"
      src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
      alt=""
    />
    <br />
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li>
              <router-link class="dropdown-item oi" to="/">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Séries
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <ul
                    @click="mostrarSeriePorGenero(genre)"
                    v-for="genre of genres_tv"
                    :key="genre.id"
                  >
                    {{
                      genre.name
                    }}
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filmes
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <ul
                    @click="mostrarFilmePorGenero(genre)"
                    v-for="genre of genres_movies"
                    :key="genre.id"
                  >
                    {{
                      genre.name
                    }}
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Pesquisar"
              aria-label="Search"
            />
            <button class="btn btn-outline-danger" type="submit">
              Pesquisar
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.black {
  background-color: #000;
}
.oi {
  color: rgb(235, 235, 235);
}
</style>
