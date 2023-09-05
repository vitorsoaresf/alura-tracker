<template>{}</template>

<script lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "ListaTarefas",
  props: {
    tarefas: {
      type: String,
      default: "",
    },
  },
});
</script>
