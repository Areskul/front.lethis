<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useClient, defaultPlugins } from "villus";
import { authPlugin } from "@/services/authPlugin";
export default defineComponent({
  name: "inject-token",
  props: {
    token: String,
  },
  setup(props) {
    const token = props.token;
    const api = process.env.VUE_APP_API as string;
    useClient({
      url: api,
      /*use: [...defaultPlugins()],*/
      use: [authPlugin({ token: token as string }), ...defaultPlugins()],
      cachePolicy: "network-only",
    });
  },
});
</script>
