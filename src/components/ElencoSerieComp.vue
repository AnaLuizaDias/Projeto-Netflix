<script>
import axios from "axios";
import { watch } from "@vue/runtime-core";
export default {
  props: ["id"],
  data() {
    return {
      elencoserie: {},
    };
  },
  async created() {
    await this.getElenco();
  },
  methods: {
    async getElenco() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${this.id}/credits?api_key=ed777039147c6c57657810892e0b2acd&language=pt-BR
`
      );
      this.elencoserie = data;
    },
  },
  watch: {
    async id() {
      await this.getElenco();
    },
  },
};
</script>

<template>
  <h1>Aqui mostrarei o elenco {{ id }}</h1>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Visualizar elenco
  </button>

  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Lista do elenco:
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p v-for="ator of elencoserie.cast" :key="ator.cast_id">
            {{ ator.name }} 
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Visualizar Trailer
  </button>
</template>
<style scoped>
button {
  width: 15%;
  margin: 10px;
}
h1{
  color: black;
}
</style>
