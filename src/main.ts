import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import VueMeta from "vue-meta";

//Directives
//Must have directives (Lazy-loading, scroll, outside-click)
import { intersect } from "@/core/directives/intersect";

// Colors, Shadows, Text and Breakpoints
import "@/core/scss/_all.scss";
import "./scss/_all.scss";

//Grid and Spacing and Reboot
import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";

//Service worker
import "./registerServiceWorker";

//UI lib compponents
import KeenUI from "keen-ui";
import "keen-ui/dist/keen-ui.css";

Vue.config.devtools = process.env.NODE_ENV == "production" ? false : true;

Vue.directive("intersect", intersect);

Vue.use(KeenUI);
Vue.use(VueMeta);

new Vue({
  components: {
    // UiAlert,
    // UiButton,
  },
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
