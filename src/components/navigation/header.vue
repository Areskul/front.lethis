<template>
  <card class="mb-6" color="secondary" height="60px">
    <nav class="level fill-height is-mobile pt-5">
      <div class="level-left"></div>
      <div class="level-right pr-5">
        <div class="level-item">
          <headerButtons />
        </div>
      </div>
    </nav>
  </card>
</template>
<script>
import card from "../containers/card";
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
<style>
.fill-height {
  height: inherit;
}
</style>
