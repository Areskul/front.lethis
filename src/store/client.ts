const currentClient = JSON.parse(
  localStorage.getItem("currentClient") as string
);

//const currentClient = JSON.parse(
//localStorage.getItem("currentClient") as string
//);
//const currentClient = undefined;

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
      if (data == {} || data == undefined || data == null) {
        localStorage.setItem(
          "currentClient",
          JSON.stringify(state.currentClient)
        );
      } else {
        localStorage.setItem(
          "currentClient",
          JSON.stringify(state.currentClient)
        );
      }
    },
  },
};
