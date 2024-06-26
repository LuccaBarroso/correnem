<template>
  <RouterLink class="item-redacao" :to="'/redacao/' + props.redacao.id" v-if="loaded">
    <div class="imagem">
      <img src="/default-redacao.jpg" alt="Redação" />
      <div :class="['overlay']">
        <h4>{{ props.redacao.finalScore }}</h4>
      </div>
    </div>
    <div class="info">
      <p class="title">{{ props.redacao.title }}</p>
      <h4 class="data">
        {{
          new Date(props.redacao.dataInclusao).toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })
        }}
      </h4>
    </div>
  </RouterLink>
  <div class="skeleton" v-else>
    <div class="imagem">
      <div class="overlay">
        <BasicLoading />
      </div>
    </div>
    <div class="info">
      <h4 class="data"></h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { type Redacao } from '@/types/Redacao'
import BasicLoading from '@/components/Basic/Loading.vue'

const props = defineProps<{
  redacao: Redacao
}>()

const loaded = computed(() => props.redacao.id !== 0)
</script>

<style lang="scss" scoped>
.imagem {
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 10/10;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    &:not(.title) {
      top: 7px;
      right: 10px;
    }
    &.title {
      bottom: 7px;
      left: 10px;
      width: calc(100% - 20px);
      text-align: center;
    }
    h4 {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-family: 'Plein-bold';
      color: white;
      font-size: 1rem;
      margin: 0;
      background-color: var(--blue);
      padding: 7px 25px;
      border-radius: 30px;
    }
  }
}
.item-redacao {
  text-decoration: none;
  .info {
    position: relative;
  }
  p.title {
    font-size: 1.3rem;
    font-family: 'Switzer-Medium';
    margin: 0;
    color: var(--black);
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    overflow: hidden !important;
    max-width: calc(100% - 20px);
    top: 0;
  }
  h4 {
    padding: 30px 0 0 0;
    margin: 0;
    font-size: 1.2rem;
    font-family: 'Switzer-Medium';
    text-decoration: none;
    color: var(--black);
  }
  &:hover {
    .imagem {
      transform: scale(1.05);
    }
  }
}
.skeleton {
  .imagem {
    background-color: #f0f0f0;
    aspect-ratio: 10/10;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    box-shadow: none;
    .overlay {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      .loading {
        scale: 0.8;
        transform: translateY(-50%);
      }
    }
  }
  .info {
    background-color: #f0f0f0;
    aspect-ratio: 10/1;
    margin-top: 10px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
  }
}
</style>
