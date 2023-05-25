<script setup>
import Copyright from '../components/Copyright.vue';
import Topbar from '../components/Topbar.vue';
import emailjs from '@emailjs/browser';
import { ref } from 'vue';


// Get the elements
const user_name = ref('');
const user_email = ref('');
const user_message = ref('');
const submitSuccess = ref(null);
const submitInvalid = ref(null);
const input_name = ref('input--null');
const input_email = ref('input--null');
const input_message = ref('input--null');

// Send email function
const sendEmail = (e) => {
  submitSuccess.value = null;
  submitInvalid.value = null;
  if (user_name.value !== '' && user_email.value !== '' && user_message.value !== '') {
    emailjs.sendForm('service_nt0l1eo', 'template_q09xbp6', e.target, 't5NRgq7b7C4g2dIYt')
      .then((result) => {
        console.log('SUCCESS!', result.text);
        submitSuccess.value = true;
      }).catch((error) => {
        console.log('FAILED...', error.text);
      })
    // Clear input fields
    user_name.value = '';
    user_email.value = '';
    user_message.value = '';
    // Clear error message
    input_name.value = 'input--null';
    input_email.value = 'input--null';
    input_message.value = 'input--null';
    return;
  }
  // Error message
  input_name.value = 'input--error';
  input_email.value = 'input--error';
  input_message.value = 'input--error';
  submitInvalid.value = true;
};

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
              <input type="text" name="name" :class="input_name" v-model="user_name" placeholder="Digite seu nome">
            </div>
            <div class="user__inputs">
              <label>Email</label>
              <input type="email" name="email" :class="input_email" v-model="user_email" placeholder="Digite seu email">
            </div>
          </div>
          <div class="input__textarea">
            <label>Mensagem</label>
            <textarea name="message" :class="input_message" v-model="user_message" cols="40" rows="8" minlength="20"
              placeholder="Digite a mensagem"></textarea>
          </div>
        </div>
        <div class="email__submit">
          <input type="submit" value="Send email">
        </div>
        <div class="email__success" v-show="submitSuccess">
          <p>Sua mensagem foi enviada com sucesso. Obrigado.</p>
        </div>
        <div class="email__error" v-show="submitInvalid">
          <p>Validação incorreta. Por favor, preencha os espaços corretamente.</p>
        </div>
      </form>
    </section>
  </main>

  <Copyright />
</template>

<style lang="scss" scoped>
@import '../assets/scss/viewContato.scss';
</style>