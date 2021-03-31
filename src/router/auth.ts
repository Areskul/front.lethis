import { RouteRecordRaw } from "vue-router";
const baseTitle = "LETHIS";
const separator = " | ";
export const auth: Array<RouteRecordRaw> = [
  {
    alias: ["/", "/Home", "/:pathMatch(.*)*"],
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
];
