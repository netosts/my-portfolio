<script setup>
import Copyright from '../components/Copyright.vue';
import Topbar from '../components/Topbar.vue';
import emailjs from '@emailjs/browser';


const sendEmail = (e) => {
  emailjs.sendForm('service_nt0l1eo', 'template_q09xbp6', e.target, 't5NRgq7b7C4g2dIYt')
    .then((result) => {
      console.log('SUCCESS!', result.text);
    }).catch((error) => {
      console.log('FAILED...', error.text);
    })

  // Reset form fields
  name.value = '';
  email.value = '';
  message.value = '';
}
</script>

<template>
  <Topbar />

  <main>
    <section class="introduction">
      <div class="introduction__text">
        <h1>Contato</h1>
        <h2>Fale comigo por email ou mídia social.</h2>
        <div class="introduction__content">
          <a href="https://www.linkedin.com/in/silvio-dos-santos-neto-24a910259/" target="_blank" rel="noopener"
            class="introduction__links">
            <img src="../assets/images/Linkedin_circle.svg" alt="lindekin logo colorido">
            <p class="introduction--linkedin">Linkedin</p>
          </a>
          <a href="https://www.instagram.com/netosantos.of/" target="_blank" rel="noopener" class="introduction__links">
            <img src="../assets/images/instagram-logo-colored.svg" alt="instagram logo colorido">
            <p class="introduction--instagram">Instagram</p>
          </a>
        </div>
      </div>
    </section>

    <section class="email__section">
      <form @submit.prevent="sendEmail" class="emailbox">
        <div class="email__title">
          <h1>Envie um email</h1>
        </div>
        <div class="email__inputs">
          <div class="input__user">
            <div class="user__inputs">
              <label>Nome</label>
              <input type="text" name="name" placeholder="Digite seu nome" required>
            </div>
            <div class="user__inputs">
              <label>Email</label>
              <input type="email" name="email" placeholder="Digite seu email" required>
            </div>
          </div>
          <div class="input__textarea">
            <label>Mensagem</label>
            <textarea name="message" cols="40" rows="8" placeholder="A mensagem vai aqui!" required></textarea>
          </div>
        </div>
        <div class="email__submit">
          <input type="submit" value="Send email">
        </div>
      </form>
    </section>
  </main>

  <Copyright />
</template>

<style lang="scss" scoped>
@import '../assets/scss/viewContato.scss';
</style>