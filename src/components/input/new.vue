<template lang="pug">
.overlay(v-if="modelValue")
  .under(@click="handleClickOutside(false)")
  .alert
    .flex.justify-center.items-center.py-6
      h1 Informations personnelles du client
    form#form
      .flex.flex-wrap.justify-center
        .flex(
          v-for="{ name, as, label, enumValues, ...attrs } in schema.fields"
        )
          .input-container
            label(:for="name") {{ label }}
            Field.w-full(
              v-if="as == 'select'",
              :id="name",
              :name="name",
              v-bind="attrs",
              v-model="models[attrs.modelkey]"
            )
              Listbox(v-model="models[attrs.modelkey]")
                ListboxButton.listbtn
                  span.my-auto.px-3 {{ models[attrs.modelkey] }}
                transition(
                  leave-active-class="transition duration-100 ease-in",
                  leave-from-class="opacity-100",
                  leave-to-class="opacity-0"
                )
                  ListboxOptions.options
                    ListboxOption(
                      v-slot="{ active, selected }",
                      v-for="{ name: n } in data[attrs.modelkey].enumValues",
                      :key="n",
                      :value="n",
                      as="template"
                    )
                      li(
                        :class="[active ? 'text-amber-900 bg-amber-100 dark:text-white' : 'dark:text-gray-400 text-gray-900', 'cursor-default select-none relative py-2 pl-10 pr-4']"
                      )
                        span.option(
                          :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']"
                        ) {{ n }}
            Field(v-else, :as="as", :id="name", :name="name", v-bind="attrs")
            ErrorMessage(:name="name")
    .flex.flex-wrap.justify-center
      button.btn(@click="handleClick") Créer
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { Field, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
import { GET_ENUM } from "@/services/fields";
import { useQuery } from "villus";
import { FormSchema } from "@/common/types";
export default defineComponent({
  name: "basicInformations",
  components: {
    Field,
    ErrorMessage,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const { updateClient, client } = clientUtils();
    const { data: dataGen } = useQuery({
      query: GET_ENUM,
      variables: { name: "Gender" },
    });
    const data = ref({
      gender: dataGen,
    });
    const models = ref({
      gender: client.value.gender,
    });
    const schema: FormSchema = {
      fields: [
        {
          as: "input",
          name: "client.firstname",
          label: "Prénom",
          type: "text",
        },
        {
          as: "input",
          name: "client.lastname",
          label: "Nom",
          type: "text",
        },
        {
          as: "select",
          name: "client.gender",
          label: "Civilité",
          modelkey: "gender",
        },
      ],
      validation: yup.object({
        firstname: yup.string(),
        lastname: yup.string(),
        gender: yup.string(),
      }),
    };
    const { handleSubmit } = useForm({
      validationSchema: schema.validation,
    });
    const onSubmit = handleSubmit((variables) => {
      updateClient(variables);
    });
    const handleClickOutside = (bool: boolean) => {
      emit("update:modelValue", bool);
    };
    const handleClick = () => {
      onSubmit();
      router.push({ name: "Identité", params: { uid: client.value.id } });
    };
    return {
      data,
      models,
      schema,
      handleClick,
      handleClickOutside,
    };
  },
});
</script>
<style lang="postcss" scoped>
.alert {
  @apply container py-3 max-w-2xl rounded-md shadow z-20;
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
.listbtn {
  @apply relative w-full py-3 text-left rounded-lg shadow-md cursor-default focus:outline-none sm:text-sm;
  @apply text-black bg-white;
  @apply dark:text-white dark:bg-gray-900;
}
.options {
  @apply absolute z-10 w-full py-1 mt-1 overflow-hidden rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
  @apply text-black bg-white;
  @apply dark:text-white dark:bg-gray-900;
}
</style>
