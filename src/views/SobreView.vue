<script setup>
import Copyright from '../components/Copyright.vue';
import Topbar from '../components/Topbar.vue';

</script>

<template>
  <Topbar />

  <main>
    <section class="introduction">
      <div class="introduction__text">
        <h1>Sobre</h1>
        <h2>Sou um desenvolvedor front-end da cidade Barra dos Coqueiros, Sergipe.</h2>
        <p>Apaixonado e atento aos detalhes, com uma forte motivação para construir aplicações web eficientes, funcionais
          e visualmante atraentes. Acredito que experiências excepcionais para o usuário são criadas combinando
          tecnologias de ponta com design intuitivo.</p>
        <p>Minha jornada como desenvolvedor tem sido impulsionada por uma curiosidade insaciável e uma busca constante por
          melhorias. Sou fascinado pelo cenário em constante evolução do desenvolvimento web e abraço cada oportunidade
          para aprender e crescer nessa área dinâmica.</p>
        <p>Colaboração e trabalho em equipe são fundamentais para a minha abordagem. Gosto de trabalhar em estreita
          colaboração com equipes multidisciplinares, incluindo designers e desenvolvedores backend, para garantir a
          implementação bem-sucedida dos projetos. Valorizo a comunicação clara, a atenção aos detalhes e um foco forte em
          cumprir os prazos do projeto.</p>
      </div>
    </section>

    <section class="skillset">
      <div class="skillset__left">
        <h1>Tecnologias</h1>
        <ul>
          <li>HTML / CSS</li>
          <li>Javascript</li>
          <li>Vue.js</li>
          <li>SASS</li>
          <li>Python</li>
        </ul>
      </div>
      <div class="skillset__right">
        <h1>Soft skills</h1>
        <ul>
          <li>Inteligência emocional</li>
          <li>Comunicação</li>
          <li>Colaboração</li>
          <li>Pensamento crítico</li>
        <li>Motivação</li>
      </ul>
      </div>
    </section>

    <!-- <section class="skills"></section>

      <section class="story"></section> -->
  </main>

  <Copyright />
</template>

<style lang="scss" scoped>
@import '../assets/scss/viewSobre.scss';
</style>