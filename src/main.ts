import Vue from "vue";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import "@/styles/colors/light.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
