import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FilmesView from "@/views/FilmesView.vue";
import SeriesView from "@/views/SeriesView.vue";
import DocumentariosView from "@/views/DocumentariosView.vue";
import PremiadosView from "@/views/PremiadosView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/filmes",
      name: "filmes",
      component: FilmesView,
    },
    {
      path: "/series",
      name: "series",
      component: SeriesView,
    },
    {
      path: "/documentarios",
      name: "documentarios",
      component: DocumentariosView,
    },
    {
      path: "/premiados",
      name: "premiados",
      component: PremiadosView,
    },
  ],
});

export default router;
