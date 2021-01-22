const isDark = JSON.parse(localStorage.getItem("isDark") as string);
export const theme = {
  namespaced: true,
  state: {
    isDark: isDark,
  },
  actions: {
    setDark({ commit }: any, bool: boolean) {
      commit("updateDark", bool);
    },
  },
  mutations: {
    updateDark(state: any, bool: boolean) {
      state.isDark = bool;
      localStorage.setItem("isDark", JSON.stringify(state.isDark));
      state.isDark
        ? document.querySelector("html")!.classList.add("dark")
        : document.querySelector("html")!.classList.remove("dark");
    },
  },
};
