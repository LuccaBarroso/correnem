<template>
  <div class="login-holder container main-page-container">
    <div class="generic-card login-card">
      <BasicLoading v-if="loading" style="margin-inline: auto; margin-block: 60px" />
      <div v-else>
        <div class="texto-topo">
          <h2>Acesse sua conta</h2>
          <RouterLink to="/register" class="link-extra">
            <p>Ainda não tem uma conta ? <span>Clique aqui</span> para se registrar</p>
          </RouterLink>
        </div>
        <form class="form" @submit="submitForm">
          <div class="input-group">
            <label for="email">Email:</label>
            <div class="input-holder" :class="{ error: emailError }">
              <input type="email" id="email" placeholder="Seu email" v-model="email" />
            </div>
            <div class="error-input" v-if="emailError">{{ emailError }}</div>
          </div>
          <div class="input-group">
            <label for="password">Senha:</label>
            <div class="input-holder" :class="{ error: passwordError }">
              <input type="password" id="password" placeholder="Sua senha" v-model="password" />
            </div>
            <div class="error-input" v-if="passwordError">{{ passwordError }}</div>
          </div>
          <div class="error-input" v-if="genericError">{{ genericError }}</div>
          <div class="final-line row">
            <div class="col-lg-6 d-flex align-items-center">
              <!-- <RouterLink to="/forgot-password" class="link-extra">
                <p>Esqueceu sua senha ? <span>Clique aqui</span> para recuperar</p>
              </RouterLink> -->
            </div>
            <div class="col-lg-6 d-flex justify-content-end align-items-center">
              <button
                type="submit"
                :class="['btn-padrao', { inactive: !isValidForm }]"
                @click="submitForm"
              >
                Acessar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BasicLoading from '@/components/Basic/Loading.vue'
import { RouterLink, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref, watch } from 'vue'

const store = useStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const loading = ref(false)

const emailError = ref('')
const passwordError = ref('')
const genericError = ref('')

const isValidForm = ref(false)

function validateEmail() {
  if (!email.value) {
    emailError.value = 'Campo obrigatório'
    return false
  }
  if (!email.value.includes('@')) {
    emailError.value = 'Email inválido'
    return false
  }
  emailError.value = ''
  return true
}

function validatePassword() {
  if (!password.value) {
    passwordError.value = 'Campo obrigatório'
    return false
  }
  passwordError.value = ''
  return true
}

function validateForm() {
  if (!validateEmail() || !validatePassword()) {
    return false
  }
  return true
}

watch([email, password], () => {
  genericError.value = ''
  isValidForm.value = validateForm()
})

async function submitForm(e: Event) {
  e.preventDefault()
  if (validateForm()) {
    loading.value = true
    try {
      const result = await store.dispatch('login/login', {
        email: email.value,
        password: password.value
      })

      if (result.error) {
        throw new Error(result.message)
      }

      loading.value = false
      router.push('/redacoes')
    } catch (error) {
      loading.value = false
      genericError.value = 'Email ou senha inválidos'
    }
  }
}
</script>

<style lang="scss" scoped>
.login-card {
  margin-block: 100px;
  padding-block: 100px;
  padding-inline: 160px;
  @media (max-width: 992px) {
    padding-inline: 60px;
  }
  @media (min-width: 992px) {
    margin-inline: auto;
    max-width: 700px;
    padding-inline: 70px;
  }
  @media (max-width: 400px) {
    padding-inline: 30px;
    padding-block: 70px;
  }
  .texto-topo {
    text-align: center;
    h2 {
      font-size: 1.5rem;
      font-family: 'Plein-Medium';
      line-height: 0.8;
    }
  }
  .link-extra {
    color: var(--black);
    text-decoration: none;
    transition: all 0.4s ease-in-out;
    span {
      text-decoration: underline;
    }
    &:hover {
      color: var(--blue);
      text-decoration: underline;
    }
  }
  form {
    margin-top: 20px;

    .input-group {
      margin-block: 10px 0px;
      display: flex;
      flex-direction: column;
      label {
        font-family: 'Plein-Medium';
        font-size: 1.2rem;
        color: var(--black);
      }
      .input-holder {
        &.error {
          position: relative;
          &::after {
            content: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="18" height="18" rx="9" stroke="%23ED474A" stroke-width="2"/><path d="M10.2572 5.919C9.30517 5.919 8.72717 5.409 8.72717 4.559C8.72717 3.726 9.30517 3.199 10.2572 3.199C11.1752 3.199 11.7532 3.726 11.7532 4.559C11.7532 5.409 11.1752 5.919 10.2572 5.919ZM8.96517 16V7.143H11.5322V16H8.96517Z" fill="%23ED474A"/></svg>');
            position: absolute;
            right: 10px;
            top: 60%;
            transform: translateY(-50%);
            color: var(--red);
            font-size: 1.2rem;
          }
        }
      }
      input {
        width: 100%;
        padding: 12px 15px;
        border: none;
        border-radius: 5px;
        margin-top: 5px;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .final-line {
    margin-top: 20px;
    p {
      @media (min-width: 992px) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
