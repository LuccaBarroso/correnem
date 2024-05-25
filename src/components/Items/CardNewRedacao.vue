<template>
  <RouterLink class="item generic-card option-redacao" :to="props.to" v-if="!props.disabled">
    <p>{{ props.text }}</p>
    <div class="fake-btn">
      {{ props.btnText }}
      <slot name="svg"></slot>
    </div>
  </RouterLink>
  <div class="item generic-card option-redacao disabled" v-else>
    <p>{{ props.text }}</p>
    <div class="fake-btn">
      {{ props.btnText }}
      <slot name="svg"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  btnText: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.option-redacao {
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
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      margin-left: 10px;
      path {
        fill: var(--white);
        transition: all 0.4s ease-in-out;
      }
    }
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
  &:not(.disabled):hover .fake-btn {
    background-color: var(--blue-dark);
    color: var(--blue);
    scale: 1.05;
    svg path {
      fill: var(--blue);
    }
    &::after {
      width: 100%;
      left: 0;
    }
  }
  &.disabled {
    cursor: not-allowed;
    position: relative;
    &::after {
      content: 'Em Breve';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000000c0;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.5rem;
      font-family: 'Plein-Medium';
    }
  }
}
</style>
