import { RouteRecordRaw } from "vue-router";
import { discover } from "./discover";
const baseTitle = "LETHIS";
const separator = " | ";
export const routes: Array<RouteRecordRaw> = [
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
];
