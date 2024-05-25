<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Perfil" />
  <div class="container">
    <p>
      Olá, <strong>{{ name }}</strong> este é o seu perfil. Aqui você pode alterar suas informações.
    </p>
    <CardEditName :name="name" />
    <CardEditPassword />
    <button class="btn-padrao" @click="logout">Deslogar</button>
  </div>
</template>

<script setup lang="ts">
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import CardEditName from '@/components/Items/CardEditName.vue'
import CardEditPassword from '@/components/Items/CardEditPassword.vue'
import { type Breadcrumb } from '@/types/Breadcrumb'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const name = ref<string>('')

const store = useStore()
const router = useRouter()

onMounted(() => {
  name.value = 'Fulano'
})

const breadcrumbs: Breadcrumb[] = []

function logout() {
  store.dispatch('login/logout').then(() => {
    router.push({ name: 'Login' })
  })
}
</script>

<style lang="scss" scoped></style>
