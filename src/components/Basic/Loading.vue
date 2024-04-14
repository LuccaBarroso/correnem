<template>
  <div class="loading">
    <span class="ball"></span>
    <span class="ball"></span>
    <span class="ball"></span>
    <span class="ball"></span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  .ball {
    width: 20px;
    height: 20px;
    background-color: var(--blue);
    border-radius: 50%;
    margin: 0 10px;
    animation: grow 0.6s infinite alternate;
    margin-top: 50px;
    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        animation-delay: 0.1s * $i;
      }
    }
  }
}

@keyframes grow {
  0% {
    scale: 1;
    transform: translateY(0);
  }
  100% {
    scale: 1.3;
    transform: translateY(-20px);
  }
}
</style>
