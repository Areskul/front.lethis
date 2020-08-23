import Vue from "vue";
import Vuex from "vuex";
import { theme } from "./theme.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    theme,
  },
});

export default store;
