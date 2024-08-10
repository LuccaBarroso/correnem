<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Revisando Correção" />
  <div class="container main-page-container" v-if="curRedacao.redacao">
    <div class="grid-notas">
      <CardNotaCompetencia
        :isEditing="isEditing"
        title="Competência 1"
        tooltip="Domínio da escrita formal da língua portuguesa."
        :nota="curRedacao.redacao.criteriaScore1"
        maxNota="200"
        :delay="100"
        @change="changeNota(1, $event)"
      />
      <CardNotaCompetencia
        :isEditing="isEditing"
        title="Competência 2"
        tooltip="Compreender o tema e não fugir do que é proposto."
        :nota="parseInt(curRedacao.redacao.criteriaScore2)"
        maxNota="200"
        :delay="300"
        @change="changeNota(2, $event)"
      />
      <CardNotaCompetencia
        :isEditing="isEditing"
        title="Competência 3"
        tooltip="Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista."
        :nota="parseInt(curRedacao.redacao.criteriaScore3)"
        maxNota="200"
        :delay="450"
        @change="changeNota(3, $event)"
      />
      <CardNotaCompetencia
        :isEditing="isEditing"
        title="Competência 4"
        tooltip="Conhecimento dos mecanismos linguísticos necessários para a construção da argumentação."
        :nota="parseInt(curRedacao.redacao.criteriaScore4)"
        maxNota="200"
        :delay="550"
        @change="changeNota(4, $event)"
      />
      <CardNotaCompetencia
        :isEditing="isEditing"
        title="Competência 5"
        tooltip="Respeito aos direitos humanos."
        :nota="parseInt(curRedacao.redacao.criteriaScore5)"
        maxNota="200"
        :delay="600"
        @change="changeNota(5, $event)"
      />
      <CardNotaCompetencia
        title="Nota Final"
        tooltip="Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista."
        :nota="curRedacao.redacao.finalScore"
        maxNota="1000"
        :delay="625"
        destaque
      />
    </div>

    <h2>Tema da redação</h2>
    <p>
      {{ curRedacao.redacao.prompt }}
    </p>
    <h2>Titulo da redação</h2>
    <p>
      {{ curRedacao.redacao.title }}
    </p>
    <h2>Redação:</h2>
    <p>
      {{ curRedacao.redacao.text }}
    </p>
    <h2>Feedback:</h2>
    <div
      style="margin-bottom: 30px"
      v-html="marked(curRedacao.redacao.comments)"
      v-if="curRedacao.redacao.comments && !isEditing"
    ></div>
    <div v-else>
      <textarea
        v-model="curRedacao.redacao.comments"
        class="input-textarea"
        placeholder="Digite aqui o feedback da redação"
      ></textarea>
    </div>

    <div class="options d-flex">
      <button class="btn-padrao" @click="iniciarEdicao" v-if="!isEditing">
        Editar<svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1768 0.155953C12.0604 1.28062 3.86903 9.53269 1.74584 11.6716C1.46304 11.9565 1.30234 12.3998 1.21093 12.7907C1.03039 13.5626 0.593686 14.7858 0.179308 15.3702C-0.260401 15.9904 0.157525 16.2338 0.901608 15.7256C1.6677 15.2023 2.66415 14.6337 3.25551 14.4025C3.5037 14.3054 3.75944 14.1912 3.94719 14.002C5.41889 12.5194 11.521 6.37214 12.627 5.25796C13.6356 4.29573 14.4563 3.63569 14.7297 3.51519C14.7861 3.4903 14.8484 3.52257 14.8511 3.58421C14.8656 3.90683 14.0865 4.82542 12.7608 6.26612C10.6779 8.466 10.3587 8.92289 10.8458 8.92289C11.1818 8.92289 15.7844 4.10009 15.9187 3.60935C16.1223 2.65229 16.0537 0.896707 14.3901 0.191083C13.8568 -0.035167 13.4083 -0.0772815 13.1768 0.155953ZM14.3478 0.927499V0.927499C14.5807 1.16205 14.5807 1.54051 14.3478 1.77506L14.2631 1.86041C14.0317 2.09355 13.6543 2.09243 13.4243 1.85791V1.85791C12.9036 1.3164 12.7587 1.20918 13.0611 0.972273C13.5146 0.650753 13.8775 0.538291 14.3478 0.927499ZM12.7588 2.18378C13.045 2.47209 13.1196 3.01244 12.8334 3.30075L10.3445 5.80802C10.0554 6.09935 9.58421 6.09935 9.29502 5.80802V5.80802C9.00883 5.51971 9.00789 5.05547 9.29408 4.76716C10.0013 4.0547 11.1278 2.91987 11.785 2.25783C12.0741 1.9665 12.4696 1.89245 12.7588 2.18378V2.18378ZM7.40642 7.63718C7.69261 7.92548 7.73754 8.43433 7.45136 8.72264C6.77829 9.40069 5.66997 10.5172 5.01852 11.1735C4.72933 11.4648 4.25927 11.4637 3.97008 11.1724V11.1724C3.68389 10.8841 3.68389 10.4189 3.97008 10.1306L6.40103 7.68164C6.69022 7.3903 7.11723 7.34585 7.40642 7.63718V7.63718ZM3.5426 12.6604C3.33374 12.8708 2.99347 12.8708 2.78461 12.6604L2.49521 12.3688C2.28852 12.1606 2.28852 11.8246 2.49521 11.6164V11.6164C2.70407 11.406 3.04434 11.406 3.2532 11.6164L3.5426 11.9079C3.74929 12.1162 3.74929 12.4521 3.5426 12.6604V12.6604Z"
            fill="white"
          />
        </svg>
      </button>
      <button class="btn-padrao red" v-if="isEditing" @click="cancelarEdicao">
        Cancelar<svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2616 2.82631C16.6521 2.43578 16.6521 1.80262 16.2616 1.41209L15.5564 0.706955C15.1659 0.316432 14.5328 0.316432 14.1422 0.706955L8.42276 6.42642L2.82658 0.830243C2.43605 0.439717 1.80289 0.439717 1.41237 0.830241L0.707229 1.53538C0.316704 1.9259 0.316704 2.55907 0.707229 2.94959L6.30341 8.54577L0.7072 14.142C0.316676 14.5325 0.316675 15.1657 0.7072 15.5562L1.41234 16.2613C1.80286 16.6519 2.43603 16.6519 2.82655 16.2613L8.42276 10.6651L14.1423 16.3846C14.5328 16.7751 15.1659 16.7751 15.5565 16.3846L16.2616 15.6795C16.6521 15.289 16.6521 14.6558 16.2616 14.2653L10.5421 8.54577L16.2616 2.82631Z"
            fill="white"
          />
        </svg>
      </button>
      <button class="btn-padrao" v-if="isEditing" @click="salvarEdicao">
        Salvar<svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.7004 2.41224C16.0909 2.02172 16.0909 1.38855 15.7004 0.99803L14.9952 0.292893C14.6047 -0.0976308 13.9716 -0.0976314 13.581 0.292893L6.4967 7.37722L3.32643 4.20689C2.93591 3.81636 2.30274 3.81636 1.91221 4.20688L1.20708 4.91202C0.816556 5.30254 0.816553 5.9357 1.20707 6.32623L5.78628 10.9055C6.1768 11.2961 6.80997 11.2961 7.2005 10.9055L7.34046 10.7656C7.36524 10.7452 7.38927 10.7234 7.41245 10.7002L15.7004 2.41224Z"
            fill="white"
          />
        </svg>
      </button>
      <button class="btn-padrao" v-if="!curRedacao.redacao.isFinished" @click="finalizar">
        Finalizar
      </button>
    </div>

    <LoadingOverlay v-if="isLoading" />
  </div>
</template>

<script lang="ts" setup>
import LoadingOverlay from '@/components/Basic/LoadingOverlay.vue'
import CardNotaCompetencia from '@/components/Items/CardNotaCompetencia.vue'
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import { marked } from 'marked'
import { type Breadcrumb } from '@/types/Breadcrumb'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useStore()
const route = useRoute()

let isEditing = ref(false)
let isLoading = ref(false)

let originalRedacao = null
let curRedacao = null

const breadcrumbs: Breadcrumb[] = []
const redacao = computed(() => {
  curRedacao = store.state.redacao.redacaoAtual
  return store.state.redacao.redacaoAtual
})
if (!redacao.value || redacao.value.id !== route.params.id) {
  store.dispatch('redacao/getRedacaoById', { id: route.params.id })
}

function iniciarEdicao() {
  originalRedacao = { ...redacao.value.redacao }
  isEditing.value = true
}

function cancelarEdicao() {
  curRedacao.redacao = originalRedacao
  isEditing.value = false
  const event = new Event('resetCard')
  window.dispatchEvent(event)
}

function salvarEdicao() {
  isLoading.value = true

  store
    .dispatch('redacao/putRedacao', { redacao: curRedacao.redacao })
    .then((res) => {
      isLoading.value = false
      originalRedacao = { ...curRedacao.redacao }
      cancelarEdicao()
    })
    .catch(() => {
      isLoading.value = false
    })
}

function changeNota(index: number, event: event) {
  if (event && event.target) {
    curRedacao.redacao[`criteriaScore${index}`] = parseInt(event.target.value)
  }
}

async function finalizar() {
  isLoading.value = true
  await salvarEdicao()
  store
    .dispatch('redacao/finishRedacao', { id: route.params.id })
    .then(() => {
      isLoading.value = false
      router.push('/redacoes')
    })
    .catch((err) => {
      isLoading.value = false
      console.log(err)
    })
}
</script>

<style scoped lang="scss">
.grid-notas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  gap: 1rem;
}

h2 {
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 1.3125rem;
  font-family: 'Plein-Bold';
  color: var(--blue);
}

.options {
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
    button {
      margin-bottom: 15px;
    }
  }
  button {
    margin-right: 15px;
  }
}

.input-textarea {
  width: 100%;
  height: 700px;
  min-height: fit-content;
  padding: 15px;
  border: 1px solid var(--blue);
  border-radius: 5px;
  font-family: 'Plein-Regular';
  font-size: 1rem;
  margin-block: 20px;
}
</style>
