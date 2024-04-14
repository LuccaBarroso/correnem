<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Suas Redações" />
  <div class="container">
    <div class="redações">
      <PreviewRedacoes
        :redacoes="redacoes"
        title="Redações Mais Recentes"
        linkVerTodas="/redacoes/mais-recentes"
      />
      <PreviewRedacoes
        :redacoes="[]"
        title="Redações Mais Recentes"
        linkVerTodas="/redacoes/mais-recentes"
      />
      <PreviewRedacoes title="Carregando Exemplo" linkVerTodas="/redacoes/mais-recentes" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PreviewRedacoes from '@/components/Section/PreviewRedacoes.vue'
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import { ref, onMounted } from 'vue'
import { type Redacao } from '@/types/Redacao'
import { type Breadcrumb } from '@/types/Breadcrumb'

const breadcrumbs: Breadcrumb[] = []
const redacoes = ref<Redacao[]>([])

onMounted(() => {
  redacoes.value = [
    {
      id: 1,
      date: '2021-09-01',
      result: 700,
      status: 'Não Corrigida',
      img: '/default-redacao.jpg'
    },
    {
      id: 2,
      date: '2021-09-02',
      result: 800,
      status: 'Semi-corrigida',
      img: '/default-redacao.jpg'
    },
    {
      id: 3,
      date: '2021-09-03',
      result: 900,
      status: 'Corrigida',
      img: '/default-redacao.jpg'
    },
    {
      id: 4,
      date: '2021-09-04',
      result: 1000,
      status: 'Corrigida',
      img: '/default-redacao.jpg'
    }
  ]
})
</script>

<style lang="scss" scoped></style>
