<template>
  <div class="container">
    <product></product>
  </div>
</template>
<script>
// import PRODUCTS from '../services/products.gql';
// import { UiAlert } from "@areskul/keen-ui-next";
import product from "./containers/product";
// import gql from "graphql-tag";
export default {
  data: () => ({
    // getProducts: require("../services/products.gql"),
  }),
  components: {
    product,
    // UiAlert,
  },
};
</script>
