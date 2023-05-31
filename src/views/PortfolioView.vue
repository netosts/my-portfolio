<script setup>
import Topbar from '../components/Topbar.vue';

</script>

<template>
  <Topbar />

  <main>
    <section class="introduction">
      <div class="introduction__text">
        <h1>Portfolio</h1>
        <h2>Dê uma olhada em algumas de minhas aplicações web.</h2>
        <p>Esses projetos representam minha experiência como desenvolvedor. Cada um deles foi um desafio único que
          abracei com entusiasmo.</p>
      </div>
    </section>
    <section class="projects">
      <div class="projects__titlebox">
        <div class="projects--title"></div>
        <h3 class="projects__title">Meus projetos</h3>
        <div class="projects--title"></div>
      </div>
      <div class="projectsbox">
        <div class="projects__section">
          <a class="projects__content01" href="https://seupomodoro.netosts.com/" target="_blank" rel="noopener">
            <div class="projects__image">
              <img src="../assets/images/seu-pomodoro.png" alt="seu pomodoro">
            </div>
            <div class="projects__info">
              <h4 class="projects--name">Seu Pomodoro</h4>
              <p class="projects--info">Website</p>
            </div>
          </a>
          <a class="projects__content02" target="_blank" rel="noopener">
            <div class="projects__image">
              <!-- <img src="../assets/images/formulario-de-contato.png" alt="formulario de contato"> -->
            </div>
            <div class="projects__info">
              <h4 class="projects--name"><span class="projects--soon">Em breve...</span></h4>
              <p class="projects--info"></p>
            </div>
          </a>
          <a class="projects__content03" target="_blank" rel="noopener">
            <div class="projects__image">
              <!-- <img src="../assets/images/formulario-de-contato.png" alt="formulario de contato"> -->
            </div>
            <div class="projects__info">
              <h4 class="projects--name"><span class="projects--soon">Em breve...</span></h4>
              <p class="projects--info"></p>
            </div>
          </a>
          <a class="projects__content04" target="_blank" rel="noopener">
            <div class="projects__image">
              <!-- <img src="../assets/images/formulario-de-contato.png" alt="formulario de contato"> -->
            </div>
            <div class="projects__info">
              <h4 class="projects--name"><span class="projects--soon">Em breve...</span></h4>
              <p class="projects--info"></p>
            </div>
          </a>
        </div>
      </div>
    </section>
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

.projects__content03 {
  @include projectBox();

  .projects__image {
    @include imageBox($color-2);
    display: flex;
    align-items: flex-end;
    justify-content: center;

    img {
      @include imgInsideBottom(65%, 90%);
    }
  }
}

.projects__content04 {
  @include projectBox();

  .projects__image {
    @include imageBox($color-2);
    display: flex;
    align-items: flex-end;
    justify-content: center;

    img {
      @include imgInsideBottom(65%, 90%);
    }
  }
}
</style>