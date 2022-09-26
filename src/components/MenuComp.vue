<template>
  <div class="black">
    <img id="logonet" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="">
    <br />
    <nav class="navbar navbar-expand-lg navbar-dark teste">
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
              <router-link class="dropdown-item" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Em alta</a>
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
                Assistir
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <router-link class="dropdown-item" to="/series">Séries</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/filmes"
                    >Filmes</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/documentarios"
                    >Documentarios</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/premiados"
                    >Premiados</router-link
                  >
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
            <button class="btn btn-outline-danger" type="submit">Pesquisar</button>
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
</style>
