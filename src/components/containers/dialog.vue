<template lang="pug">
.text-center
  button.px-4.pt-2.text-sm.text-green-500(
    type="button",
    @mousever="active = true",
    @mouseleave="active = false",
    @click="openModal"
  )
    svg.fill-current.opacity-50(viewBox="0 0 35 45")
      path(:d="plus")
  transition(
    enter="duration-300 ease-out",
    enter-from="opacity-0 scale-95",
    enter-to="opacity-100 scale-100",
    leave="duration-200 ease-in",
    leave-from="opacity-100 scale-100",
    leave-to="opacity-0 scale-95"
  )
    .overlay(v-if="isOpen")
      .under(@click="handleClick")
      .alert
        .flex.flex-wrap.justify-center
          .flex
            form#form
              .input-container
                label(:for="field.name") {{ field.label }}
                Field.px-4(
                  :type="field.type",
                  :as="field.as",
                  :id="field.name",
                  :name="field.name",
                  v-bind="attrs"
                )
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
import { mdiPlusCircle } from "@mdi/js";
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
  data: () => ({
    plus: mdiPlusCircle,
    active: false,
  }),
  props: {
    entity: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Boolean,
      required: true,
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
      as: "input",
      type: "text",
      name: "job.name",
      label: "nom",
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
    const handleClick = function (bool) {
      closeModal();
    };
    return {
      job,
      onSubmit,
      isOpen,
      execute,
      openModal,
      closeModal,
      handleClick,
      field,
    };
  },
});
</script>

<style lang="postcss" scoped>
.modal {
  @apply align-middle h-64 mt-52 mx-auto z-10 w-64 py-1 rounded-md shadow-lg;
  @apply bg-white text-black;
  @apply dark:text-white dark:bg-gray-900;
}
.alert {
  @apply container py-3 max-w-3xl rounded-md shadow z-20;
  @apply bg-white;
  @apply dark:bg-gray-900;
}
.overlay {
  @apply bg-gray-100;
  @apply dark:bg-black;
  @apply fixed z-10 inset-0 flex flex-row overflow-y-auto justify-center items-center;
  @apply bg-opacity-75 transition-opacity;
}
.under {
  @apply inset-0 fixed items-center justify-center;
}
</style>
