<template>
  <section>
    <strong class="display"> {{ tempoDecorrido }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CronometroApp",
  props: {
    tempoEmSegundos: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    tempoDecorrido() {
      return new Date(this.tempoEmSegundos * 1000).toISOString().slice(11, 19);
    },
  },
});
</script>
<style>
.display {
  color: var(--texto-primario);
}
</style>
