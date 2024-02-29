<script lang="ts" setup>
import ProjectsSection from "../components/ProjectsSection.vue";
import Topbar from "../components/Topbar.vue";
import { useMainStore } from "../stores/main.store";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { projectItems } = storeToRefs(mainStore);
</script>

<template>
  <Topbar />

  <main>
    <section class="introduction">
      <div class="introduction__text">
        <h1>Portfolio</h1>
        <h2>Dê uma olhada em alguns de meus projetos.</h2>
        <p>
          Esses projetos representam minha experiência como desenvolvedor. Cada
          um deles foi um desafio único que abracei com entusiasmo.
        </p>
      </div>
    </section>
    <ProjectsSection title="Meus Projetos" :items="projectItems" />
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/mixin";

.introduction {
  @include screenPadding();
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0 0 0 / 0.14);

  &__text {
    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
      font-size: 5rem;
      font-weight: 900;
      color: $color-4;

      @include mq(m) {
        font-size: 4rem;
      }

      @include mq(s) {
        font-size: 3.5rem;
      }
    }

    h2 {
      max-width: 625px;
      font-size: 26px;
      font-weight: 400;
      color: $color-3;

      @include mq(m) {
        font-size: 22px;
      }
    }

    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 2rem;
      color: $color-4;

      @include mq(m) {
        font-size: 17px;
      }
    }
  }
}
</style>
