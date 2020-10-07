const isDark = localStorage.getItem("isDark")
  ? JSON.parse(localStorage.getItem("isDark"))
  : false;

export const theme = {
  namespaced: true,
  state: {
    isDark: isDark,
  },
  actions: {
    setDark({ commit }, bool) {
      commit("updateDark", bool);
    },
  },
  mutations: {
    updateDark(state, bool) {
      state.isDark = bool;
      localStorage.setItem("isDark", JSON.stringify(state.isDark));
    },
  },
};
