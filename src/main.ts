//Import text alignement classes
import "@mdi/js";
import "./scss/_all.scss";
//import "@areskul/minimal-grid/breakpoints.scss";
//import "@areskul/minimal-grid/text.scss";
//import "@areskul/minimal-elevation/elevation.scss";
//import "@areskul/minimal-border/border.scss";
import "@/css/tailwind.css";

//import { VuelidatePlugin } from "@vuelidate/core";
//import { intersect } from "@areskul/minimal-directives";

import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./router";

const app = createApp(App);

// app.use(color, text, elevation, border);
app.use(store);
app.use(router);
//app.use(VuelidatePlugin);
// app.directive("intersect", intersect);
app.provide("#app", "app");
app.mount("#app");
