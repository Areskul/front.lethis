import { useQuery } from "villus";
import { USER_INFO } from "@/services/users.ts";
import { auth as authClient } from "@/composables/auth";
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
      commit("updateUser");
    },
    setUser({ commit }: any) {
      commit("updateAuth", !!token);
      commit("updateUser");
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
    async updateUser(state: any) {
      const token = state.token;

      const { villusClientSetup } = authClient();
      villusClientSetup(token);

      const { execute } = await useQuery({ query: USER_INFO });
      execute().then((result: any) => {
        console.log(result);
        //state.user = data;
      });
    },
  },
};
