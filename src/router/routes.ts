import { RouteConfig } from "vue-router";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      contentRefreshed: () => import("@/views/Home.vue"),
    },
  },
  {
    path: "/about",
    name: "About",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      contentRefreshed: () => import("@/views/About.vue"),
    },
  },
  {
    path: "/contact",
    name: "Contact",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      contentRefreshed: () => import("@/views/Home.vue"),
    },
  },
];

export default routes;
