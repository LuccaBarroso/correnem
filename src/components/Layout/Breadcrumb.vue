<template>
  <div class="breadcrumb">
    <div class="container">
      <nav aria-label="breadcrumb-inner">
        <ul class="breadcrumb-list">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
            <router-link :to="breadcrumb.href">{{ breadcrumb.text }}</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ title }}
          </li>
        </ul>
      </nav>
      <h1>
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { type Breadcrumb } from '@/types/Breadcrumb'

const props = defineProps({
  breadcrumbs: {
    type: Array<Breadcrumb>,
    required: true
  },
  title: {
    type: String,
    default: 'Breadcrumb'
  }
})
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-block: 30px;
  h1 {
    color: var(--blue);
    font-family: 'Plein-Bold';
    font-size: 1.3125rem;
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    flex-wrap: wrap;
    li {
      cursor: default;
      color: var(--black);
    }
    li a {
      text-decoration: none;
      color: var(--black);
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        height: 2px;
        background-color: var(--blue);
        transition: all 0.3s ease-in-out;
        width: 0;
      }
      &:hover::after {
        width: 100%;
        left: 0;
      }
    }
  }
  .breadcrumb-item + .breadcrumb-item::before {
    content: '>';
    font-family: 'Switzer-Bold';
  }
}
</style>
