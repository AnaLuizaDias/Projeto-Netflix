import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FilmesView from "@/views/FilmesView.vue";
import SeriesView from "@/views/SeriesView.vue";
import FilmesDetailsView from "@/views/FilmesDetailsView.vue";
import SeriesDetailsView from "@/views/SeriesDetailsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/filmes/:id",
      name: "filmes",
      component: FilmesView,
      props: true,
    },
    {
      path: "/series/:id",
      name: "series",
      component: SeriesView,
      props: true,
    },
    {
      path: "/serie/:id",
      name: "serieDetail",
      component: SeriesDetailsView,
      props: true,
    },
    {
      path: "/filme/:id",
      name: "filmeDetail",
      component: FilmesDetailsView,
      props: true,
    },
  ],
});

export default router;
