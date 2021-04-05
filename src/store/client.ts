const currentClient: string | undefined = JSON.parse(
  localStorage.getItem("currentClient") as string
);

export const client = {
  namespaced: true,
  state: {
    currentClient: currentClient,
  },
  actions: {
    setCurrentClient({ commit }: any, data: any) {
      commit("updateCurrentClient", data);
    },
  },
  mutations: {
    updateCurrentClient(state: any, data: any) {
      state.currentClient = data;
      localStorage.setItem(
        "currentClient",
        JSON.stringify(state.currentClient)
      );
    },
  },
};
