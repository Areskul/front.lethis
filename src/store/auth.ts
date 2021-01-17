const user = {};
const token: string | undefined = JSON.parse(
  localStorage.getItem("token") as string
);
const isAuthenticated = token ? true : false;

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
    },
    setUser({ commit }: any, data: any) {
      commit("updateUser", data);
    },
  },
  mutations: {
    updateToken(state: any, token: string) {
      state.token = token;
      localStorage.setItem("token", JSON.stringify(state.token));
      state.isAuthenticated = !!token;
    },
    async updateUser(state: any, data: any) {
      state.user = data;
    },
  },
};
