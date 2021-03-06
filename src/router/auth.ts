import { RouteRecordRaw } from "vue-router";
const baseTitle = "LETHIS";
const separator = " | ";
export const auth: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    props: true,
    components: {
      header: () => import("@/components/navigation/header.vue"),
      bodyContent: () => import("@/views/LogIn.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "login",
      type: "auth",
    },
  },
  {
    path: "/register",
    name: "register",
    props: true,
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
      type: "auth",
    },
  },
];
