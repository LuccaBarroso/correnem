<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Suas Redações" />
  <div class="container main-page-container">
    <div class="redacoes">
      <PreviewRedacoes
        :redacoes="redacoes"
        title="Redações Mais Recentes"
        initialQuantity="12"
        :loading="loading.value"
        v-if="redacoes.length > 0"
      />
      <div v-else-if="redacoes.length == 0 && !loading">
        <p class="no-redacoes">Você ainda não cadastrou nenhuma redação.</p>
      </div>
      <Pagination
        :totalPages="totalPages"
        :curPage="curPage"
        @changePage="getPage"
        :disabled="loading"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Pagination from '@/components/Basic/Pagination.vue'
import PreviewRedacoes from '@/components/Section/PreviewRedacoes.vue'
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import { ref, onMounted } from 'vue'
import { type Redacao } from '@/types/Redacao'
import { type Breadcrumb } from '@/types/Breadcrumb'
import { useStore } from 'vuex'

const store = useStore()

const breadcrumbs: Breadcrumb[] = []
const redacoes = ref<Redacao[]>([])
const totalPages = ref(0)
const curPage = ref(0)
const loading = ref(false)

function getPage(page: number) {
  curPage.value = page
  loading.value = true
  redacoes.value = []
  store
    .dispatch('redacao/getRedacoes', { page: curPage.value, limit: 12 })
    .then((res) => {
      redacoes.value = res.data.pagina.content
      totalPages.value = res.data.pagina.totalPages
      loading.value = false
    })
    .catch((err) => {
      loading.value = false
    })
}

onMounted(() => {
  getPage(0)
})
</script>

<style lang="scss" scoped>
.no-redacoes {
  font-size: 1rem;
  text-align: center;
  margin-block: 2rem;
  width: 100%;
}
</style>
