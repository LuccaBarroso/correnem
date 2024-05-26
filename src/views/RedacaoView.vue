<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Revisando Correção" />
  <div class="container">
    <div class="grid-notas">
      <CardNotaCompetencia
        title="Competência 1"
        tooltip="Domínio da escrita formal da língua portuguesa."
        :nota="redacao.redacao.criteriaScore1"
        maxNota="200"
        :delay="100"
      />
      <CardNotaCompetencia
        title="Competência 2"
        tooltip="Compreender o tema e não fugir do que é proposto."
        :nota="redacao.redacao.criteriaScore2"
        maxNota="200"
        :delay="300"
      />
      <CardNotaCompetencia
        title="Competência 3"
        tooltip="Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista."
        :nota="redacao.redacao.criteriaScore3"
        maxNota="200"
        :delay="500"
      />
      <CardNotaCompetencia
        title="Competência 4"
        tooltip="Conhecimento dos mecanismos linguísticos necessários para a construção da argumentação."
        :nota="redacao.redacao.criteriaScore4"
        maxNota="200"
        :delay="700"
      />
      <CardNotaCompetencia
        title="Competência 5"
        tooltip="Respeito aos direitos humanos."
        :nota="redacao.redacao.criteriaScore5"
        maxNota="200"
        :delay="800"
      />
    </div>

    <h2>Tema da redação</h2>
    <p>
      {{ redacao.redacao.prompt }}
    </p>
    <h2>Titulo da redação</h2>
    <p>
      {{ redacao.redacao.title }}
    </p>
    <h2>Redação:</h2>
    <p>
      {{ redacao.redacao.text }}
    </p>
    <h2>Feedback:</h2>
    <p>
      {{ redacao.redacao.comments }}
    </p>
    <div class="nota-final mb-5">
      <CardNotaCompetencia
        title="Nota Final"
        tooltip="Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista."
        :nota="redacao.redacao.finalScore"
        maxNota="1000"
        :delay="700"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardNotaCompetencia from '@/components/Items/CardNotaCompetencia.vue'
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import { type Breadcrumb } from '@/types/Breadcrumb'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

const breadcrumbs: Breadcrumb[] = []
const redacao = computed(() => store.state.redacao.redacaoAtual)
if (!redacao.value || redacao.value.id !== route.params.id) {
  store.dispatch('redacao/getRedacaoById', { id: route.params.id })
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
</style>
