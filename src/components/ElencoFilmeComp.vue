<script>
import axios from "axios";
import { watch } from '@vue/runtime-core';
export default {
  props: ['id'],
  data() {
    return {
      elencofilme: {},
    };
  },
  async created() {
    await this.getElenco()
  },
  methods: {
    async getElenco() {
      const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=ed777039147c6c57657810892e0b2acd&language=pt-BR`
    );
    this.elencofilme = data;
    }
  },
  watch: {
    async id() {
      await this.getElenco()
    }
  }
};

</script>

<template>
  <h1>Aqui mostrarei o elenco {{id}}</h1>
  {{ elencofilme }}

  <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="Aqui mostrarei o elenco
accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Elenco
      </button>
      <p class="lead"></p>
      
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      </div>
    </div>
  </div>
  
  </div>
  <!-- <div class="botao">
    <p>
      <a 
        class="btn btn-primary" 
        data-bs-toggle="collapse" 
        href="#collapseExample" role="button" aria-expanded="false"
        aria-controls="collapseExample">
          Elenco
      </a>
      <a 
        class="btn btn-primary" 
        data-bs-toggle="collapse" 
        href="#collapseExample2" role="button" 
        aria-expanded="false"
        aria-controls="collapseExample2">
          Trailer
      </a>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
       <ElencoFilmeComp :id="id" />
      </div>
    </div>
    <div class="collapse" id="collapseExample2">
      <div class="card card-body">
        <TrailerComp />
      </div>
    </div>
  </div> -->

</template>
<style scoped>
button {
  margin: 10px;
}
</style>