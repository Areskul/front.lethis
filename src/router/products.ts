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
        name: " et livrets",
        path: "counts",
        components: {
          input: () => import("@/components/input/realestate.vue"),
        },
        meta: {
          title: baseTitle + separator + "Comptes et livrets",
        },
      },
    ],
  },
];
