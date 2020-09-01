<template>
  <transition
    mode="out-in"
    enter-active-class="fade-in-fwd"
    leave-active-class="fade-out-bck"
  >
    <card
      v-show="show"
      class="floating"
      color="bg"
      text="ternary"
      elevation="4"
      rounded
    >
      Ceci est un menu
      <nav>
        <p v-for="link in nav" :key="link.name">{{ link.name }}</p>
      </nav>
    </card>
  </transition>
</template>
<script>
import card from "../containers/card";
export default {
  props: {
    show: Boolean,
  },
  data: () => ({
    nav: [
      { route: "/Home", name: "Accueil" },
      { route: "/Cart", name: "Panier" },
    ],
  }),
  computed: {
    isVisible: function () {
      return this.show;
    },
  },
  components: {
    card,
  },
  watch: {
    show() {
      console.log(this.show);
    },
  },
  methods: {
    debug: function () {
      console.log(this.show);
    },
  },
};
</script>
<style scoped>
.floating {
  position: absolute;
  /* float: unset; */
  top: 70px;
  right: 20px;
  z-index: 1;
  display: inline-block;
  white-space: nowrap;
}
</style>
