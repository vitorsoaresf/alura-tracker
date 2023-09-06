<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="alura-tracker" />
    </h1>
    <button class="button" @click="alterarTema">{{ textoDoBotao }}</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoTemaAlterado"],
  data() {
    return {
      modoEscuroAtivo: false,
    };
  },
  computed: {
    textoDoBotao() {
      let label = "Ativar modo escuro";
      if (this.modoEscuroAtivo) {
        label = "Desativar modo escuro";
      }

      return label;
    },
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit("aoTemaAlterado", this.modoEscuroAtivo);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
