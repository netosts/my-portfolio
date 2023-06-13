<script setup>
import { ref, onMounted } from 'vue';
import Topbar from '../components/Topbar.vue';


// Profile Pic Hover
const profilePic = ref(null);
function hoverOn() {
  if (topbarMobileMenu.value.getAttribute('id') !== 'menu--active') {
    profilePic.value.classList.add('hovered');
  } else {
    return;
  }
}
function hoverOff() {
  profilePic.value.classList.remove('hovered');
}
onMounted(() => {
  profilePic.value.addEventListener('mouseover', hoverOn);
  profilePic.value.addEventListener('mouseout', hoverOff);
})

// Listen to Topbar.vue component
const topbarMobileMenu = ref(null);
const handleMobileMenu = (emittedValue) => {
  return topbarMobileMenu.value = emittedValue;
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
        <h3 class="projects__title">Principais projetos</h3>
        <div class="projects--title"></div>
      </div>
      <div class="projectsbox">
        <div class="projects__section">
          <a class="projects__content01" href="https://seupomodoro.netosts.com/" target="_blank" rel="noopener">
            <div class="projects__image">
              <img src="../assets/images/seu-pomodoro.png" alt="seu pomodoro">
            </div>
            <div class="projects__info">
              <h4 class="projects--name">Seu Pomodoro</h4>
              <p class="projects--info">Web application</p>
            </div>
          </a>
          <a class="projects__content02" href="http://ag2.netosts.com/" target="_blank" rel="noopener">
            <div class="projects__image">
              <img src="../assets/images/ag2.png" alt="ag2">
            </div>
            <div class="projects__info">
              <h4 class="projects--name">Addison Global 2</h4>
              <p class="projects--info">Challenge</p>
            </div>
          </a>
        </div>
      </div>
    </section>
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

  .projects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 40px 0;

    .projects__titlebox {
      display: flex;
      align-items: center;
      width: 90%;

      .projects__title {
        min-width: 350px;
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: $color-3;
      }

      .projects--title {
        background: rgba(0, 0, 0, 0.121);
        height: 0.5px;
        width: 100%;
      }
    }

    .projectsbox {
      .projects__section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        margin-top: 40px;

        @include mq(m) {
          grid-template-columns: 1fr;
          justify-items: center;
        }

        .projects__content01 {
          @include projectBox();

          .projects__image {
            @include imageBox(#ecd9d9);
            display: flex;
            align-items: center;
            justify-content: flex-end;

            img {
              @include imgInsideRight(75%, 80%);
            }
          }
        }

        .projects__content02 {
          @include projectBox();

          .projects__image {
            @include imageBox($color-2);
            display: flex;
            align-items: flex-end;
            justify-content: center;

            img {
              @include imgInsideBottom(35%, 90%);
            }
          }
        }

        .projects__info {
          @include infoBox();

          .projects--name {
            font-weight: 600;
            color: $color-5;
          }

          .projects--info {
            font-weight: 300;
            color: $color-3;
          }
        }
      }
    }
  }
}

.projects--soon {
  font-size: 20px;
  font-weight: 300;
  color: $color-3;
}
</style>