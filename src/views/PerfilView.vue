<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Perfil" />
  <div class="container">
    <p>
      Olá, <strong>{{ name }}</strong> este é o seu perfil. Aqui você pode alterar suas informações.
    </p>
    <CardEditName :name="name" />
    <CardEditPassword />
  </div>
</template>

<script setup lang="ts">
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import CardEditName from '@/components/Items/CardEditName.vue'
import CardEditPassword from '@/components/Items/CardEditPassword.vue'
import { type Breadcrumb } from '@/types/Breadcrumb'
import { ref, onMounted } from 'vue'

const name = ref<string>('')

onMounted(() => {
  name.value = 'Fulano'
})

const breadcrumbs: Breadcrumb[] = []
</script>

<style lang="scss" scoped></style>
