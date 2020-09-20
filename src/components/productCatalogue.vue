<template>
  <div class="container">
    <ApolloQuery :query="getProducts">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">
          <ui-alert type="error" :dismissible="false" class="text-center">Problème de connection</ui-alert>
        </div>
        <div v-else-if="data">
          <div class="row justify-content-center pb-3">
            <div class="col-auto pb-4" v-for="item in data.products" :key="item.name">
              <product :item="item" />
            </div>
          </div>
        </div>
        <div v-else>No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
// import PRODUCTS from '../services/products.gql';
import { UiAlert } from "keen-ui";
import product from "./containers/product";
import gql from "graphql-tag";
export default {
  data: () => ({
    getProducts: require("../services/products.gql"),
  }),
  components: {
    product,
    UiAlert,
  },
  apollo: {
    //   products: PRODUCTS,
  },
};
</script>
