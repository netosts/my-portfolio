<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const navbar = ref(null)
const mobileMenu = ref(null)

// Mobile menu click
const toggleNavbar = () => {
  if (navbar.value.classList.contains('header--visible')) {
    navbar.value.classList.replace('header--visible', 'header--invisible')
    mobileMenu.value.removeAttribute('id')
  } else {
    navbar.value.classList.replace('header--invisible', 'header--visible')
    mobileMenu.value.setAttribute('id', 'menuActive')
  }
}

// Active top bar nav
const isActive = (route) => {
  const currentRoute = useRoute();
  return currentRoute.path === route;
}
</script>

<template>
  <header>
    <nav>
      <div class="header__logo">
        <RouterLink to="/">
          <img src="../assets/images/neto-logo-2-full.svg" alt="Neto logo">
        </RouterLink>
      </div>

      <div class="mobile-menu menu--active" ref="mobileMenu" @click="toggleNavbar">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>

      <div id="navbar" ref="navbar" class="header--visible">
        <div class="header__navbar">
          <RouterLink to="/sobre" :id="isActive('/sobre') ? 'navActive' : null" class="navbar__links">
            Sobre
          </RouterLink>
          <RouterLink to="/portfolio" :id="isActive('/portfolio') ? 'navActive' : null" class="navbar__links">
            Portfolio
          </RouterLink>
          <RouterLink to="/contato" :id="isActive('/contato') ? 'navActive' : null" class="navbar__links">
            Contato
          </RouterLink>
        </div>
        <div class="header__links">
          <a href="https://www.linkedin.com/in/silvio-dos-santos-neto-24a910259/" target="_blank" rel="noopener"
            class="links__link">
            <img src="../assets/images/linkedin-logo.png" alt="linkedin logo">
          </a>
          <a href="https://github.com/netosts" target="_blank" rel="noopener" class="links__link">
            <img src="../assets/images/github-logo.png" alt="github logo">
          </a>
          <a href="https://www.instagram.com/netosantos.of/" target="_blank" rel="noopener" class="links__link">
            <img src="../assets/images/instagram-logo.png" alt="instagram logo">
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/scss/homeheader.scss';
</style>