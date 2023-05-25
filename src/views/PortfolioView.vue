<script setup>
import Copyright from '../components/Copyright.vue';
import Topbar from '../components/Topbar.vue';

</script>

<template>
  <Topbar />

  <main>
    <section class="introduction">
      <div class="introduction__text">
        <h1>Portfolio</h1>
        <h2>Dê uma olhada em algumas de minha aplicações web.</h2>
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
          <a class="projects__content01" href="https://netosts.com/desafio-android-guanabara/" target="_blank"
            rel="noopener">
            <div class="projects__image">
              <img src="../assets/images/desafio-android.png" alt="desafio android">
            </div>
            <div class="projects__info">
              <h4 class="projects--name">Desafio Android</h4>
              <p class="projects--info">Website</p>
            </div>
          </a>
          <a class="projects__content02" href="https://netosts.com/formulario-de-contato/" target="_blank" rel="noopener">
            <div class="projects__image">
              <img src="../assets/images/formulario-de-contato.png" alt="formulario de contato">
            </div>
            <div class="projects__info">
              <h4 class="projects--name">Formulario de Contato</h4>
              <p class="projects--info">Website</p>
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

  <Copyright />
</template>

<style lang="scss" scoped>
@import '../assets/scss/viewPortfolio.scss';
</style>