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
        <div class="holder-tema">
          <input
            type="text"
            v-model="theme"
            placeholder="Tema da redação"
            @input="changeInputTema"
            @focus="isThemeSelected = true"
          />
          <div class="sugestoes" v-if="isThemeSelected && sugestoes.length > 0">
            <h3>Sugestões de temas:</h3>
            <div class="holder">
              <div
                class="item-sugestao"
                v-for="(sugestao, index) in sugestoes"
                :key="index"
                @click="setTheme(sugestao.theme)"
              >
                <p>{{ sugestao.theme }}</p>
                <span v-if="sugestao.from">
                  {{ sugestao.from }}
                </span>
              </div>
            </div>
          </div>
        </div>
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
// array of strings
type Sugestao = {
  theme: string
  from?: string
}
const sugestoes = ref<Sugestao[]>([])
const allSugestoes = [
  {
    theme:
      'Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil',
    from: 'ENEM 2023'
  },
  {
    theme: 'Desafios para a valorização de comunidades e povos tradicionais no Brasil',
    from: 'ENEM 2022'
  },
  {
    theme: 'Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil',
    from: 'ENEM 2021'
  },
  { theme: 'O estigma associado às doenças mentais na sociedade brasileira', from: 'ENEM 2020' },
  { theme: 'O desafio de reduzir as desigualdades entre as regiões do Brasil', from: 'ENEM 2020' },
  { theme: 'Democratização do acesso ao cinema no Brasil', from: 'ENEM 2019' },
  {
    theme: 'Manipulação do comportamento do usuário pelo controle de dados na Internet',
    from: 'ENEM 2018'
  },
  { theme: 'Desafios para a formação educacional de surdos no Brasil', from: 'ENEM 2017' },
  { theme: 'Caminhos para combater a intolerância religiosa no Brasil', from: 'ENEM 2016' },
  {
    theme: 'A persistência da violência contra a mulher na sociedade brasileira',
    from: 'ENEM 2015'
  },
  { theme: 'Publicidade infantil em questão no Brasil', from: 'ENEM 2014' },
  { theme: 'Efeitos da implantação da Lei Seca no Brasil', from: 'ENEM 2013' },
  { theme: 'Movimento imigratório para o Brasil no século 21', from: 'ENEM 2012' },
  {
    theme: 'Viver em rede no século XXI: os limites entre o público e o privado',
    from: 'ENEM 2011'
  },
  { theme: 'O trabalho na construção da dignidade humana', from: 'ENEM 2010' },
  { theme: 'O indivíduo frente à ética nacional', from: 'ENEM 2009' },
  { theme: 'Como preservar a floresta Amazônica', from: 'ENEM 2008' },
  { theme: 'O desafio de se conviver com a diferença', from: 'ENEM 2007' },
  { theme: 'O poder de transformação da leitura', from: 'ENEM 2006' },
  { theme: 'O trabalho infantil na realidade brasileira', from: 'ENEM 2005' },
  {
    theme: 'Como garantir a liberdade de informação e evitar abusos nos meios de comunicação',
    from: 'ENEM 2004'
  },
  {
    theme: 'A violência na sociedade brasileira: como mudar as regras desse jogo?',
    from: 'ENEM 2003'
  },
  {
    theme:
      'O direito de votar: como fazer dessa conquista um meio para promover as transformações sociais de que o Brasil necessita?',
    from: 'ENEM 2002'
  },
  {
    theme: 'Desenvolvimento e preservação ambiental: como conciliar interesses em conflito?',
    from: 'ENEM 2001'
  },
  {
    theme: 'Direitos da criança e do adolescente: como enfrentar esse desafio nacional?',
    from: 'ENEM 2000'
  },
  { theme: 'Cidadania e participação social', from: 'ENEM 1999' },
  { theme: 'Viver e aprender', from: 'ENEM 1998' }
]

const errorTitle = ref<string>('')
const errorText = ref<string>('')
const errorTheme = ref<string>('')
const error = ref<string>('')

const novoAluno = ref<string>('')

const isThemeSelected = ref<boolean>(false)

function changeAluno(nome: any) {
  novoAluno.value = nome
}

function setTheme(themeI: string) {
  theme.value = themeI
  isThemeSelected.value = false
  console.log('theme', themeI)
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

function changeInputTema() {
  isThemeSelected.value = true
  if (!theme.value) {
    sugestoes.value = []
  } else {
    sugestoes.value = allSugestoes
      .filter((sugestao) => {
        let tmp = sugestao.theme.toLowerCase()
        if (sugestao.from) {
          tmp += ' '
          tmp += sugestao.from.toLowerCase()
        }
        return tmp.includes(theme.value.toLowerCase())
      })
      .slice(0, 3)
  }
}

window.addEventListener('click', (e) => {
  if (!(e.target as HTMLElement).closest('.holder-tema')) {
    isThemeSelected.value = false
  }
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    isThemeSelected.value = false
  }
})
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

.holder-tema,
.holder-tema input {
  width: 100%;
}

.holder-tema {
  position: relative;
  .sugestoes {
    h3 {
      font-size: 1.1rem;
      font-family: 'Plein-Medium';
      color: var(--black);
      margin-bottom: 15px;
      font-weight: 400;
    }
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    background-color: #ffffff83;
    backdrop-filter: blur(3px);
    padding: 10px 20px;
    z-index: 2;
    border-radius: 0 0 5px 5px;
    .item-sugestao {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 10px;
      transition: all 0.3s ease-in-out;
      padding: 5px;
      align-items: center;
      p {
        font-size: 1rem;
        font-family: 'Switzer-Medium';
        color: var(--black);
        padding-inline: 5px;
        transition: all 0.3s ease-in-out;
        margin-bottom: 0;
        white-space: nowrap;
        overflow: hidden;
        /* ... when the text is too long */
        text-overflow: ellipsis;
      }
      span {
        background-color: var(--blue);
        padding: 5px 10px;
        font-size: 0.9rem;
        font-family: 'Switzer-Medium';
        color: var(--white);
        margin: 0;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
        min-width: 99px;
      }
      &:hover {
        cursor: pointer;
        background-color: var(--blue);
        border-radius: 5px;
        p {
          color: var(--white);
        }
        span {
          background-color: var(--white);
          opacity: 0.8;
          color: var(--blue);
        }
      }
    }
  }
}
</style>
