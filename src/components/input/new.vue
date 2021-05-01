<template lang="pug">
.overlay(v-if="modelValue")
  .under(@click="handleClick(false)")
  .alert(@click.prevent)
    .flex.justify-center.pb-4
      h1 Informations personnelles du client
    form#form
      .input-container(
        v-for="{ name, as, label, children, ...attrs } in schema.fields"
      )
        label.autocomplete(:for="name") {{ label }}
        Field(:as="as", :id="name", :name="name", v-bind="attrs")
          template(v-if="children && children.length")
            component(
              v-for="({ tag, text, ...childAttrs }, idx) in children",
              :key="idx",
              :is="tag",
              v-bind="childAttrs"
            ) {{ text }}
    .flex.flex-wrap.justify-center
      button.btn(@click="onSubmit") Créer
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useForm, Field } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "basicInformations",
  components: {
    Field,
  },
  props: {
    uid: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const { createClient, client } = clientUtils();
    //Vee-validate
    interface FieldSchema {
      as: string;
      name: string;
      label: string;
      [k: string]: any;
      children?: Array<{
        tag: string; // the tag that will be rendered
        text?: string; // a text content (optional)
        [k: string]: any; // any additional attributes
      }>;
    }
    interface FormSchema {
      fields: FieldSchema[];
      validation: any;
    }
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
    const onSubmit = handleSubmit((variables) => {
      createClient(variables);
      router.push({ name: "Identité", params: { uid: client.value.id } });
    });

    const handleClick = function (bool) {
      emit("update:modelValue", bool);
    };
    return {
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
