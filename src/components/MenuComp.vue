<template>
  <div class="black">
    <div class="nome text-center navbar-dark">
      <h1>ANAFLIX</h1>
    </div>
    <br />
    <nav class="navbar navbar-expand-lg navbar-dark teste">
      <div class="container-fluid">
        <a class="navbar-brand" id="cor1" href="#">ANAFLIX</a>
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
              <router-link class="dropdown-item" to="/home"
                >Home</router-link
              >
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
                  <router-link class="dropdown-item" to="/series"
                    >Séries</router-link
                  >
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
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-danger" type="submit">Search</button>
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
