<template lang="pug">
.text-center
  button.px-4.py-2.text-sm.font-medium.text-white.bg-black.rounded-md.bg-opacity-20(
    type="button",
    @click="openModal",
    class="hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
  ) Ajouter
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
      .text-center.h-screen
        .modal
          .flex.flex-wrap.justify-center
            .flex
              form#form
                .input-container
                  label(:for="field.name") {{ field.label }}
                  Field.px-4(:id="field.name", :name="field.name")
                  ErrorMessage(:name="field.name")
          button.btn(type="button", @click="onSubmit") Ajouter
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
import { Field, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  components: {
    Field,
    ErrorMessage,
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
    const closeModal = () => {
      isOpen.value = false;
    };
    const openModal = () => {
      isOpen.value = true;
    };
    //Vee-validate
    const job = {
      name: null,
    };
    const field = {
      name: "job.name",
      label: "nom",
      as: "input",
      type: "text",
    };

    const schema = {
      validation: yup.object({
        job: yup.object({
          name: yup.string(),
        }),
      }),
    };
    const { handleSubmit } = useForm({ validationSchema: schema.validation });
    const onSubmit = handleSubmit((variables) => {
      execute(variables);
      closeModal();
    });
    return {
      job,
      onSubmit,
      isOpen,
      execute,
      openModal,
      closeModal,
      field,
    };
  },
});
</script>

<style lang="postcss" scoped>
.modal {
  @apply align-middle h-64 mt-52 mx-auto z-10 w-64 py-1 rounded-md shadow-lg;
  @apply dark:text-white dark:bg-gray-900;
  @apply bg-white text-black;
}
</style>
