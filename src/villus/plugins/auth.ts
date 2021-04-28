import { definePlugin } from "villus";
import { computed } from "vue";
import { useStore } from "vuex";

export const authPlugin = () => {
  const store = useStore();
  const token = computed({
    get: () => store.state.auth.token,
    set: (val) => {
      store.dispatch("auth/setToken", val);
    },
  });
  return definePlugin(({ opContext }) => {
    if (token.value) {
      opContext.headers = {
        Authorization: "Bearer " + token.value,
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
    } else {
      opContext.headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
    }
  });
};
