import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import "@/scss/_all.scss";
import global from "./mixins/global";
import { createProvider } from "./vue-apollo";

Vue.config.devtools =
  process.env.VUE_APP_NODE_ENV == "production" ? false : true;

new Vue({
  store,
  router,
  mixins: [global],
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
