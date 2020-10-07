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
import vHeader from "@/../core-minimal/components/navigation/vHeader";
import card from "@/components/containers/card";
export default {
  name: "myHeader",
  data: () => ({}),
  components: {
    card,
    vHeader,
  },
};
</script>
