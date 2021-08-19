import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ofensas from "../views/ofensas/List.vue";
import Assets from "../views/ofensas/Assets.vue";
import OfensasOverview from "../views/ofensas/Overview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ofensas",
    name: "Ofensas",
    component: Ofensas
  },
  {
    path: "/ofensas-overview",
    name: "Ofensas-overview",
    component: OfensasOverview
  },
  {
    path: "/assets",
    name: "assets",
    component: Assets
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
