<template>
  <div>
    <card color="bg" text="ternary" elevation="2" rounded height="230px" width="200px">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col">
            <card height="200px" width></card>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-auto">
            <h4>{{ item.name }}</h4>
          </div>
          <div class="col-auto">
            <p>{{ item.price }}</p>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>
<script>
import card from "@/core/components/containers/card";
export default {
  props: {
    item: Object,
  },
  components: {
    card,
  },
};
</script>
