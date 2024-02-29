import { defineStore } from "pinia";
import { IProjectsSectionItems } from "../components/ProjectsSection.vue";

export const useMainStore = defineStore({
  id: "main-store",
  state: () => ({
    projectItems: [
      {
        href: "https://hml.conforfiton.com.br/login/demo",
        src: "/images/conforfit-on.png",
        imgAlt: "conforfit-on.png",
        name: "Conforfit On",
        info: "Web application",
        image: {
          backgroundColor: "#e4e4ef",
        },
      },
      {
        href: "https://github.com/netosts/desafio-mini-financeiro",
        src: "/images/mini-financeiro.png",
        imgAlt: "mini-financeiro.png",
        name: "Mini Financeiro",
        info: "PWA",
        image: {
          backgroundColor: "#e4edef",
        },
      },
      {
        href: "http://seupomodoro.netosts.com",
        src: "/images/seu-pomodoro.png",
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
