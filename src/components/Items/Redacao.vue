<template>
  <RouterLink class="item-redacao" :to="'/redacao/' + props.redacao.id" v-if="loaded">
    <div class="imagem">
      <img src="/default-redacao.jpg" alt="Redação" />
      <div :class="['overlay']">
        <h4>{{ props.redacao.finalScore }}</h4>
      </div>
      <div class="selo-finalizada" v-if="props.redacao.isFinished">
        <p>Finalizada</p>
        <svg
          width="79"
          height="64"
          viewBox="0 0 79 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.003 52.3167C15.0047 52.3184 15.0047 52.3212 15.003 52.3228V52.3228C15.0014 52.3245 15.0014 52.3273 15.003 52.329L26.3106 63.6366C26.3123 63.6382 26.3151 63.6382 26.3168 63.6365V63.6365C26.3184 63.6349 26.3212 63.6349 26.3229 63.6365V63.6365C26.3245 63.6382 26.3273 63.6382 26.3289 63.6365L37.6366 52.3289C37.6382 52.3272 37.6382 52.3245 37.6366 52.3228V52.3228C37.6349 52.3211 37.6349 52.3184 37.6366 52.3167L77.2254 12.7279C78.0064 11.9469 78.0064 10.6805 77.2254 9.8995L68.7401 1.41421C67.959 0.633165 66.6927 0.633165 65.9117 1.41421L27.734 39.5919C26.953 40.3729 25.6866 40.3729 24.9056 39.5919L13.5569 28.2432C12.7759 27.4621 11.5095 27.4621 10.7285 28.2432L2.24319 36.7284C1.46214 37.5095 1.46214 38.7758 2.24319 39.5569L15.003 52.3167Z"
            fill="#ECE5F0"
          />
        </svg>
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
      border-radius: 4px;
    }
  }
  .selo-finalizada {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: var(--blue);
    padding: 5px 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: row;
    p {
      font-family: 'Plein-bold';
      color: white;
      font-size: 0.8rem;
      margin: 0;
    }
    svg {
      width: 20px;
      height: 12px;
      margin-left: 5px;
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
