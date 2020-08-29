import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import "@/scss/_all.scss";
import global from "./mixins/global";
import { createProvider } from "./vue-apollo";

// import KeenUi from "keen-ui";
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
  mixins: [global],
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
