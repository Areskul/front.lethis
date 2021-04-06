import { RouteRecordRaw } from "vue-router";
const baseTitle = "LETHIS";
const separator = " | ";
export const products: Array<RouteRecordRaw> = [
  {
    path: "/Products",
    name: "Produits",
    components: {
      header: () => import("@/components/navigation/header.vue"),
      navbar: () => import("@/components/navigation/navbar.vue"),
      bodyContent: () => import("@/views/Home.vue"),
    },
    children: [
      {
        name: "Comptes et livrets",
        path: "Accounts",
        components: {
          input: () => import("@/components/input/realestate.vue"),
        },
        meta: {
          title: baseTitle + separator + "Comptes et livrets",
        },
      },
      {
        name: "Prévoyance",
        path: "Foresight",
        components: {
          input: () => import("@/components/input/realestate.vue"),
        },
        meta: {
          title: baseTitle + separator + "Prévoyance",
        },
      },
      {
        name: "Épargne retraite",
        path: "PensionSaving",
        components: {
          input: () => import("@/components/input/realestate.vue"),
        },
        meta: {
          title: baseTitle + separator + "Épargne retraite",
        },
      },
      {
        name: "Assurance vie",
        path: "LifeInsurance",
        components: {
          input: () => import("@/components/input/realestate.vue"),
        },
        meta: {
          title: baseTitle + separator + "Assurance vie",
        },
      },
    ],
  },
];
