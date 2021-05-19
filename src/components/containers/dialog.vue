<template lang="pug">
button.px-4.py-2.text-sm.font-medium.text-white.bg-black.rounded-md.bg-opacity-20(
  type="button",
  @click="openModal",
  class="hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
) Open dialog
transition(
  enter="duration-300 ease-out",
  enter-from="opacity-0 scale-95",
  enter-to="opacity-100 scale-100",
  leave="duration-200 ease-in",
  leave-from="opacity-100 scale-100",
  leave-to="opacity-0 scale-95"
)
  div(v-show="isOpen")
    .fixed.inset-0.z-10.overflow-y-auto
      .min-h-screen.text-center
        .modal.inline-block.h-screen.align-middle
          input
          button.btn(type="button", @click="closeModal") Got it, thanks!
</template>

<script lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { defineComponent, ref } from "vue";
import { useMutation } from "villus";
import { ADD_JOB } from "@/services/fields";
export default defineComponent({
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  props: {
    entity: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const isOpen = ref(false);
    const { execute } = useMutation(ADD_JOB);
    return {
      isOpen,
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
    };
  },
});
</script>

<style lang="postcss" scoped>
.modal {
  @apply m-auto my-52 z-10 w-64 py-1 overflow-hidden rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
  @apply dark:text-white dark:bg-gray-700;
  @apply text-black;
}
</style>
