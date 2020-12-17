//import { authPlugin } from "@/services/token";
import { useQuery } from "villus";
import { authPlugin } from "@/services/authPlugin";

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
    setToken({ commit }: any, token: string) {
      commit("updateToken", token);
      commit("updateAuth", !!token);
      commit("updateUser", token);
    },
  },
  mutations: {
    updateToken(state: any, token: string) {
      state.token = token;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    updateAuth(state: any, bool: boolean) {
      state.isAuthenticated = bool;
    },
    updateUser(state: any, token: string) {
      state.user = token;
      const me = useQuery();
    },
  },
};
