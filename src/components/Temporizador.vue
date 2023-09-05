<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroApp :tempoEmSegundos="tempoEmSegundos" />
    <BotaoApp
      @clicado="iniciar"
      icone="fas fa-play"
      texto="play"
      :desabilitado="cronometroRodando"
    />
    <BotaoApp
      @clicado="finalizar"
      icone="fas fa-stop"
      texto="stop"
      :desabilitado="!cronometroRodando"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroApp from "./Cronometro.vue";
import BotaoApp from "./Botao.vue";

export default defineComponent({
  name: "TemporizadorApp",
  emits: ["aoTemporizadorFinalizado"],
  components: {
    CronometroApp,
    BotaoApp,
  },
  data() {
    return { tempoEmSegundos: 0, cronometro: 0, cronometroRodando: false };
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    finalizar() {
      this.cronometroRodando = false;
      clearInterval(this.cronometro);
      this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
});
</script>
