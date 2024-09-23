import { defineStore } from "pinia";
import { IProjectsSectionItems } from "../components/ProjectsSection.vue";

export const useMainStore = defineStore({
  id: "main-store",
  state: () => ({
    projectItems: [
      {
        href: "https://github.com/netosts/vue-cart",
        src: "./images/vue-cart.png",
        imgAlt: "vue-cart.png",
        name: "Vue Cart",
        info: "Carrinho de compras",
        image: {
          backgroundColor: "#fffaf5",
          imageHeight: "90%",
          imageWidth: "60%",
        },
      },
      {
        href: "https://github.com/netosts/desafio-mini-financeiro",
        src: "./images/mini-financeiro.png",
        imgAlt: "mini-financeiro.png",
        name: "Mini Financeiro",
        info: "Gerenciamento financeiro",
        image: {
          backgroundColor: "#e4edef",
        },
      },
      {
        href: "https://github.com/netosts/conforfiton-old",
        src: "./images/conforfit-on.png",
        imgAlt: "conforfit-on.png",
        name: "Conforfit On",
        info: "Web application",
        image: {
          backgroundColor: "#e4e4ef",
        },
      },
      {
        href: "https://netosts.github.io/seupomodoro",
        src: "./images/seu-pomodoro.png",
        imgAlt: "seu-pomodoro.png",
        name: "Seu Pomodoro",
        info: "Web application",
        image: {
          isRight: true,
          backgroundColor: "#ecd9d9",
        },
      },
    ] as IProjectsSectionItems[],
  }),
  getters: {},
  actions: {},
});
