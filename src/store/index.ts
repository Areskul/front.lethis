import { createStore } from "vuex";
import { theme } from "./theme.js";

export type State = {
  counter: number;
};

export const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    theme,
  },
});
