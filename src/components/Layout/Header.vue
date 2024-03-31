<template>
  <div class="holder">
    <div class="spacer">
      <!-- empty div to keep the header fixed -->
    </div>
    <div class="header">
      <div class="container">
        <BasicLogo />
        <div class="right-side">
          <!-- menu sem estar logado -->
          <RouterLink to="/login" class="menu-item">Logar</RouterLink>
          <RouterLink to="/registrar" class="menu-item btn">Registrar</RouterLink>

          <!-- menu logado -->
          <!-- <RouterLink to="/redacoes" class="menu-item">Suas Redações</RouterLink>
          <RouterLink to="/perfil" class="menu-item">Perfil</RouterLink>
          <RouterLink to="/nova-redacao" class="menu-item btn">Nova Redação</RouterLink> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BasicLogo from '@/components/Basic/Logo.vue'
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 30;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #ece5f0 5.27%, #044884 100%);
    opacity: 0.3;
    height: 100%;
    border-bottom: 1px solid #044884;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-block: 20px;
  }
}
.spacer {
  height: 78px;
}
</style>
