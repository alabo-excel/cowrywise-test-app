import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/search/:value",
      name: "Search",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/SearchResult.vue"),
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ]
})

export default router

