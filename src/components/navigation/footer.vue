<template>
  <div class="columns">
    <div class="column">
      <card color="primary" height="100px">
        <icon />
      </card>
    </div>
  </div>
</template>
<script>
import card from "../containers/card";
import icon from "../buttons/icon";
export default {
  name: "vheader",
  components: {
    card,
    icon,
  },
};
</script>
