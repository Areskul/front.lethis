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
import { watch, computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

export const auth = () => {
  const store = useStore();
  const token = computed({
    get: () => store.state.auth.token,
    set: (val) => {
      store.dispatch("auth/setToken", val);
    },
  });
  const isAuthenticated = computed(() => store.state.auth.isAuthenticated);
  const user = computed({
    get: () => store.state.auth.user,
    set: (val) => {
      store.dispatch("auth/setUser", val);
    },
  });
  const villusClientSetup = function () {
    const api = process.env.VUE_APP_API as string;
    useClient({
      url: api,
      /*use: [...defaultPlugins()],*/
      use: [
        //authPlugin({ token: token }),
        authPlugin(),
        handleSubscriptions(subscriptionForwarder) as ClientPlugin,
        ...defaultPlugins(),
      ],
      cachePolicy: "network-only",
    });
  };
  return {
    token,
    user,
    isAuthenticated,
    villusClientSetup,
  };
};

export const guard = () => {
  const store = useStore();
  const router = useRouter();
  const isAuthenticated = computed(() => store.state.auth.isAuthenticated);
  watch(isAuthenticated, (isAuthenticated) => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  });
  onBeforeMount(() => {
    if (!isAuthenticated.value) {
      router.push("/login");
    }
  });
};
