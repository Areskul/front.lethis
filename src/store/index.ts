import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";

Vue.use(Vuex);

import { auth } from "auth";
import { cart } from "cart";

const store = new Vuex.Store({
  modules: {
    auth,
    cart,
  },
});

export default store;
