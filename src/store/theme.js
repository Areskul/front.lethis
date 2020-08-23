const colors = {};
let isDark = localStorage.getItem("isDark")
  ? JSON.parse(localStorage.getItem("isDark"))
  : false;

export const theme = {
  namespaced: true,
  state: {
    colors: colors,
  },
  actions: {
    setColors({ commit }, obj) {
      commit("setCol", obj);
    },
    setDark({ commit }, bool) {
      commit("updateDark", bool);
    },
  },
  mutations: {
    setCol(state, obj) {
      state.colors = obj;
    },
    updateDark(state, bool) {
      state.isDark = bool;
      localStorage.setItem("isDark", JSON.stringify(state.isDark));
    },
  },
};
