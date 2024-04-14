<template>
  <div class="preview-redacoes">
    <div class="topo">
      <h3>{{ title }}</h3>
      <RouterLink :to="linkVerTodas">Ver todas</RouterLink>
    </div>
    <div class="grid-redacoes" v-if="redacoes.length > 0">
      <ItemRedacao v-for="(redacao, index) in redacoes" :key="index" :redacao="redacao" />
    </div>
    <div class="no-result" v-else>
      <h3>Nenhuma redação encontrada.</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import ItemRedacao from '@/components/Items/Redacao.vue'
import { type Redacao } from '@/types/Redacao'

const props = defineProps({
  redacoes: {
    type: Array<Redacao>,
    default: [
      {
        id: 0,
        date: '',
        result: 0,
        status: '',
        img: ''
      },
      {
        id: 0,
        date: '',
        result: 0,
        status: '',
        img: ''
      },
      {
        id: 0,
        date: '',
        result: 0,
        status: '',
        img: ''
      },
      {
        id: 0,
        date: '',
        result: 0,
        status: '',
        img: ''
      }
    ],
    required: false
  },
  title: {
    type: String,
    required: true
  },
  linkVerTodas: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.preview-redacoes {
  margin-bottom: 40px;
}
.topo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  h3 {
    font-size: 1.3125rem;
    font-family: 'Plein-bold';
    color: var(--blue);
  }
  a {
    font-size: 1rem;
    font-family: 'Plein-bold';
    color: var(--blue);
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease-in-out;
    &::after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 0;
      height: 2px;
      background-color: var(--blue);
      transition: all 0.3s ease-in-out;
      width: 100%;
    }
    &:hover {
      scale: 1.05;
      &::after {
        width: 0;
        left: 50%;
      }
    }
  }
}
.no-result {
  h3 {
    font-size: 1.1rem;
    font-family: 'Switzer-Medium';
    color: var(--black);
    text-align: center;
    margin-block: 110px;
  }
}
</style>
