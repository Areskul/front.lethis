<template lang="pug">
.overlay(v-if="modelValue")
  .under(@click="handleClick(false)")
  .alert(@click.prevent)
    .flex.justify-center.pb-4
      h1 Informations personnelles du client
      div {{ client }}
    form#form
      .input-container(
        v-for="{ name, as, label, children, ...attrs } in schema.fields"
      )
        label.autocomplete(:for="name") {{ label }}
        Field(:as="as", :id="name", :name="name", v-bind="attrs")
          template(v-if="data")
            component(is="option", v-for="{ name } in data.enumValues") {{ name }}
        ErrorMessage(:name="name")
    .flex.flex-wrap.justify-center
      button.btn(@click="onSubmit") Créer
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { clientUtils } from "@/composables/client";
import { GET_ENUM } from "@/services/fields";
import { useQuery } from "villus";
import { useForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { FormSchema } from "@/common/types";
export default defineComponent({
  name: "basicInformations",
  components: {
    Field,
    ErrorMessage,
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
    const { data } = useQuery({
      query: GET_ENUM,
      variables: { name: "Gender" },
    });
    const schema: FormSchema = {
      fields: [
        {
          as: "input",
          name: "firstname",
          label: "Prénom",
          type: "text",
        },
        {
          as: "input",
          name: "lastname",
          label: "Nom",
          type: "text",
        },
        {
          as: "select",
          name: "gender",
          label: "Civilité",
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
    const onSubmit = async () => {
      handleSubmit((variables) => {
        updateClient(variables);
      });
      router.push({ name: "Identité", params: { uid: client.value.id } });
    };
    const handleClick = function (bool) {
      emit("update:modelValue", bool);
    };
    return {
      client,
      data,
      schema,
      handleClick,
      onSubmit,
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
</style>
