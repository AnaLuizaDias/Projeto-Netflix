<script>
import axios from "axios";

export default {
  methods: {
    getVideoUrl(poster_path) {
      return `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=ed777039147c6c57657810892e0b2acd&language=pt-BR${poster_path}`;
    },
  },
};
</script>

<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Visualizar elenco
  </button>
  <div
    class="modal fade2"
    id="staticBackdrop2"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog2">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel2">Trailer:</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body2">
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/IxcsER0ezfA"
          >
          </iframe>
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
  <h1>Trailer</h1>
</template>
