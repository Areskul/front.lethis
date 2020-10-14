<template>
  <div>
    <card
      color="bg"
      text="ternary"
      elevation="2"
      rounded
      height="230px"
      width="200px"
    >
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-auto">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="col-auto">
            <img :src="url" alt="" />
          </div>
          <div class="col-auto">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>
<script>
import card from "@/components/containers/card";
export default {
  props: {
    item: Object,
  },
  computed: {
    url: function () {
      console.log(`${process.env.VUE_APP_API}${this.item.image.url}`);
      return `${process.env.VUE_APP_API}${this.item.image.url}`;
    },
  },
  components: {
    card,
  },
};
</script>
