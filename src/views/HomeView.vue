<script setup>
import { ref, onMounted } from 'vue';
import Topbar from '../components/Topbar.vue';


// Profile Pic Hover
const profilePic = ref(null);
const hoverOn = () => {
  if (topbarMobileMenu.value.getAttribute('id') !== 'menu--active') {
    profilePic.value.classList.add('hovered');
  } else {
    return;
  }
}
const hoverOff = () => {
  profilePic.value.classList.remove('hovered');
}
onMounted(() => {
  profilePic.value.addEventListener('mouseover', hoverOn);
  profilePic.value.addEventListener('mouseout', hoverOff);
})

// Listen to topbar.vue component
const topbarMobileMenu = ref(null);
const handleMobileMenu = (emittedValue) => {
  topbarMobileMenu.value = emittedValue;
};
</script>

<template>
  <Topbar @mobileMenuRef="handleMobileMenu" />

  <main>
    <section class="profile">
      <div class="profilebox">
        <div class="profile__greetings">
          <h1 class="profile--large">Olá!</h1>
          <h1 class="profile--medium">Eu sou Neto!</h1>
        </div>
        <div class="profile__pic">
          <RouterLink to="/portfolio">
            <img ref="profilePic" src="../assets/images/profile-pic.png" alt="profile picture">
          </RouterLink>
        </div>
        <div class="profile__info">
          <h2>{...}</h2>
          <p>Desenvolvedor Front-end Vue.js | Freelancing</p>
        </div>
      </div>
    </section>
    <section class="projects">
      <div class="projects__titlebox">
        <div class="projects--title"></div>
        <h3 class="projects__title">Alguns de meus projetos</h3>
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
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '../assets/scss/homeview.scss';
</style>