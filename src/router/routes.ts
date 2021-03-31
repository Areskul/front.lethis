import { RouteRecordRaw } from "vue-router";
import { discover } from "./discover";
import { products } from "./products";
const baseTitle = "LETHIS";
const separator = " | ";

const others: Array<RouteRecordRaw> = [
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

export const routes: Array<RouteRecordRaw> = others
  .concat(discover)
  .concat(products);
