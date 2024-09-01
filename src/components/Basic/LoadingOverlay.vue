<template>
  <div class="holder">
    <Loading />
  </div>
</template>

<script setup lang="ts">
import Loading from '@/components/Basic/Loading.vue'
</script>

<style scoped lang="scss">
.holder {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(200, 200, 200, 0.5);
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(1px);
}
</style>
