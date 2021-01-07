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
    setUser({ commit }: any, data: any) {
      commit("updateAuth", !!token);
      commit("updateUser", data);
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
    async updateUser(state: any, data: any) {
      state.user = data;
    },
  },
};
