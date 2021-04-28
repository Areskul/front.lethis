//Import text alignement classes
import "@mdi/js";
import "@/css/default.scss";
import "@/css/animate.scss";
import "@/css/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./router";
import { clickOutside } from "@/directives/clickOutSide";

const app = createApp(App);

app.use(store);
app.use(router);
// app.directive("intersect", intersect);
app.directive("click-outside", clickOutside);
app.mount("#app");
