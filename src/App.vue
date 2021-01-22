<template lang="pug">
.no-select
  router-view(name="header", v-slot="{ Component }")
    transition(
      mode="out-in",
      appear,
      enter-active-class="fade-in-top",
      leave-active-class="fade-out-top"
    )
      component(:is="Component")
  router-view(name="bodyContent", v-slot="{ Component }")
    transition(
      mode="out-in",
      enter-active-class="fade-in-fwd",
      leave-active-class="fade-out-bck"
    )
      component(:is="Component")
  router-view(name="footer", v-slot="{ Component }")
    transition(
      mode="out-in",
      enter-active-class="fade-in-fwd",
      leave-active-class="fade-out-bck"
    )
      component(:is="Component")
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { auth } from "@/composables/auth";
import { metaTheme } from "@/composables/theme";
import { useQuery } from "villus";
import { USER_INFO } from "@/services/users.ts";
export default defineComponent({
  setup() {
    //villus
    const { villusClientSetup, user } = auth();
    villusClientSetup();

    //Dispatch villus data in app
    const { data } = useQuery({ query: USER_INFO });

    //theme
    const { setMeta } = metaTheme();

    onMounted(async () => {
      setMeta();
    });

    return {
      data,
      user,
    };
  },
  watch: {
    data: function (val) {
      this.user = val.user;
    },
  },
});
</script>
