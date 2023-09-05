<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column">
        <TemporizadorApp @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorApp from "./Temporizador.vue";

export default defineComponent({
  name: "FormularioApp",
  components: {
    TemporizadorApp,
  },
  data() {
    return { descricao: "" };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.descricao = "";
    },
  },
});
</script>
