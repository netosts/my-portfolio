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
function scrollToTopBtn() {
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
@import "../assets/scss/variables";
@import "../assets/scss/mixin";

.btn {
  position: fixed;
  width: 130px;
  height: 140px;
  bottom: -75px;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  background-color: transparent;
  border-radius: 100% 100% 0 0;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transform: translateX(-50%) translateY(-8px);
  }

  img {
    width: 50px;
    transform: translateY(-40px);
  }
}

#btn--active {
  display: block;
}

footer {
  display: block;
  bottom: 0;
  height: 100px;
  background: $color-2;

  nav {
    display: flex;
    justify-content: space-between;
    padding: 40px;

    .footer__linksbox {
      display: flex;
      gap: 20px;

      @include mq(m) {
        display: none;
      }
    }

    .footer__owner {
      @include footerStyle();

      @include mq(m) {
        font-size: 13px;
        margin-left: -20px;
      }
    }

    .footer__links {
      @include footerStyle();
      text-transform: lowercase;
    }
  }
}
</style>