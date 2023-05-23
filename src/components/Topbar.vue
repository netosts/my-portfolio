<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';


// Get the DOM elements
const mobileMenu = ref('menu--active');
const navbar = ref('header--visible');
const mobileMenuRef = ref(null);
// Define the emit
const emit = defineEmits(['mobileMenuRef']);

// Mobile menu click
const toggleNavbar = () => {
  if (navbar.value === 'header--visible') {
    navbar.value = 'header--invisible';
    mobileMenu.value = '';
  } else {
    navbar.value = 'header--visible';
    mobileMenu.value = 'menu--active';
  }
};

// Window resize top bar fix
const windowResizeNavbar = () => {
  if (window.innerWidth <= 700) {
    navbar.value = 'header--invisible';
    mobileMenu.value = '';
  } else {
    navbar.value = 'header--visible';
  }
};
onMounted(() => {
  window.addEventListener('resize', windowResizeNavbar);
  windowResizeNavbar();
  // Send emit
  emit('mobileMenuRef', mobileMenuRef.value);
});
onUnmounted(() => {
  window.removeEventListener('resize', windowResizeNavbar);
});

// Active top bar nav
const isActive = (route) => {
  const currentRoute = useRoute();
  return currentRoute.path === route;
};
</script>

<template>
  <header>
    <nav>
      <div class="header__logo">
        <a href="#">
          <img src="../assets/images/cv-icon.png" alt="curriculum vitae icon">
        </a>
      </div>

      <div ref="mobileMenuRef" class="mobile-menu menu--active" :id="mobileMenu" @click="toggleNavbar">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>

      <div id="navbar" :class="navbar">
        <div class="header__navbar">
          <RouterLink to="/sobre" :id="isActive('/sobre') ? 'nav--active' : null" class="navbar__links">
            Sobre
          </RouterLink>
          <RouterLink to="/portfolio" :id="isActive('/portfolio') ? 'nav--active' : null" class="navbar__links">
            Portfolio
          </RouterLink>
          <RouterLink to="/contato" :id="isActive('/contato') ? 'nav--active' : null" class="navbar__links">
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
@import '../assets/scss/topbar.scss';
</style>