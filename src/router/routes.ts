import { RouteRecordRaw } from "vue-router";

const baseTitle = "LETHIS";
const separator = " | ";
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: ["/Home", "/:pathMatch(.*)*"],
    name: "Home",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      //bodyContent: () => import("@/views/Home.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
      meta: {
        title: baseTitle + separator + "Feed",
      },
    },
  },
  {
    path: "/NewClient",
    name: "NewClient",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      navbar: () => import("@/components/navigation/navbar.vue"),
      bodyContent: () => import("@/views/Home.vue"),
    },
    children: [
      {
        name: "Informations",
        path: "Informations",
        components: {
          input: () => import("@/components/input/informations.vue"),
        },
      },
      {
        name: "Incomes",
        path: "Incomes",
        components: {
          input: () => import("@/components/input/incomes.vue"),
        },
      },
    ],
    // footer: () => import("@/components/navigation/footer.vue"),
    meta: {
      title: baseTitle + separator + "Nouveau Client",
    },
  },
  {
    path: "/Clients",
    name: "Clients",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      navbar: () => import("@/components/navigation/navbar.vue"),
      bodyContent: () => import("@/views/Clients.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "register",
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
