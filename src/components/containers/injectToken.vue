<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useClient, defaultPlugins } from "villus";
import { authPlugin } from "@/services/token";
export default defineComponent({
  name: "inject-token",
  props: {
    token: String,
  },
  setup(props) {
    const token = props.token;
    const api = process.env.VUE_APP_API || "";
    useClient({
      url: api,
      use: [authPlugin({ token: token || "" }), ...defaultPlugins()],
      cachePolicy: "network-only",
    });
  },
  data: () => ({}),
  components: {},
});
</script>
