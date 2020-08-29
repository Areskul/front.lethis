 <template>
  <div class="container">
    <ApolloQuery :query="getProducts" :variables="products">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">An error occured</div>
        <div v-else-if="data">
          <div class="columns">
            <div class="column" v-for="item in data.products" :key="item.name">
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
import product from "./containers/product"
import gql from 'graphql-tag'
export default {
    data: () => ({
       getProducts: require('../services/products.gql')
    }),
    components:{
      product
    },
    apollo: {
//   products: PRODUCTS,
},
}
</script>
