<template>
  <div class="generic-card feature-card">
    <div class="icon-container">
      <img :alt="props.alt" :src="props.img" />
    </div>
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.feature-card {
  padding-block: 40px;
  .icon-container {
    background-color: #eff3f6;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1rem;
    border: solid 3px #044884;

    img {
      width: 30px;
      height: 30px;
    }
  }

  h3 {
    font-family: 'Plein-Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  p {
    font-size: 0.875rem;
    margin-bottom: 0;
    margin-bottom: 1rem;
    font-family: 'Switzer-Medium';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
}
</style>
