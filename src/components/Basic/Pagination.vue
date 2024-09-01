<template>
  <div :class="['pagination mb-4', { disabled: props.disabled }]">
    <div class="pages">
      <button
        @click="changePage(props.curPage - 1)"
        :disabled="props.curPage === 0 || props.disabled"
      >
        <svg
          width="11"
          height="17"
          viewBox="0 0 11 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.86612 1.43412C10.0614 1.62938 10.0614 1.94596 9.86612 2.14123L2.14146 9.86589C1.9462 10.0611 1.62961 10.0611 1.43435 9.86589L0.353604 8.78514C0.158342 8.58988 0.158341 8.27329 0.353603 8.07803L8.07826 0.353372C8.27352 0.15811 8.59011 0.15811 8.78537 0.353372L9.86612 1.43412Z"
            fill="white"
          />
          <path
            d="M8.78538 16.5198C8.59012 16.7151 8.27354 16.7151 8.07827 16.5198L0.357715 8.79926C0.162453 8.60399 0.162453 8.28741 0.357715 8.09215L1.43846 7.0114C1.63372 6.81614 1.95031 6.81614 2.14557 7.0114L9.86613 14.732C10.0614 14.9272 10.0614 15.2438 9.86613 15.4391L8.78538 16.5198Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        v-for="page in props.totalPages"
        :key="page"
        @click="changePage(page - 1)"
        :class="{ active: page === props.curPage + 1 }"
        :disabled="props.disabled"
        v-if="props.totalPages && props.totalPages > 1"
      >
        {{ page }}
      </button>
      <button
        @click="changePage(props.curPage)"
        v-if="!props.totalPages || props.totalPages < 2"
        class="active"
        disabled
      >
        1
      </button>
      <button
        @click="changePage(props.curPage + 1)"
        :disabled="props.curPage === props.totalPages - 1 || !props.totalPages || props.disabled"
      >
        <svg
          width="11"
          height="17"
          viewBox="0 0 11 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.353612 15.4392C0.15835 15.2439 0.15835 14.9273 0.353612 14.7321L8.07827 7.00741C8.27353 6.81214 8.59011 6.81214 8.78538 7.0074L9.86612 8.08815C10.0614 8.28341 10.0614 8.6 9.86612 8.79526L2.14147 16.5199C1.9462 16.7152 1.62962 16.7152 1.43436 16.5199L0.353612 15.4392Z"
            fill="white"
          />
          <path
            d="M1.43435 0.353478C1.62961 0.158216 1.94619 0.158215 2.14145 0.353478L9.86201 8.07403C10.0573 8.2693 10.0573 8.58588 9.86201 8.78114L8.78127 9.86189C8.586 10.0572 8.26942 10.0572 8.07416 9.86189L0.3536 2.14133C0.158338 1.94607 0.158338 1.62949 0.3536 1.43422L1.43435 0.353478Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const emit = defineEmits(['changePage'])

function changePage(page: number) {
  emit('changePage', page)
}

const props = defineProps({
  totalPages: {
    type: Number,
    required: true
  },
  curPage: {
    type: Number,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  button {
    background-color: var(--blue);
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    aspect-ratio: 1/1;
    width: 40px;
    border-radius: 5px;
    color: #fff;
    font-family: 'Plein-bold';
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 2px solid var(--blue);
    svg path {
      transition: all 0.3s ease-in-out;
    }
    &:not(.arrow) {
      padding-bottom: 2px;
    }

    &:not(:disabled):hover {
      background-color: #fff;
      color: var(--blue);
      svg path {
        fill: var(--blue);
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &.active {
      background-color: #fff;
      color: var(--blue);
      scale: 1.1;
    }
  }

  .pages {
    display: flex;
    align-items: center;
  }
}
</style>
