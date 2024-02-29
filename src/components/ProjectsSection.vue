<template>
  <section class="projects">
    <div class="projects__titlebox">
      <div class="projects--title"></div>
      <h3 class="projects__title">{{ props.title ?? "Projetos" }}</h3>
      <div class="projects--title"></div>
    </div>
    <div class="projectsbox">
      <div class="projects__section">
        <a
          v-for="(item, id) in items"
          :key="id"
          class="projects__content"
          :href="item.href"
          target="_blank"
          rel="noopener"
        >
          <div
            class="projects__image"
            :class="
              item.image?.isRight ? 'image-inside-right' : 'image-inside-bottom'
            "
            :style="{
              backgroundColor: item.image?.backgroundColor ?? undefined,
            }"
          >
            <img
              :src="item.src"
              :alt="item.imgAlt ?? undefined"
              :style="{
                height: item.image?.imageHeight ?? undefined,
                width: item.image?.imageWidth ?? undefined,
              }"
            />
          </div>
          <div class="projects__info">
            <h4 class="projects--name">{{ item.name }}</h4>
            <p class="projects--info">{{ item.info }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  items: IProjectsSectionItems[];
}

export interface IProjectsSectionItems {
  href: string;
  src: string;
  imgAlt: string;
  name: string;
  info: string;
  image?: {
    isRight?: boolean;
    backgroundColor?: string;
    imageHeight?: string;
    imageWidth?: string;
  };
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/mixin";

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

      .projects__content {
        @include projectBox();

        .projects__image {
          @include imageBox($color-2);
        }

        .image-inside-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          img {
            @include imgInsideBottom(65%, 90%);
          }
        }
        .image-inside-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          img {
            @include imgInsideRight(75%, 80%);
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
</style>
