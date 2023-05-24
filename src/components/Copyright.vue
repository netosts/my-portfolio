<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';


// Button show relative to scroll position
const showButton = ref(false);
window.onscroll = function () {
  const windowHeight = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  const threshold = pageHeight - windowHeight - 80;

  if (document.documentElement.scrollTop >= threshold) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
}

// Chatgpt Oraculo scrollToTop slower function
function scrollToTop(scrollTargetY, duration) {
  var startingY = window.pageYOffset;
  var diff = scrollTargetY - startingY;
  var startTime = null;

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var scrollY = easeInOutCubic(timeElapsed, startingY, diff, duration);
    window.scrollTo(0, scrollY);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
};
const scrollToTopBtn = () => {
  scrollToTop(0, 1000);
};
</script>

<template>
  <footer>
    <nav>
      <div class="footer__ownerbox">
        <RouterLink to="/" class="footer__owner">
          Silvio dos Santos Neto
        </RouterLink>
      </div>
      <div class="footer__linksbox">
        <RouterLink to="/sobre" class="footer__links">
          Sobre
        </RouterLink>
        <RouterLink to="/portfolio" class="footer__links">
          Portfolio
        </RouterLink>
        <RouterLink to="/contato" class="footer__links">
          Contato
        </RouterLink>
      </div>
    </nav>
  </footer>

  <button v-show="showButton" class="btn" @click="scrollToTopBtn">
    <img src="../assets/images/up-chevron.png" alt="chevron-up icon">
  </button>
</template>

<style lang="scss" scoped>
@import '../assets/scss/copyright.scss';
</style>