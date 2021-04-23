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
      //if (data == {} || data == undefined || data == null) {
      //localStorage.setItem("currentClient", JSON.stringify({}));
      //} else {
      state.currentClient = data;
      localStorage.setItem("currentClient", JSON.stringify(data));
      //}
      //console.log(state.currentClient);
    },
  },
};
