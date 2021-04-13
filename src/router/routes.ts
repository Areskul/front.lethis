import { RouteRecordRaw } from "vue-router";
import { discover } from "./discover";
import { products } from "./products";
import { auth } from "./auth";
const baseTitle = "LETHIS";
const separator = " | ";

const others: Array<RouteRecordRaw> = [
  {
    //alias: ["/:pathMatch(.*)*"],
    path: "/",
    redirect: "/Clients",
    name: "Catch",
  },
  {
    path: "/Clients",
    name: "Clients",
    props: {
      bodyContent: true,
      header: true,
      navbar: true,
    },
    components: {
      header: () => import("@/components/navigation/header.vue"),
      navbar: () => import("@/components/navigation/navbar.vue"),
      bodyContent: () => import("@/views/Clients.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "Clients",
    },
  },
  {
    path: "/Budget",
    name: "Budget",
    props: {
      bodyContent: true,
      header: true,
      navbar: true,
    },
    components: {
      header: () => import("@/components/navigation/header.vue"),
      navbar: () => import("@/components/navigation/navbar.vue"),
      bodyContent: () => import("@/views/Clients.vue"),
      // footer: () => import("@/components/navigation/footer.vue"),
    },
    meta: {
      title: baseTitle + separator + "Budget",
    },
  },
  {
    path: "/Saving",
    name: "Capacité d'épargne",
    props: {
      bodyContent: true,
      header: true,
      navbar: true,
    },
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
    },
  },
];

export const routes: Array<RouteRecordRaw> = others
  .concat(discover)
  .concat(products)
  .concat(auth);
