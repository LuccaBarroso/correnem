<template>
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<script setup lang="ts">
import LayoutHeader from '@/components/Layout/Header.vue'
import LayoutFooter from '@/components/Layout/Footer.vue'
</script>

<style scoped></style>
