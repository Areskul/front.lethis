<template lang="pug">
.card(v-if="data")
  div {{ data }}
  .item(v-for="item in data.jobs")
    p {{ item.name }}
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useQuery } from "villus";
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
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
    let data;
    const { execute } = useQuery({
      query: props.query,
      fetchOnMount: false,
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
    watch(modelValueComputed, () => {
      execute().then((res) => {
        data = res;
      });
    });
    return {
      modelValueComputed,
      handleInput,
      execute,
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
