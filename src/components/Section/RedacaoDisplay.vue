<template>
  <div class="holder-redacao-display">
    <h3 v-if="titulo">{{ titulo }}</h3>
    <div class="paragraphs" v-html="formatText(texto)"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  titulo: {
    type: String,
    required: false
  },
  texto: {
    type: String,
    required: true
  }
})

function formatText(text: string): string {
  return (
    '<p style="margin-bottom: 0;">' +
    text.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>') +
    '</p>'
  )
}
</script>

<style lang="scss">
.holder-redacao-display {
  border: 1px solid var(--blue);
  border-radius: 1px;
  padding: 0;
  max-width: 65ch;
  overflow: hidden;
  @media (min-width: 1028px) {
    min-width: 65ch;
  }
  .paragraphs {
    padding: 1rem;
    background-image: linear-gradient(
      transparent 47%,
      var(--blue) 47%,
      var(--blue) 50%,
      rgba(4, 72, 132, 0.1) 50%,
      rgba(4, 72, 132, 0.1) 97%,
      var(--blue) 97%,
      var(--blue) 100%
    );
    background-size: 100% 3rem;
    background-repeat: repeat;
    background-position: 0 0rem;
    padding-top: 0;
    height: 100%;
    p {
      line-height: 1.5rem;
      margin-bottom: 0 !important;
      text-indent: 1.5rem;
      text-align: justify;
      hyphens: auto;
    }
  }
  h3 {
    text-align: center;
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--blue);
  }
}
</style>
