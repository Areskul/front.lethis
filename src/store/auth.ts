import { useClient, defaultPlugins, useQuery } from "villus";
import { USER_INFO } from "@/services/users.ts";
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
    async updateUser(state: any) {
      const token = state.token;
      const api = process.env.VUE_APP_API as string;
      useClient({
        url: api,
        use: [authPlugin({ token: token as string }), ...defaultPlugins()],
        cachePolicy: "network-only",
      });
      const { execute } = await useQuery({ query: USER_INFO });
      execute().then((result: any) => {
        console.log(result);
        //state.user = data;
      });
    },
  },
};
