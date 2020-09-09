<template>
  <header>
    <card class="mb-6" color="secondary" height="60px">
      <nav class="level is-mobile pt-5">
        <div class="level-left"></div>
        <div class="level-right pr-5">
          <div class="level-item">
            <headerButtons />
          </div>
        </div>
      </nav>
    </card>
  </header>
</template>
<script>
import card from "@/core/components/card";
import headerButtons from "../buttons/headerButtons";
export default {
  name: "myHeader",
  data: () => ({}),
  components: {
    card,
    headerButtons,
  },
};
</script>
