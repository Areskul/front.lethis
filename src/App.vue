<template lang="pug">
.body.flex.relative
  .w-auto
    router-view(name="navbar", v-slot="{ Component }")
      transition(
        mode="out-in",
        enter-active-class="slide-in-left",
        leave-active-class="slide-out-left"
      )
        component(:is="Component")
  .w-screen
    router-view(name="header", v-slot="{ Component }")
      transition(
        mode="out-in",
        appear,
        enter-active-class="fade-in-top",
        leave-active-class="fade-out-top"
      )
        component(:is="Component")
    router-view(name="bodyContent", v-slot="{ Component }")
      component(:is="Component")
    router-view(name="footer", v-slot="{ Component }")
      transition(
        mode="out-in",
        appear,
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
import { useRoute } from "vue-router";
/*import { useStore } from "vuex";*/
import { USER_INFO } from "@/services/users.ts";
export default defineComponent({
  setup(props) {
    //Dispatch Client
    /*const store= useStore()*/
    const route = useRoute();
    console.log(props);

    //villus
    const { villusClientSetup, token, user } = auth();
    villusClientSetup();

    //Dispatch villus data in app
    const { data, execute } = useQuery({ query: USER_INFO });

    //theme
    const { setMeta } = metaTheme();

    onMounted(async () => {
      setMeta();
    });

    return {
      execute,
      data,
      user,
      token,
      route,
    };
  },
  watch: {
    data: function (val) {
      if (val) {
        this.user = val.user;
      }
    },
    token: function () {
      this.execute();
    },
  },
});
</script>
