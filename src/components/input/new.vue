<template lang="pug">
.overlay(v-show="modelValue")
  .under(@click="handleClick(false)")
  .alert(@click.prevent)
    .flex.justify-center.pb-4
      h1 Informations personnelles du client
    form(@submit.prevent)
      .flex.flex-wrap.justify-center
        .flex.p-4(v-for="(x, i) in labels")
          .myinput
            label(for="x") {{ x }}
            input#x(type="text", v-model="model[i].$model")
      .flex.flex-wrap.justify-center
        button.btn(@click="handleSubmit") Créer
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useMutation } from "villus";
import { CREATE_CLIENT } from "@/services/clients";
/*import { local } from "@/composables/storage";*/
export default defineComponent({
  name: "basicInformations",
  /*emits: ["update:modelValue"],*/
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
    //Store
    const store = useStore();
    const cli = computed(() => store.state.client.currentClient);
    const dispatchClient = (data) => {
      store.dispatch("client/setCurrentClient", data);
    };
    const initialState = {
      civilite: null,
      lastname: null,
      firstname: null,
    };
    const labels = {
      civilite: "civilité",
      lastname: "nom",
      firstname: "prénom",
    };
    const useState = () => {
      if (Object.entries(cli.value).length != 0) {
        return cli.value;
      } else if (initialState) {
        return initialState;
      }
    };
    const state = ref(useState());
    //Vueliate
    const rules = {
      civilite: {},
      lastname: {
        required,
      },
      firstname: {
        required,
      },
    };
    const model = useVuelidate(rules, state);
    //Villus
    const variables = state.value;
    const { execute } = useMutation(CREATE_CLIENT);

    const handleClick = function (bool) {
      emit("update:modelValue", bool);
    };
    return {
      handleClick,
      dispatchClient,
      cli,
      model,
      labels,
      variables,
      execute,
    };
  },
  //Router
  beforeRouteLeave(to, from) {
    this.handleSubmit();
  },
  methods: {
    handleSubmit: function () {
      this.execute(this.variables).then((res) => {
        if (res.data.createClient) {
          this.dispatchClient(res.data.createClient);
        } else {
          this.dispatchClient({});
        }
      });
    },
  },
});
</script>
<style lang="postcss" scoped>
.alert {
  @apply container bg-white py-3 max-w-2xl rounded-md shadow z-20;
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
