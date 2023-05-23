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
          <h2>{Coder}</h2>
          <p>Vue.js | Desenvolvedor Front end</p>
        </div>
      </div>
    </section>
    <section class="projects"></section>
  </main>
</template>

<style lang="scss">
@import '../assets/scss/homeview.scss';
</style>