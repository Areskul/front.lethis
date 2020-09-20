import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import VueMeta from "vue-meta";

import { createProvider } from "./vue-apollo";
//Directives
//Must have directives (Lazy-loading, scroll, outside-click)
import { intersect } from "@/core/directives/intersect";
import { scroll } from "@/core/directives/scroll";

// Colors, Shadows, Text and Breakpoints
import "@/core/scss/_all.scss";
import "./scss/_all.scss";

//Grid and Spacing and Reboot
import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";

//Service worker
import "./registerServiceWorker";

//UI lib compponents
// import KeenUI from "keen-ui";

// impport in file
// import { UiAlert, UiButton } from "keen-ui";
//Load css at the begining
import "keen-ui/dist/keen-ui.css";

Vue.config.devtools = process.env.NODE_ENV == "production" ? false : true;

Vue.directive("intersect", intersect);
Vue.directive("scroll", scroll);
// Vue.use(KeenUI);
Vue.use(VueMeta);

new Vue({
  store,
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
