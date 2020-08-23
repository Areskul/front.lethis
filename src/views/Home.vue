<template>
  <transition
    mode="out-in"
    enter-active-class="slide-in-bck-center"
    leave-active-class="slide-out-bck-center"
  >
    <div class="columns px-5">
      <div class="column" v-for="item in items" :key="item.name">
        <card
          color="primary"
          height="150px"
          width="100px"
          elevation="0"
          rounded
          border="secondary"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import card from "../components/containers/card";
export default {
  name: "Home",
  data: () => ({
    items: [
      { name: "name1", price: 10 },
      { name: "name2", price: 20 },
      { name: "name3", price: 30 },
    ],
  }),
  components: {
    card,
  },
};
</script>
