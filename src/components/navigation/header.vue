<template>
  <div class="columns px-0 py-0">
    <div class="column">
      <card color="secondary" height="10vh">
        <div class="columns px-0 py-5">
          <div class="column">
            <b-icon pack="mdi" icon="magnify" size="is-small" class="pt-6">
            </b-icon>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import card from "../containers/card";
export default {
  name: "vheader",
  data: () => ({}),
  components: {
    card,
  },
};
</script>
