import { createStore } from "vuex";
import { theme } from "./theme";
import { auth } from "./auth";

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
    auth,
  },
});
