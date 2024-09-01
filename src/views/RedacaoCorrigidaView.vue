<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" :title="redacao.title" />
  <div class="container">
    <div class="holder-resultado-redacao" v-if="redacao.text">
      <RedacaoDisplay :titulo="redacao.title" :texto="redacao.text" />
      <div class="grid-competencias">
        <CardNotaCompetencia
          :isEditing="false"
          title="Competência 1"
          tooltip="Domínio da escrita formal da língua portuguesa."
          :nota="redacao.criteriaScore1"
          maxNota="200"
          :delay="50"
        />
        <CardNotaCompetencia
          :isEditing="false"
          title="Competência 2"
          tooltip="Compreender o tema e não fugir do que é proposto."
          :nota="redacao.criteriaScore2"
          maxNota="200"
          :delay="100"
        />
        <CardNotaCompetencia
          :isEditing="false"
          title="Competência 3"
          tooltip="Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista."
          :nota="redacao.criteriaScore3"
          maxNota="200"
          :delay="150"
        />
        <CardNotaCompetencia
          :isEditing="false"
          title="Competência 4"
          tooltip="Conhecimento dos mecanismos linguísticos necessários para a construção da argumentação."
          :nota="redacao.criteriaScore4"
          maxNota="200"
          :delay="200"
        />
        <CardNotaCompetencia
          :isEditing="false"
          title="Competência 5"
          tooltip="Respeito aos direitos humanos."
          :nota="redacao.criteriaScore5"
          maxNota="200"
          :delay="250"
        />
        <CardNotaCompetencia
          :isEditing="false"
          title="Nota Final"
          tooltip="Nota final da redação."
          :nota="redacao.finalScore"
          maxNota="1000"
          :delay="300"
          destaque
        />
      </div>
    </div>
  </div>
  {{ redacao }}
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import RedacaoDisplay from '@/components/Section/RedacaoDisplay.vue'
import { type Breadcrumb } from '@/types/Breadcrumb'
import CardNotaCompetencia from '@/components/Items/CardNotaCompetencia.vue'

const route = useRoute()

const store = useStore()

const redacao = computed(() => store.state.redacao.redacaoAtual)
const breadcrumbs: Breadcrumb[] = [{ text: 'Redações de fulano', href: '/redacoes/todo-link' }]

onMounted(() => {
  store.dispatch('redacao/getRedacaoById', { id: route.params.id })
})
</script>

<style lang="scss" scoped>
.holder-resultado-redacao {
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  .grid-competencias {
    margin-top: 20px;
    width: 100%;
    @media (min-width: 768px) {
      padding-left: 20px;
      margin-top: 0;
    }
    display: grid;
    grid-template-columns: 1fr;
    height: fit-content;
    gap: 1rem;
  }
}
</style>
