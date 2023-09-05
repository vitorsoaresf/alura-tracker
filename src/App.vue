<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter is-justify-content-center">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioApp />
      <div class="lista">
        <Tarefa />
        <Tarefa />
        <Tarefa />
        <Tarefa />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormularioApp from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";
export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioApp,
    Tarefa,
  },
});
</script>

<style>
.lista {
  padding: 1.225rem;
}
</style>
