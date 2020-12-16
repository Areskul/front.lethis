//import { authPlugin } from "@/services/token";

const isAuthenticated = false;
const user = {};
const token = JSON.parse(localStorage.getItem("token") as string);

export const auth = {
  namespaced: true,
  state: {
    isAuthenticated: isAuthenticated,
    user: user,
    token: token,
  },
  actions: {
    setAuth({ commit }: any, token: string) {
      commit("updateAuth", token);
    },
  },
  mutations: {
    updateAuth(state: any, token: string) {
      state.token = token;
      //authPlugin(opContext, token);
      localStorage.setItem("token", JSON.stringify(state.token));
    },
  },
};
