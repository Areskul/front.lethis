//const currentClient = JSON.parse(
//localStorage.getItem("currentClient") as string
//);

const makeCurrentCli = () => {
  if (localStorage.getItem("currentClient")) {
    return JSON.parse(localStorage.getItem("currentClient") as string);
  } else {
    return {};
  }
};

const currentClient = makeCurrentCli();
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
      localStorage.setItem("currentClient", JSON.stringify(data));
    },
  },
};
