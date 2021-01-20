import { definePlugin } from "villus";
import { computed } from "vue";
import { useStore } from "vuex";
//export const authPlugin = (config: {
//token: string | undefined;
//}): ClientPlugin => {
//return definePlugin(({ opContext }) => {
//if (config.token) {
//opContext.headers = {
//Authorization: "Bearer " + config.token,
//"Content-type": "application/json",
//"Access-Control-Allow-Origin": "*",
//};
//} else {
//opContext.headers = {
//"Content-type": "application/json",
//"Access-Control-Allow-Origin": "*",
//};
//}
//});
//};

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

//export const authPlugin = (config: { token: string }) => {
//function authSetPlugin({ opContext }: any): void {
//opContext.headers.Authorization = `Bearer ${config.token}`;
//}
//};
