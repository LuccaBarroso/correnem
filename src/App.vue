<script setup lang="ts">
import LayoutHeader from '@/components/Layout/Header.vue'
import LayoutFooter from '@/components/Layout/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<style scoped></style>
