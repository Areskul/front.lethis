const isDark = JSON.parse(localStorage.getItem("isDark") as string);
const isOld = JSON.parse(localStorage.getItem("isOld") as string);
export const theme = {
  namespaced: true,
  state: {
    isDark: isDark,
    isOld: isOld,
  },
  actions: {
    setDark({ commit }: any, bool: boolean) {
      commit("updateOld", false);
      commit("updateDark", bool);
    },
    setOld({ commit }: any, bool: boolean) {
      commit("updateDark", false);
      commit("updateOld", bool);
    },
  },
  mutations: {
    updateDark(state: any, bool: boolean) {
      state.isDark = bool;
      localStorage.setItem("isDark", JSON.stringify(state.isDark));
    },
    updateOld(state: any, bool: boolean) {
      state.isOld = bool;
      localStorage.setItem("isOld", JSON.stringify(state.isOld));
    },
  },
};
