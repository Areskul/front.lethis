<template lang="pug">
.container
  .flex.justify-center.items-center.py-6
    h1 Informations personnelles du client
  form(@submit.prevent)
    .flex.flex-wrap.justify-center
      .flex.p-4(v-for="(x, i) in labels")
        .myinput(v-if="selectable[i].bool")
          label(for="x") {{ x }}
          selectable#x(
            v-model="model[i].$model",
            :query="selectable[i].query",
            :queryName="selectable[i].name"
          )
        .myinput(v-else)
          label(for="x") {{ x }}
          input#x(type="text", v-model="model[i].$model")
</template>
<script lang="ts">
import {
  defineComponent,
  /*ref*/
} from "vue";
import selectable from "@/components/containers/selectable.vue";
/*import { useMutation } from "villus";*/
/*import { UPDATE_CLIENT } from "@/services/clients";*/
import { GET_GENDERS } from "@/services/fields";
import { clientUtils } from "@/composables/client";
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
  setup() {
    const {
      client,
      /*saveCliToStore,*/
      /*removeBlankTuples */
    } = clientUtils();
    //LocalStorage
    const initialState = {
      gender: null,
      lastname: null,
      firstname: null,
    };
    const labels = {
      gender: "civilité",
      lastname: "nom",
      firstname: "prénom",
    };
    const useState = () => {
      if (Object.entries(client.value).length != 0) {
        return client.value;
      } else if (initialState) {
        return initialState;
      }
    };
    useState();
    /*const state = ref(useState());*/
    const selectable = {
      gender: {
        bool: true,
        query: GET_GENDERS,
        name: "genders",
      },
      lastname: {
        bool: false,
      },
      firstname: {
        bool: false,
      },
    };
    //Vueliate
    /*const rules = {*/
    /*gender: {},*/
    /*lastname: {*/
    /*required,*/
    /*},*/
    /*firstname: {*/
    /*required,*/
    /*},*/
    /*};*/
    //Villus
    /*const variables = removeBlankTuples(state.value);*/
    /*const { execute } = useMutation(UPDATE_CLIENT);*/
    /*saveCliToStore(execute, variables);*/
    return {
      /*model,*/
      labels,
      selectable,
    };
  },
});
</script>
