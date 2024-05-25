<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Revisando Correção" />
  <div class="container">
    <div class="grid-notas">
      <CardNotaCompetencia
        title="Competência 1"
        tooltip="Domínio da escrita formal da língua portuguesa."
        :nota="redacaoAtual.redacao.criteriaScore1"
        maxNota="200"
        :delay="100"
      />
      <CardNotaCompetencia
        title="Competência 2"
        tooltip="Compreender o tema e não fugir do que é proposto."
        :nota="redacaoAtual.redacao.criteriaScore2"
        maxNota="200"
        :delay="300"
      />
      <CardNotaCompetencia
        title="Competência 3"
        tooltip="Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista."
        :nota="redacaoAtual.redacao.criteriaScore3"
        maxNota="200"
        :delay="500"
      />
      <CardNotaCompetencia
        title="Competência 4"
        tooltip="Conhecimento dos mecanismos linguísticos necessários para a construção da argumentação."
        :nota="redacaoAtual.redacao.criteriaScore4"
        maxNota="200"
        :delay="700"
      />
      <CardNotaCompetencia
        title="Competência 5"
        tooltip="Respeito aos direitos humanos."
        :nota="redacaoAtual.redacao.criteriaScore5"
        maxNota="200"
        :delay="800"
      />
    </div>

    <h2>Tema da redação</h2>
    <p>
      {{ redacaoAtual.redacao.prompt }}
    </p>
    <h2>Titulo da redação</h2>
    <p>
      {{ redacaoAtual.redacao.title }}
    </p>
    <h2>Redação:</h2>
    <p>
      {{ redacaoAtual.redacao.text }}
    </p>
    <h2>Feedback:</h2>
    <p>
      {{ redacaoAtual.redacao.comments }}
    </p>
  </div>
</template>

<script setup lang="ts">
import CardNotaCompetencia from '@/components/Items/CardNotaCompetencia.vue'
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import { type Breadcrumb } from '@/types/Breadcrumb'
import { computed } from 'vue'
import { useStore } from 'vuex'

const breadcrumbs: Breadcrumb[] = []
const store = useStore()

const redacaoAtual = computed(() => store.state.redacao.redacaoAtual)
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
