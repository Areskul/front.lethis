import { RouteRecordRaw } from "vue-router";
const baseTitle = "LETHIS";
const separator = " | ";

export const discover: Array<RouteRecordRaw> = [
  {
    path: "/Discover/:uid(\\d+)?/",
    name: "Découverte",
    props: true,
    components: {
      header: () => import("@/components/navigation/header.vue"),
      navbar: () => import("@/components/navigation/navbar.vue"),
      bodyContent: () => import("@/views/Home.vue"),
    },
    children: [
      {
        path: "",
        redirect: "/Discover/Informations",
      },
      {
        name: "Identité",
        path: "Identity",
        components: {
          input: () => import("@/components/input/basic_informations.vue"),
        },
        meta: {
          title: baseTitle + separator + "Identité",
        },
      },
      {
        name: "Informations",
        path: "Informations",
        components: {
          input: () => import("@/components/input/informations.vue"),
        },
        meta: {
          title: baseTitle + separator + "Informations",
        },
      },
      {
        name: "Revenues",
        path: "Incomes",
        components: {
          input: () => import("@/components/input/incomes.vue"),
        },
        meta: {
          title: baseTitle + separator + "Revenues",
        },
      },
      {
        name: "Charges courrantes",
        path: "Charges",
        components: {
          input: () => import("@/components/input/charges.vue"),
        },
        meta: {
          title: baseTitle + separator + "Charges courrantes",
        },
      },
      {
        name: "Impôts",
        path: "Taxes",
        components: {
          input: () => import("@/components/input/taxes.vue"),
        },
        meta: {
          title: baseTitle + separator + "Impots",
        },
      },
      {
        name: "Patrimoine immobilier non-locatif",
        path: "Assets",
        components: {
          input: () => import("@/components/input/assets.vue"),
        },
        meta: {
          title: baseTitle + separator + "Imobilier non-locatif",
        },
      },
      {
        name: "Immobilier locatif",
        path: "RealEstate",
        components: {
          input: () => import("@/components/input/realestate.vue"),
        },
        meta: {
          title: baseTitle + separator + "Imobilier locatif",
        },
      },
    ],
    // footer: () => import("@/components/navigation/footer.vue"),
    meta: {
      title: baseTitle + separator + "Nouveau Client",
    },
  },
];
