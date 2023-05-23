<script setup>
</script>

<template>
  <main>
    <section class="profile">
      <div class="profilebox">
        <div class="profile__greetings">
          <h1 class="profile--large">Olá!</h1>
          <h1 class="profile--medium">Eu sou Neto!</h1>
        </div>
        <div class="profile__pic">
          <img src="../assets/images/profile-pic.png" alt="">
        </div>
        <div class="profile__info">
          <h2>{Coder}</h2>
          <p>Atuando como desenvolvedor Front end</p>
        </div>
      </div>
    </section>
    <section class="projects"></section>
  </main>
</template>

<style lang="scss">
@import '../assets/scss/homeview.scss';
</style>