<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      details: {},
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
    // this.filmes = res.data.results;
    this.details = data;
  },
};
</script>

<template>
  <main>
    <div class="b-example-divider"></div>
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <div
            class="col mt-4"
            v-for="detail of details"
            :key="detail.id"
          ></div>
        </div>
      </div>
      <div class="texto">
        <h1 class="display-5 fw-bold lh-1 mb-3">
          Responsive left-aligned hero with image
        </h1>
        <p class="lead">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        {{ details }}

        <div class="img col-lg-4">
          <img
            src="https://s2.glbimg.com/0g5TjC-0T1ZEkGG6Vh697NKwTnA=/0x0:1200x700/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/o/D/ieDFWBTXyor9nFgYZdyA/enola-holmes-2.jpg"
            alt=""
          />
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
.img {
  display: flex;
  width: 30%;
}
.texto {
  display: flex;
}
</style>
