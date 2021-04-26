<template lang="pug">
input(v-model="modelValueComputed")
.card(v-if="data")
  p(v-for="item in data.jobs") {{ item.name }}
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useQuery } from "villus";
export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    query: {
      type: Object,
      required: true,
    },
    queryName: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { data } = useQuery({
      query: props.query,
      /*fetchOnMount: false,*/
    });
    const handleInput = function (string) {
      emit("update:modelValue", string);
    };
    const modelValueComputed = computed({
      get: () => {
        return props.modelValue;
      },
      set: (val) => {
        emit("update:modelValue", val);
        return val;
      },
    });
    return {
      modelValueComputed,
      handleInput,
      data,
    };
  },
});
</script>

<style lang="postcss" scoped>
.card {
  @apply shadow-md;
}
</style>
