<script setup>
import Topbar from "../components/Topbar.vue";
</script>

<template>
  <Topbar />

  <main>
    <section class="introduction">
      <div class="introduction__text">
        <h1>Sobre</h1>
        <h2>
          Sou um desenvolvedor Full Stack da cidade Barra dos Coqueiros,
          Sergipe.
        </h2>
        <p>
          Tenho 1 ano de experiência com desenvolvimento e tenho proficiência em
          Front end e Back end. Já trabalhei como freelancer em um projeto de
          refatoração de código onde aprendi muito sobre estrutura de código,
          código limpo, manutenção de código e padrões de código.
        </p>
        <p>
          Além disso, já trabalhei como barbeiro no passado e tive a
          oportunidade de prestar serviços públicos, ministrando cursos de
          barbearia para jovens na Comunidade de Atendimento Socioeducativo São
          Francisco de Assis (Case 1) em Aracaju, Sergipe.
        </p>
        <p>
          Sou apaixonado e atento aos detalhes, com uma forte motivação para
          construir aplicações web eficientes, funcionais e visualmante
          atraentes. Acredito que experiências excepcionais para o usuário são
          criadas combinando tecnologias de ponta com design intuitivo.
        </p>
        <!-- <p>
          Minha jornada como desenvolvedor tem sido impulsionada por uma
          curiosidade insaciável e uma busca constante por melhorias. Sou
          fascinado pelo cenário em constante evolução do desenvolvimento web e
          abraço cada oportunidade para aprender e crescer nessa área dinâmica.
        </p>
        <p>
          Colaboração e trabalho em equipe são fundamentais para a minha
          abordagem. Gosto de trabalhar em estreita colaboração com equipes
          multidisciplinares, incluindo designers e desenvolvedores backend,
          para garantir a implementação bem-sucedida dos projetos. Valorizo a
          comunicação clara, a atenção aos detalhes e um foco forte em cumprir
          os prazos do projeto.
        </p> -->
      </div>
    </section>

    <section class="skillset">
      <div class="skillset__left">
        <h1>Tecnologias</h1>
        <ul>
          <li>Vue.js</li>
          <li>PHP</li>
          <li>Typescript</li>
          <li>Python</li>
          <li>Git</li>
          <li>Docker</li>
        </ul>
      </div>
      <div class="skillset__right">
        <h1>Soft skills</h1>
        <ul>
          <li>Comunicativo</li>
          <li>Experiência em falar em público</li>
          <li>Disciplina (forte)</li>
          <li>Aprendizagem rápida</li>
          <li>Autodidata</li>
          <li>Organização</li>
        </ul>
      </div>
    </section>

    <!-- <section class="skills"></section>

                              <section class="story"></section> -->
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/mixin";

main {
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

  .skillset {
    @include screenPadding();
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include mq(l) {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    h1 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: $color-4;
    }

    li {
      font-size: 18px;
      font-weight: 400;
      line-height: 2.4rem;
      color: $color-4;
    }

    &__left {
      text-align: center;

      ul {
        list-style: none;
      }
    }

    &__right {
      text-align: center;

      ul {
        list-style: none;
      }
    }
  }
}
</style>
