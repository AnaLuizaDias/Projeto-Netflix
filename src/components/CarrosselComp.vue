<template>
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
          style="width: 100%"
        />
      </div>
      <div class="carousel-item">
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
</template>