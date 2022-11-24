<script>
export default {
  props: ["id", "results"],
  data()
  if (results > 0){
    return key
  }
    return {
      trailerfilme: {},
    };
  },
  async created() {
    await this.getElenco();
  },
  methods: {
    getVideoUrl(key) {
      return `https://www.youtube.com/embed/${key}`;
    },
  },
;
</script>

<template>
  <button
    type="button"
    class="btn btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Visualizar Trailer
  </button>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Trailer</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="modal-body2">
            <iframe width="465" height="315" :src="getVideoUrl()"> </iframe>
          </div>
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
</template>
<style scoped>
button {
  width: 15%;
  margin: 10px;
  margin-bottom: 20px;
}
</style>
