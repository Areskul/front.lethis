import { createStore } from "vuex";
import { auth } from "./auth";
import { client } from "./client";

export type State = {
  counter: number;
};

export const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    auth,
    client,
  },
});
