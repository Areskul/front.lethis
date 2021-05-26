import { RouteRecordRaw } from "vue-router";
import { discover } from "./discover";
import { products } from "./products";
import { auth } from "./auth";
const baseTitle = "LETHIS";
const separator = " | ";

const others: Array<RouteRecordRaw> = [
  {
    //alias: ["/:pathMatch(.*)*"],
    alias: ["/home", "/Home"],
    path: "/",
    redirect: "/Clients",
    name: "Catch",
  },
  {
    props: true,
    path: "/Clients",
    name: "Clients",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      navbar: () => import("@/components/navigation/navbar.vue"),
      bodyContent: () => import("@/views/Clients.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "Clients",
      enabled: true,
    },
  },
  {
    props: true,
    path: "/Budget",
    name: "Budget",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      navbar: () => import("@/components/navigation/navbar.vue"),
      bodyContent: () => import("@/views/Clients.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "Budget",
      enabled: false,
    },
  },
  {
    props: true,
    path: "/Saving",
    name: "Capacité d'épargne",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      navbar: () => import("@/components/navigation/navbar.vue"),
      bodyContent: () => import("@/views/Clients.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "register",
      enabled: false,
    },
  },
  {
    path: "/Allocation",
    name: "Répartition des actifs",
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
    path: "/Goals",
    name: "Risques / Objectifs",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      navbar: () => import("@/components/navigation/navbar.vue"),
      bodyContent: () => import("@/views/Clients.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "Goals",
      enabled: false,
    },
  },
  {
    path: "/Potential",
    name: "Risques / Objectifs",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      navbar: () => import("@/components/navigation/navbar.vue"),
      bodyContent: () => import("@/views/Clients.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "Potential",
      enabled: false,
    },
  },
];

export const routes: Array<RouteRecordRaw> = others
  .concat(discover)
  .concat(products)
  .concat(auth);
