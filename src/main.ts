//Import text alignement classes
import "@mdi/js";
import "@/css/default.scss";
import "@/css/animate.scss";
import "@/css/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./router";

const app = createApp(App);

app.use(store);
app.use(router);
// app.directive("intersect", intersect);
//app.provide("#app", "app");
app.mount("#app");
