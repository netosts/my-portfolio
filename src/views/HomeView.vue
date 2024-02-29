<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Topbar from "../components/Topbar.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import { useMainStore } from "../stores/main.store";
import { storeToRefs } from "pinia";

// Profile Pic Hover
const profilePic = ref();

const mainStore = useMainStore();
const { projectItems } = storeToRefs(mainStore);

// Listen to Topbar.vue component
const topbarMobileMenu = ref();
const handleMobileMenu = (emittedValue) => {
  return (topbarMobileMenu.value = emittedValue);
};

function hoverOn() {
  if (topbarMobileMenu.value.getAttribute("id") !== "menu--active") {
    profilePic.value.classList.add("hovered");
  } else {
    return;
  }
}
function hoverOff() {
  profilePic.value.classList.remove("hovered");
}

onMounted(() => {
  profilePic.value.addEventListener("mouseover", hoverOn);
  profilePic.value.addEventListener("mouseout", hoverOff);
});
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
            <img
              ref="profilePic"
              src="../assets/images/profile-pic.png"
              alt="profile picture"
            />
          </RouterLink>
        </div>
        <div class="profile__info">
          <h2>&lt;/&gt;</h2>
          <p>Desenvolvedor Full Stack</p>
          <p>Vue.js | PHP | Laravel</p>
        </div>
      </div>
    </section>
    <ProjectsSection
      title="Principais Projetos"
      :items="projectItems.slice(0, 2)"
    />
  </main>
</template>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixin";

main {
  position: relative;
  z-index: 1;
  box-shadow: 0px 1px 4px rgba(0 0 0 / 0.14);

  .profile {
    display: flex;
    justify-content: space-evenly;
    height: 550px;
    width: 100%;
    margin: auto;
    background-color: white;
    box-shadow: 0px 1px 4px rgba(0 0 0 / 0.14);

    .profilebox {
      display: flex;
      align-items: center;

      @include mq(l) {
        flex-direction: column;
        justify-content: center;
        gap: 30px;
      }

      .profile__greetings {
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-align: center;
        @include profileWidth();
        margin-right: -20px;

        @include mq(l) {
          margin: 0;
        }

        .profile--large {
          font-size: 2.5em;
          font-weight: 900;
          color: $color-5;
        }

        .profile--medium {
          font-size: 2em;
          font-weight: 600;
          color: $color-5;
        }
      }

      .profile__pic {
        text-align: center;
        width: 300px;
        margin: 0 20px;

        .hovered {
          transform: scale(1.06);
        }

        img {
          width: 280px;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }
      }

      .profile__info {
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-align: center;
        @include profileWidth();

        h2 {
          font-size: 1.8em;
          font-weight: 900;
          text-transform: lowercase;
          color: $color-5;
        }

        p {
          color: $color-3;
          font-size: 1.2em;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
