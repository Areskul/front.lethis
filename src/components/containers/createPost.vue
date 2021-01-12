<template lang="pug">
.container
  .row.justify-content-center
    h2 {{ title }}
    label(for="content")
    input#content(type="text", v-model="model.content.$model")
    button(@click="handleSubmit") submit
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useMutation } from "villus";
import { CREATE_POST } from "@/services/posts.ts";
export default defineComponent({
  data: () => ({
    title: "New Posts",
  }),
  setup() {
    //Vueliate
    const state = ref({
      content: null,
    });
    const rules = {
      content: {
        required,
      },
    };
    const model = useVuelidate(rules, state);
    //Villus
    const variables = state.value;
    const { data, execute } = useMutation(CREATE_POST);
    return {
      variables,
      execute,
      data,
      model,
    };
  },
  methods: {
    handleSubmit: function () {
      this.execute(this.variables).then((result) => {
        console.log(result);
      });
    },
  },
});
</script>
