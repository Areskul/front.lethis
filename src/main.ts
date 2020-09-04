import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import "@/core/scss/_all.scss";
// import global from "./core/mixins/styles";
import { createProvider } from "./vue-apollo";

import "./scss/bulmaDark.scss";
import "./scss/bulmaLight.scss";

import Buefy from "buefy";

Vue.config.devtools = process.env.NODE_ENV == "production" ? false : true;

Vue.use(Buefy);

new Vue({
  components: {
    // UiAlert,
    // UiButton,
  },
  store,
  router,
  // mixins: [styles],
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
