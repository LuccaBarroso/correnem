<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Perfil" />
  <div class="container main-page-container">
    <p v-if="userName">
      Olá, <strong>{{ userName }}</strong> este é o seu perfil. Aqui você pode alterar suas
      informações.
    </p>
    <CardEditName :name="userName" v-if="userName" />
    <CardEditPassword v-if="userName" />
    <button class="btn-padrao" @click="logout">Deslogar</button>
  </div>
</template>

<script setup lang="ts">
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import CardEditName from '@/components/Items/CardEditName.vue'
import CardEditPassword from '@/components/Items/CardEditPassword.vue'
import { type Breadcrumb } from '@/types/Breadcrumb'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const userName = computed(() => {
  if (!store.state.login.name) {
    return ''
  }
  return store.state.login.name
})

if (!userName.value) {
  store.dispatch('login/getUserProfile')
}

const breadcrumbs: Breadcrumb[] = []

function logout() {
  store.dispatch('login/logout').then(() => {
    router.push({ name: 'Login' })
  })
}
</script>

<style lang="scss" scoped></style>
