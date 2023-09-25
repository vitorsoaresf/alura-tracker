import IProjeto from "@/interfaces/IProjeto";
import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";

interface IEstado {
  projetos: IProjeto[];
}

export const key: InjectionKey<Store<IEstado>> = Symbol();

export const store = createStore<IEstado>({
  state: {
    projetos: [
      {
        id: new Date().toISOString(),
        nome: "Typescript",
      },
    ],
  },
});
