import { RouteRecordRaw } from "vue-router";

const baseTitle = "lightfront";
const separator = " | ";
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: ["/Home", "/:pathMatch(.*)*"],
    name: "Home",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      contentRefreshed: () => import("@/views/Home.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "Services",
    },
  },
  {
    path: "/register",
    name: "register",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      contentRefreshed: () => import("@/views/Register.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "register",
    },
  },
  {
    path: "/login",
    name: "login",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      contentRefreshed: () => import("@/views/LogIn.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "login",
    },
  },
  {
    path: "/Tarifs",
    name: "Tarifs",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      // contentRefreshed: () => import("@/views/Tarifs.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "Tarifs",
    },
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      // contentRefreshed: () => import("@/views/AboutUs.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "Pourquoi nous?",
    },
  },
];
