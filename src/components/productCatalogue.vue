<template>
  <div v-if="data" class="container">
    <product
      v-for="item in data.products"
      :key="item.id"
      :item="item"
    ></product>
  </div>
</template>
<script>
// import { UiAlert } from "@areskul/keen-ui-next";
import product from "./containers/product";
// import { gql } from "graphql-tag";
import { useQuery } from "villus";
import getProducts from "../strapi/products.gql";
export default {
  data: () => ({}),
  setup() {
    const { data } = useQuery({
      query: getProducts,
    });
    return { data };
  },
  components: {
    product,
    // UiAlert,
  },
};
</script>
