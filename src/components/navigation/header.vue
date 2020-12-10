<template>
  <v-header>
    <card class="mb-5" color="secondary" height="60px">
      <nav class>
        <div class></div>
        <div class>
          <div class></div>
        </div>
      </nav>
    </card>
  </v-header>
</template>
<script>
import card from "@components/containers/card.vue";
export default {
  name: "v-header",
  data: () => ({}),
  components: {
    card,
    vHeader,
  },
};
</script>
