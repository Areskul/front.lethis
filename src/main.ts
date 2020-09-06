import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import VueMeta from "vue-meta";

import "@/core/scss/_all.scss";
import "./scss/variables.scss";

import "./registerServiceWorker";

import Buefy from "buefy";

import { createProvider } from "./vue-apollo";

Vue.config.devtools = process.env.NODE_ENV == "production" ? false : true;

Vue.use(VueMeta);
Vue.use(Buefy);

new Vue({
  components: {
    // UiAlert,
    // UiButton,
  },
  store,
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
