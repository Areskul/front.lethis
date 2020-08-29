<template>
  <div>
    <card color="primary" text="ternary" elevation="4" rounded height="40vh">
      <h4>{{item.name}}</h4>
      <p>{{item.description}}</p>
      <p>{{item.price}}</p>
    </card>
  </div>
</template>
<script>
import card from "./card"
export default {
    props:{
        item: Object
    },
    components:{
        card
    }
}
</script>