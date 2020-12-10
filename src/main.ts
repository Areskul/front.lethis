//Import text alignement classes
import "./scss/_all.scss";
import "@areskul/minimal-grid/breakpoints.scss";
import "@areskul/minimal-grid/text.scss";
import "@areskul/minimal-elevation/elevation.scss";
import "@areskul/minimal-border/border.scss";

//import { intersect } from "../core-minimal/minimal-directives";

import "../core-minimal/minimal-transition/transitions.scss";
// import VueMeta from "@areskul/vue-meta";

import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./router";

const app = createApp(App);

// app.use(color, text, elevation, border);
app.use(store);
app.use(router);
// app.directive("intersect", intersect);

app.mount("#app");
