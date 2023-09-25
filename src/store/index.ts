import IProjeto from "@/interfaces/IProjeto";
import { createStore, Store, useStore as ViexUseStore } from "vuex";
import { InjectionKey } from "vue";

interface IEstado {
  projetos: IProjeto[];
}

export const key: InjectionKey<Store<IEstado>> = Symbol();

export const store = createStore<IEstado>({
  state: {
    projetos: [],
  },
  mutations: {
    ADICIONA_PROJETO(state, nomeDoProjeto: string) {
      const projeto: IProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      };

      state.projetos.push(projeto);
    },
  },
});

export function useStore(): Store<IEstado> {
  return ViexUseStore(key);
}
