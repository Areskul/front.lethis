import { RouteRecordRaw } from "vue-router";

const baseTitle = "POC";
const separator = " | ";
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: ["/Home", "/:pathMatch(.*)*"],
    name: "Home",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      bodyContent: () => import("@/views/Home.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "Feed",
    },
  },
  {
    path: "/register",
    name: "register",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      bodyContent: () => import("@/views/Register.vue"),
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
      bodyContent: () => import("@/views/LogIn.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "login",
    },
  },
  {
    path: "/reset/:resetToken",
    name: "reset",
    props: true,
    components: {
      header: () => import("@/components/navigation/header.vue"),
      bodyContent: () => import("@/views/ResetPasswd.vue"),
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
      // bodyContent: () => import("@/views/Tarifs.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "forgotten passwd",
    },
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      // bodyContent: () => import("@/views/AboutUs.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "Pourquoi nous?",
    },
  },
];
