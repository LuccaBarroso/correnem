<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Cadastrando Nova Redação" />
  <div class="container">
    <RouterLink to="/nova-redacao" class="back-link"> Mudar forma de envio </RouterLink>
    <form class="redacoes form">
      <div class="input">
        <label>Qual o titulo da sua redação? <span class="opcional">(opcional)</span></label>
        <input type="text" v-model="title" placeholder="Título da redação" />
        <div class="error-input" v-if="errorTitle">{{ errorTitle }}</div>
      </div>
      <div class="input">
        <label>Cole ou digite o texto da sua redação:</label>
        <textarea
          v-model="text"
          placeholder="Escreva sua redação aqui..."
          rows="10"
          cols="50"
        ></textarea>
        <div class="error-input" v-if="errorText">{{ errorText }}</div>
      </div>
      <div class="input">
        <label>Qual o tema da sua redação?</label>
        <input type="text" v-model="theme" placeholder="Tema da redação" />
        <div class="error-input" v-if="errorTheme">{{ errorTheme }}</div>
      </div>
      <div class="input">
        <label>A qual aluno pertence essa redação ? <span class="opcional">(opcional)</span></label>
        <CardInputAluno :initial="null" @change-aluno="changeAluno" />
      </div>
      <div class="error-input" v-if="error">{{ error }}</div>
      <div class="final">
        <button class="btn-padrao" @click="createRedacao">
          Criar Redação
          <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 2C0 0.89543 0.895431 0 2 0H10L14 4V15C14 16.1046 13.1046 17 12 17H2C0.89543 17 0 16.1046 0 15V2ZM6 7H8V10H11V12H8V15H6V12H3V10H6V7ZM13 5H9V1L13 5Z"
              fill="#FBF7EF"
            />
          </svg>
        </button>
      </div>
    </form>
    <LoadingOverlay v-if="loading" />
  </div>
</template>

<script setup lang="ts">
import LoadingOverlay from '@/components/Basic/LoadingOverlay.vue'
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import { type Breadcrumb } from '@/types/Breadcrumb'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import CardInputAluno from '@/components/Items/CardInputAluno.vue'

const store = useStore()
const router = useRouter()

const title = ref<string>('')
const text = ref<string>('')
const theme = ref<string>('')
const breadcrumbs: Breadcrumb[] = []
const loading = ref<boolean>(false)

const errorTitle = ref<string>('')
const errorText = ref<string>('')
const errorTheme = ref<string>('')
const error = ref<string>('')

const novoAluno = ref<string>('')

function changeAluno(nome: any) {
  novoAluno.value = nome
}

const validate = () => {
  let isValid = true
  // if (!title.value) {
  //   errorTitle.value = 'O título da redação é obrigatório'
  //   isValid = false
  // } else {
  //   errorTitle.value = ''
  // }
  if (!text.value) {
    errorText.value = 'O texto da redação é obrigatório'
    isValid = false
  } else {
    errorText.value = ''
  }
  if (!theme.value) {
    errorTheme.value = 'O tema da redação é obrigatório'
    isValid = false
  } else {
    errorTheme.value = ''
  }
  return isValid
}

const createRedacao = (e) => {
  e.preventDefault()
  loading.value = true
  if (validate()) {
    document.body.style.overflow = 'hidden'
    store
      .dispatch('redacao/createRedacao', {
        title: title.value,
        text: text.value,
        theme: theme.value,
        nomeAluno: novoAluno.value
      })
      .then((result) => {
        error.value = ''
        router.push('/redacao/' + result.id)
        loading.value = false
        document.body.style.overflow = 'auto'
      })
      .catch((err) => {
        loading.value = false
        error.value = err.message
        document.body.style.overflow = 'auto'
      })
  } else {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.back-link {
  color: var(--black);
  margin-bottom: 5;
}
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  span.opcional {
    font-weight: 400;
    color: var(--blue);
  }
  label {
    font-size: 1.1rem;
    font-family: 'Plein-Medium';
    font-weight: 400;
    margin-bottom: 5px;
  }
  textarea,
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--gray);
    font-size: 1rem;
    font-family: 'Switzer-Medium';
    background-color: #ece5f0;
    transition: all 0.3s ease-in-out;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px #04488470;
    }
  }
}
.final {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
.btn-padrao {
  padding: 5px 20px;
  font-size: 1.2rem;
}
</style>
