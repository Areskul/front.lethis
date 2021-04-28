import { watch, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useQuery } from "villus";
import { USER_INFO } from "@/services/users";

export const auth = () => {
  const store = useStore();
  const { data, execute } = useQuery({ query: USER_INFO });

  const isAuthenticated = computed(() => store.state.auth.isAuthenticated);
  const token = computed({
    get: () => store.state.auth.token,
    set: (val) => {
      store.dispatch("auth/setToken", val);
    },
  });
  watch(token, (token) => {
    if (token != "") {
      execute();
    }
  });
  const user = computed({
    get: () => store.state.auth.user,
    set: (val) => {
      store.dispatch("auth/setUser", val);
    },
  });
  watch(data, (data) => {
    if (data) {
      user.value = data.user;
    }
  });
  return {
    isAuthenticated,
    token,
    user,
  };
};

export const navguard = () => {
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
