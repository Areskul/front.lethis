import { useClient, defaultPlugins } from "villus";
import { authPlugin } from "@/services/authPlugin";
import { useStore } from "vuex";
import { computed } from "vue";

export function auth() {
  const store = useStore();
  const token = computed({
    get: function () {
      return store.state.auth.token;
    },
    set: function (string) {
      store.dispatch("auth/setToken", string);
    },
  });
  const villusClientSetup = (token: string) => {
    const api = process.env.VUE_APP_API as string;
    useClient({
      url: api,
      /*use: [...defaultPlugins()],*/
      use: [authPlugin({ token: token }), ...defaultPlugins()],
      cachePolicy: "network-only",
    });
  };
}
