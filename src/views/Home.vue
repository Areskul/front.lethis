<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="slide-in-bck-center"
      leave-active-class="slide-out-bck-center"
    >
      <productCatalogue />
    </transition>
  </div>
</template>

<script>
import productCatalogue from "../components/productCatalogue";
export default {
  name: "Home",
  data: () => ({}),
  components: {
    productCatalogue,
  },
};
</script>
