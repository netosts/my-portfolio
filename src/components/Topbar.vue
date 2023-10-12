<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

// Get the DOM elements
const mobileMenu = ref("menu--active");
const navbar = ref("header--visible");
const mobileMenuRef = ref(null);
// Define the emit
const emit = defineEmits(["mobileMenuRef"]);

// Mobile menu click
function toggleNavbar() {
  if (navbar.value === "header--visible") {
    navbar.value = "header--invisible";
    mobileMenu.value = "";
  } else {
    navbar.value = "header--visible";
    mobileMenu.value = "menu--active";
  }
}

// Window resize top bar fix
function windowResizeNavbar() {
  if (window.innerWidth <= 768) {
    navbar.value = "header--invisible";
    mobileMenu.value = "";
  } else {
    navbar.value = "header--visible";
    mobileMenu.value = "";
  }
}
onMounted(() => {
  window.addEventListener("resize", windowResizeNavbar);
  windowResizeNavbar();
  // Send emit
  emit("mobileMenuRef", mobileMenuRef.value);
});
onUnmounted(() => {
  window.removeEventListener("resize", windowResizeNavbar);
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
        <RouterLink to="/" :id="isActive('/') ? 'logo--active' : null">
          <font-awesome-icon
            icon="fa-solid fa-chevron-left"
            style="color: #ffffff"
            size="2xl"
          />
        </RouterLink>
      </div>

      <div
        ref="mobileMenuRef"
        class="mobile-menu"
        :id="mobileMenu"
        @click="toggleNavbar"
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>

      <div id="navbar" :class="navbar">
        <div class="header__navbar">
          <RouterLink
            to="/sobre"
            :id="isActive('/sobre') ? 'nav--active' : null"
            class="navbar__links"
          >
            Sobre
          </RouterLink>
          <RouterLink
            to="/portfolio"
            :id="isActive('/portfolio') ? 'nav--active' : null"
            class="navbar__links"
          >
            Portfolio
          </RouterLink>
          <RouterLink
            to="/contato"
            :id="isActive('/contato') ? 'nav--active' : null"
            class="navbar__links"
          >
            Contato
          </RouterLink>
        </div>
        <div class="header__external">
          <a
            href="/CV - 12.10.2023.pdf"
            download="CV - Silvio dos Santos Neto 12-10-2023"
            id="cv-icon"
            class="external__links"
          >
            <font-awesome-icon
              id="cv-icon"
              icon="fa-solid fa-file-lines"
              style="color: #ffffff"
              size="2xl"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/silvio-dos-santos-neto-24a910259/"
            target="_blank"
            rel="noopener"
            class="external__links"
          >
            <img src="../assets/images/linkedin-logo.png" alt="linkedin logo" />
          </a>
          <a
            href="https://github.com/netosts"
            target="_blank"
            rel="noopener"
            class="external__links"
          >
            <img src="../assets/images/github-logo.png" alt="github logo" />
          </a>
          <a
            href="https://www.instagram.com/netosantos.of/"
            target="_blank"
            rel="noopener"
            class="external__links"
          >
            <img
              src="../assets/images/instagram-logo.png"
              alt="instagram logo"
            />
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/mixin";
@import "../assets/scss/animations";

header {
  background-color: $color-7;
  height: 80px;
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    right: 0;
    padding: 0 40px;

    @include mq(m) {
      padding: 0 30px;
      position: relative;
    }

    .header__logo {
      position: absolute;
      top: 25px;
      left: 35px;
      transition: 0.35s;

      &:hover {
        left: 32px;
        filter: brightness(0.6);
      }
    }

    .mobile-menu {
      display: none;

      div {
        width: 32px;
        height: 2px;
        margin: 8px;
        background: white;
      }

      @include mq(m) {
        display: block;
        position: absolute;
        top: 22px;
        right: 30px;
      }
    }

    #navbar {
      align-items: center;

      @include mq(m) {
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        z-index: 999;
        background-color: $color-6;
        transform: translateY(-10px);
        animation-name: slide;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;

        .header__navbar {
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 40px;

          a {
            width: 100%;
            text-align: center;
            font-size: 24px;
            font-weight: 300;
            padding: 18px 0;
            border-bottom: 1px solid $color-5;
          }
        }

        .header__external {
          height: 40px;
          margin: 16px 0;
          gap: 30px;
        }
      }
    }

    .header__navbar {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      margin-left: 40px;
      margin-right: 40px;

      .navbar__links {
        text-decoration: none;
        text-transform: lowercase;
        color: white;
        padding: 32px 25px;
        transition: 0.35s;

        &:hover {
          color: $color-3;
        }
      }
    }

    .header__external {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;

      .external__links {
        display: flex;

        img {
          @include linksSize(30px);
          transition: 0.35s;

          &:hover {
            @include imgHover;
          }
        }
      }

      #cv-icon {
        margin-bottom: -2px;
        margin-right: 4px;
        transition: 0.35s;

        &:hover {
          filter: brightness(0.6);
          transform: translate(1px, -1.5px) rotate(5deg);
        }

        @include mq(m) {
          margin: 0;
        }
      }
    }
  }
}

.header--invisible {
  display: none;
}

.header--visible {
  display: flex;
  flex: 1;
}

#menu--active {
  div {
    background: $color-3;
  }
}

#logo--active {
  display: none;
}

#nav--active {
  color: $color-3;
}
</style>
