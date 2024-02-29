<script setup>
import Topbar from "../components/Topbar.vue";
import emailjs from "@emailjs/browser";
import { ref } from "vue";

// Get the elements
const user_name = ref("");
const user_email = ref("");
const user_message = ref("");
const submitSuccess = ref(null);
const submitInvalid = ref(null);
const input_name = ref("input--null");
const input_email = ref("input--null");
const input_message = ref("input--null");
const loadingShow = ref(null);

// Send email function
async function sendEmail(event) {
  submitSuccess.value = null;
  submitInvalid.value = null;
  loadingShow.value = true;
  if (
    user_name.value !== "" &&
    user_email.value !== "" &&
    user_message.value !== ""
  ) {
    emailjs
      .sendForm(
        "service_4kqzbeu",
        "template_w9drg7u",
        event.target,
        "eqflrCbK4a8dvrZT7"
      )
      .then((result) => {
        loadingShow.value = false;
        console.log("SUCCESS!", result.text);
        // Clear input fields
        user_name.value = "";
        user_email.value = "";
        user_message.value = "";
        // Clear error message
        input_name.value = "input--null";
        input_email.value = "input--null";
        input_message.value = "input--null";
        submitSuccess.value = true;
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
    return;
  }
  await delay(2000);
  loadingShow.value = false;
  // Error message
  input_name.value = "input--error";
  input_email.value = "input--error";
  input_message.value = "input--error";
  submitInvalid.value = true;
}

// Function for delaying an execution
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
// await delay(3000); // Wait for 3 seconds // Need async function to work
</script>

<template>
  <Topbar />

  <main>
    <section class="introduction">
      <div class="introduction__text">
        <h1>Contato</h1>
        <h2>Fale comigo por email ou mídia social.</h2>
        <div class="introduction__content">
          <a
            href="https://www.linkedin.com/in/silvio-dos-santos-neto-24a910259/"
            target="_blank"
            rel="noopener"
            class="introduction__links"
          >
            <img
              src="../assets/images/Linkedin_circle.svg"
              alt="lindekin logo colorido"
            />
            <p class="introduction--linkedin">Linkedin</p>
          </a>
          <a
            href="https://www.instagram.com/netosantos.of/"
            target="_blank"
            rel="noopener"
            class="introduction__links"
          >
            <img
              src="../assets/images/instagram-logo-colored.svg"
              alt="instagram logo colorido"
            />
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
              <input
                type="text"
                name="name"
                :class="input_name"
                v-model="user_name"
                placeholder="Digite seu nome"
              />
            </div>
            <div class="user__inputs">
              <label>Email</label>
              <input
                type="email"
                name="email"
                :class="input_email"
                v-model="user_email"
                placeholder="Digite seu email"
              />
            </div>
          </div>
          <div class="input__textarea">
            <label>Mensagem</label>
            <textarea
              name="message"
              :class="input_message"
              v-model="user_message"
              cols="40"
              rows="8"
              minlength="20"
              placeholder="Digite a mensagem"
            ></textarea>
          </div>
        </div>
        <div class="email__submit">
          <input type="submit" value="Send email" />
          <img
            src="../assets/images/loading-gif.gif"
            alt="loading gif"
            class="email__submit--loading"
            v-show="loadingShow"
          />
        </div>
        <div class="email__success" v-show="submitSuccess">
          <p>Sua mensagem foi enviada com sucesso. Obrigado.</p>
        </div>
        <div class="email__error" v-show="submitInvalid">
          <p>
            Validação incorreta. Por favor, preencha os espaços corretamente.
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/mixin";

.introduction {
  @include screenPadding();
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0 0 0 / 0.14);

  .introduction__text {
    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
      font-size: 5rem;
      font-weight: 900;
      color: $color-4;

      @include mq(m) {
        font-size: 4rem;
      }

      @include mq(s) {
        font-size: 3.5rem;
      }
    }

    h2 {
      max-width: 625px;
      font-size: 26px;
      font-weight: 400;
      color: $color-3;

      @include mq(m) {
        font-size: 22px;
      }

      @include mq(s) {
        font-size: 18px;
      }
    }

    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 2rem;
      color: $color-4;

      @include mq(m) {
        font-size: 17px;
      }
    }

    .introduction__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 400px;

      .introduction__links {
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: 0.35s;

        &:hover {
          opacity: 0.7;
        }

        img {
          width: 50px;
        }

        p {
          font-size: 14px;
          font-weight: 600;
          padding: 10px;
        }

        .introduction--linkedin {
          color: #1686b0;
        }

        .introduction--instagram {
          color: #ca284a;
        }
      }
    }
  }
}

.emailbox {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  padding: 100px 0 100px 300px;
  gap: 20px;

  @include mq(xxl) {
    max-width: 800px;
    padding: 100px 0 100px 200px;
  }

  @include mq(xl) {
    max-width: 750px;
    padding: 100px 0 100px 150px;
  }

  @include mq(l) {
    max-width: 700px;
    padding: 100px 0 100px 80px;
  }

  @include mq(m) {
    padding: 50px 50px 50px 50px;
  }

  @include mq(s) {
    padding: 50px 20px;
  }

  .email__title {
    h1 {
      font-size: 2rem;
      font-weight: 300;
    }
  }

  .email__inputs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    .input__user {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .user__inputs {
        @include userInputs();

        input {
          height: 45px;
          @include inputArea();
          font-size: 18px;
          color: $color-4;
        }
      }
    }

    .input__textarea {
      @include userInputs();

      textarea {
        @include inputArea();
        resize: none;
        height: 135px;
        transition: 0.35s;
        font-size: 18px;
        color: $color-4;
      }
    }
  }

  .email__submit {
    display: flex;
    align-items: center;
    gap: 20px;

    .email__submit--loading {
      width: 30px;
      height: 30px;
    }
  }

  input[type="submit"] {
    width: 135px;
    padding: 15px;
    background-color: $color-4;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    &:active {
      opacity: 1;
      filter: brightness(0.5);
    }
  }

  .email__success {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border: 1px solid rgb(160, 205, 119);
    border-radius: 3px;
    background-color: rgb(238, 254, 227);
    color: rgb(8, 97, 0);

    p {
      text-align: center;
      padding: 18px;
    }
  }

  .email__error {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border: 1px solid rgb(223, 154, 154);
    border-radius: 3px;
    background-color: rgb(250, 238, 238);
    color: rgb(154, 0, 0);

    p {
      text-align: center;
      padding: 18px;
    }
  }
}

.input--null {
  border: 1px solid rgba(0 0 0 / 0.2);
  box-shadow: inset 0px 1px 2px rgba(0 0 0 / 0.12);

  &:focus {
    box-shadow: 1px 1px 4px rgba(0 0 0 / 0.2);
  }

  &::placeholder {
    font-size: 14px;
  }
}

.input--error {
  border: 1px solid rgb(223, 154, 154);
  box-shadow: inset 0px 1px 2px rgba(0 0 0 / 0.12);

  &:focus {
    box-shadow: 0px 1px 6px rgba(118, 0, 0, 0.4);
  }

  &::placeholder {
    font-size: 15px;
    font-weight: 500;
    color: rgb(137, 0, 0);
  }
}
</style>
