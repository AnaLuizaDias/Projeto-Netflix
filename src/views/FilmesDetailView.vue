<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      details: [],
    };
  },
  methods: {
    
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    },    
  },
}

</script>

<template>
  <main>
    <div class="b-example-divider"></div>
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <div
            class="col mt-4"
            v-for="filme of filmes"
            :key="filme.id"
            @click="go(filme.id)"
          >
            <img :src="getImageUrl(filme.poster_path)" />
          </div>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            Responsive left-aligned hero with image
          </h1>
          <p class="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
        </div>
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
</style>
