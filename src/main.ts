//Import text alignement classes
import "@mdi/js";
import "@/css/default.scss";
import "@/css/animate.scss";
import "@/css/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { store } from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
// app.directive("intersect", intersect);
//app.provide("#app", "app");
app.mount("#app");
