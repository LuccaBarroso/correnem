<template>
  <div class="card mb-3">
    <div class="card-header">
      <h5 class="mb-0">
        <slot name="title"></slot>
      </h5>
    </div>
    <div class="card-body">
      <slot name="form"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
