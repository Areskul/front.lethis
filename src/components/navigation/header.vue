<template>
  <header>
    <card class="mb-6" color="secondary" height="60px">
      <nav class="level is-mobile pt-5">
        <div class="level-left"></div>
        <div class="level-right pr-5">
          <div class="level-item"></div>
        </div>
      </nav>
    </card>
  </header>
</template>
<script>
import card from "@/core/components/containers/card";
export default {
  name: "myHeader",
  data: () => ({}),
  components: {
    card,
  },
};
</script>
