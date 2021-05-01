<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  .flex.justify-center.items-center
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
</template>
<script lang="ts">
import { defineComponent } from "vue";
import selectable from "@/components/containers/selectable.vue";
import { onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";
import { useForm, Field } from "vee-validate";
import * as yup from "yup";
import { clientUtils } from "@/composables/client";
/*import { GET_GENDERS } from "@/services/fields";*/
/*import {useQuery} from "villus"*/
export default defineComponent({
  name: "basicInformations",
  components: {
    selectable,
  },
  props: {
    uid: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const { updateClient, client, dispatchClient } = clientUtils();
    //Vee-validate
    const schema = yup.object({
      firstname: yup.string(),
      lastname: yup.string(),
      gender: yup.string(),
    });
    const { handleSubmit } = useForm({
      initialValues: client,
      validationSchema: schema,
    });
    const onSubmit = handleSubmit((variables) => {
      updateClient(props.uid, variables);
    });
    onBeforeRouteLeave((to, from) => {
      onSubmit();
    });
    onBeforeRouteUpdate((to, from) => {
      dispatchClient(props.uid);
    });
    return {
      schema,
      onSubmit,
    };
  },
});
</script>
