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
      bodyContent: () => import("@/views/Home.vue"),
      footer: () => import("@/components/navigation/footer.vue"),
      meta: {
        title: baseTitle + separator + "Feed",
      },
    },
  },
  {
    path: "/Discover",
    name: "Découverte",
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
        name: "Comptes et livret",
        path: "Accounts",
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
