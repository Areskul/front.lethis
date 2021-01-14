import {
  useClient,
  defaultPlugins,
  //handleSubscriptions,
  ClientPlugin,
} from "villus";
import { authPlugin } from "@/services/authPlugin";
import {
  handleSubscriptions,
  subscriptionForwarder,
} from "@/services/subPlugin";
import { useStore } from "vuex";
import { computed } from "vue";

export const auth = () => {
  const store = useStore();
  const token = computed({
    get: () => store.state.auth.token,
    set: (val) => {
      store.dispatch("auth/setToken", val);
    },
  });
  const villusClientSetup = (token: string) => {
    const api = process.env.VUE_APP_API as string;
    useClient({
      url: api,
      /*use: [...defaultPlugins()],*/
      use: [
        authPlugin({ token: token }),
        handleSubscriptions(subscriptionForwarder) as ClientPlugin,
        ...defaultPlugins(),
      ],
      cachePolicy: "network-only",
    });
  };
  return {
    token,
    villusClientSetup,
  };
};
