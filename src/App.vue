<template>
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<script setup lang="ts">
import LayoutHeader from '@/components/Layout/Header.vue'
import LayoutFooter from '@/components/Layout/Footer.vue'
import { RouterView, useRouter } from 'vue-router'

import { onMounted } from 'vue'

import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

onMounted(() => {
  store.dispatch('login/firstAccessCheck').catch(() => {
    router.push({ name: 'Login' })
  })
})
</script>

<style scoped></style>
