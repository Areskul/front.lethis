import { useStore } from "vuex";
import { computed } from "vue";

export const theme = () => {
  const store = useStore();
  const isDark = computed({
    get: () => store.state.theme.isDark,
    set: (bool) => {
      store.dispatch("theme/setDark", bool);
    },
  });

  const isOld = computed({
    get: () => store.state.theme.isOld,
    set: (bool) => store.dispatch("theme/setOld", bool),
  });
  return {
    isDark,
    isOld,
  };
};
