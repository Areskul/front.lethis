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
      //{
      //path: "",
      //redirect: "/Discover/Informations",
      //},
      {
        name: "Identité",
        path: "Identity",
        props: true,
        components: {
          input: () => import("@/components/input/basic_informations.vue"),
          titles: () => import("@/components/navigation/breadcrumbs.vue"),
        },
        meta: {
          title: baseTitle + separator + "Identité",
          enabled: true,
        },
      },
      {
        name: "Informations",
        path: "Informations",
        props: true,
        components: {
          input: () => import("@/components/input/informations.vue"),
          titles: () => import("@/components/navigation/breadcrumbs.vue"),
        },
        meta: {
          title: baseTitle + separator + "Informations",
          enabled: true,
        },
      },
      {
        name: "Revenus",
        path: "Incomes",
        components: {
          input: () => import("@/components/input/incomes.vue"),
          titles: () => import("@/components/navigation/breadcrumbs.vue"),
        },
        meta: {
          title: baseTitle + separator + "Revenues",
          enabled: true,
        },
      },
      {
        name: "Charges courrantes",
        path: "Charges",
        components: {
          input: () => import("@/components/input/charges.vue"),
          titles: () => import("@/components/navigation/breadcrumbs.vue"),
        },
        meta: {
          title: baseTitle + separator + "Charges courrantes",
          enabled: true,
        },
      },
      {
        name: "Impôts",
        path: "Taxes",
        components: {
          input: () => import("@/components/input/taxes.vue"),
          titles: () => import("@/components/navigation/breadcrumbs.vue"),
        },
        meta: {
          title: baseTitle + separator + "Impots",
          enabled: true,
        },
      },
      {
        name: "Patrimoine immobilier non-locatif",
        path: "Assets",
        components: {
          //input: () => import("@/components/input/assets.vue"),
          input: () => import("@/components/input/realestate.vue"),
        },
        meta: {
          title: baseTitle + separator + "Imobilier non-locatif",
          enabled: true,
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
          enabled: true,
        },
      },
    ],
    // footer: () => import("@/components/navigation/footer.vue"),
    meta: {
      title: baseTitle + separator + "Nouveau Client",
      enabled: true,
    },
  },
];
