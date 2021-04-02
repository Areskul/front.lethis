import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { metaResolver } from "./metaResolver";
import { auth } from "@/composables/auth";
//export { metaResolver };

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          top: 0,
        });
      }, 400);
    });
  },
});

router.beforeEach((to, from) => {
  if (from.name == to.name) {
    return false;
  }
});

router.beforeEach((to, from, next) => {
  metaResolver(to, from, next);
});

const { isAuthenticated } = auth();

router.beforeEach(() => {
  if (!isAuthenticated) {
    return "/login";
  } else {
    return true;
  }
});
