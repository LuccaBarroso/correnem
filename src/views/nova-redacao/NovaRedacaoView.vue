<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Cadastrando Nova Redação" />
  <div class="container">
    <div class="redacoes">
      <h2>Em qual formato você gostaria de enviar sua redação?</h2>
      <div class="grid-options">
        <RouterLink to="/nova-redacao/texto" class="item generic-card">
          <p>Colar ou digitar texto da redação</p>
          <div class="fake-btn">Texto</div>
        </RouterLink>
        <RouterLink to="/nova-redacao/texto" class="item generic-card">
          <p>Usar a câmera desse dispositivo para tirar uma foto da redação</p>
          <div class="fake-btn">Escanear</div>
        </RouterLink>
        <RouterLink to="/nova-redacao/texto" class="item generic-card">
          <p>Já tem a foto da redação, precisa apenas enviar</p>
          <div class="fake-btn">Enviar foto</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import { type Breadcrumb } from '@/types/Breadcrumb'

const breadcrumbs: Breadcrumb[] = []
</script>

<style lang="scss" scoped>
h2 {
  font-size: 21px;
  font-family: 'Plein-Medium';
  font-weight: 400;
  margin-bottom: 1rem;
}
.grid-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-block: 20px 60px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  .item {
    text-decoration: none;
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 992px) {
      padding: 30px 40px;
    }
    p {
      color: var(--black);
      text-align: center;
      margin-bottom: 20px;
    }
    .fake-btn {
      background-color: var(--blue);
      border: 1px solid var(--blue);
      color: var(--white);
      padding: 8px 15px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: var(--blue);
        transition: all 0.4s ease-in-out;
        width: 0;
        left: 50%;
      }
    }
    &:hover .fake-btn {
      background-color: var(--blue-dark);
      color: var(--blue);
      scale: 1.05;
      &::after {
        width: 100%;
        left: 0;
      }
    }
  }
}
</style>
