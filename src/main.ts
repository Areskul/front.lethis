import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import "@/scss/_all.scss";
import global from "./mixins/global";

Vue.config.productionTip = process.env.VUE_APP_DEVTOOLS;

new Vue({
  store,
  router,
  mixins: [global],
  render: (h) => h(App),
}).$mount("#app");
