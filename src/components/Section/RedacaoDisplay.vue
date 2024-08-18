<template>
  <div class="holder">
    <h3>{{ titulo }}</h3>
    <p>{{ texto }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  titulo: {
    type: String,
    required: true
  },
  texto: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.holder {
  border: 1px solid var(--blue);
  border-radius: 1px;
  padding: 0;
  max-width: 65ch;
  @media (min-width: 1028px) {
    min-width: 65ch;
  }
  p {
    line-height: 1.5;
    padding: 1rem;
    background-image: linear-gradient(transparent 95%, var(--blue) 5%);
    background-size: 100% 1.5rem;
    background-repeat: repeat;
    background-position: 0 -0.6rem;
    margin-bottom: 0;
    padding-inline-start: 1rem;
  }
  h3 {
    text-align: center;
    margin-top: 20px;
    font-size: 1.5rem;
    color: var(--blue);
  }
}
</style>
