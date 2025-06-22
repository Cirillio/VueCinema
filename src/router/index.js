import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/movies",
      name: "movies",
      component: () => import("../views/Movies.vue"),
      meta: {
        title: "Movies",
      },
    },
    {
      path: "/z",
      name: "z",
      component: () => import("../views/z.vue"),
      meta: {
        title: "z",
      },
    },
  ],
});

router.afterEach(async (to, from, failure) => {
  if (!failure) setTimeout(() => window.HSStaticMethods.autoInit());
});

export default router;
