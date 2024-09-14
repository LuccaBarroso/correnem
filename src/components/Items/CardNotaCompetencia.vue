<template>
  <div
    :class="[
      'item generic-card card-nota-competencia',
      { active: active },
      { destaque: props.destaque }
    ]"
  >
    <div class="topo">
      <h3>
        {{ props.title }}
      </h3>
      <div class="icon">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 9.5C2.51472 9.5 0.5 7.48528 0.5 5C0.5 2.51472 2.51472 0.5 5 0.5C7.48528 0.5 9.5 2.51472 9.5 5C9.5 7.48528 7.48528 9.5 5 9.5Z"
            stroke="#044884"
          />
          <path
            d="M5.07889 3.25601C4.63089 3.25601 4.35889 3.01601 4.35889 2.61601C4.35889 2.22401 4.63089 1.97601 5.07889 1.97601C5.51089 1.97601 5.78289 2.22401 5.78289 2.61601C5.78289 3.01601 5.51089 3.25601 5.07889 3.25601ZM4.47089 8.00001V3.83201H5.67889V8.00001H4.47089Z"
            fill="#044884"
          />
        </svg>
        <div class="tooltip">
          <p>
            {{ props.tooltip }}
          </p>
        </div>
      </div>
    </div>
    <div class="nota">
      <p v-if="!isEditing">{{ initialVal }}</p>
      <input
        v-else
        type="number"
        v-model="curNewVal"
        min="0"
        max="200"
        step="40"
        class="input-nota"
        @change="valueChanged"
      />
      <div class="barra">
        <p>/{{ props.maxNota }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  title: {
    type: String
  },
  tooltip: {
    type: String
  },
  nota: {
    type: Number
  },
  maxNota: {
    type: String
  },
  delay: {
    type: Number
  },
  infinity: {
    type: Boolean,
    default: false
  },
  destaque: {
    type: Boolean,
    default: false
  },
  isEditing: {
    type: Boolean
  }
})

const emit = defineEmits(['change'])

const active = ref<boolean>(false)
const initialVal = ref<number>(0)
const curNewVal = ref<number>(0)

setTimeout(() => {
  active.value = true
  incrementValue()
  curNewVal.value = props.nota
}, props.delay)

watch(
  () => props.nota,
  () => {
    initialVal.value = props.nota
    curNewVal.value = props.nota
  }
)

const incrementValue = () => {
  const interval = setInterval(() => {
    if (initialVal.value < props.nota) {
      initialVal.value += 1
    } else if (props.infinity && initialVal.value == props.nota) {
      setTimeout(() => {
        initialVal.value = 0
        incrementValue()
      }, 1000)
      clearInterval(interval)
    } else if (!props.infinity) {
      clearInterval(interval)
    }
  }, 10)
}

const valueChanged = () => {
  if (curNewVal.value > props.maxNota) {
    curNewVal.value = props.maxNota
  }

  if (curNewVal.value < 0) {
    curNewVal.value = 0
  }

  if (curNewVal.value == '' || curNewVal.value == null) {
    curNewVal.value = 0
  }

  emit('change', curNewVal.value)
}

function reset() {
  curNewVal.value = props.nota
  initialVal.value = props.nota
}

onMounted(() => {
  window.addEventListener('resetCard', reset)
})

onUnmounted(() => {
  window.removeEventListener('resetCard', reset)
})
</script>

<style lang="scss" scoped>
.card-nota-competencia {
  transition: all 0.4s ease-in-out;
  scale: 0;
  opacity: 0;
  &.active {
    scale: 1;
    opacity: 1;
  }
  &.destaque {
    background-color: #044884;
    border-radius: 5px;
    color: var(--white);
    &::after {
      border-color: var(--white);
    }
    h3 {
      font-size: 2rem;
    }
    svg {
      display: none;
    }
    h3,
    p {
      color: var(--white);
    }
  }
}

.topo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-block: 10px;
  h3 {
    font-size: 1.6rem;
    font-family: 'Plein-Bold';
    color: var(--blue);
    margin-bottom: 0;
  }
  .icon {
    position: relative;
    &:hover .tooltip {
      visibility: visible;
      opacity: 1;
    }
    svg {
      cursor: pointer;
      margin-left: 10px;
      width: 18px;
      height: 18px;
      overflow: visible;
    }
    .tooltip {
      position: absolute;
      top: 0;
      left: 50%;
      width: 400px;
      background-color: var(--white);
      color: var(--black);
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      visibility: hidden;
      opacity: 0;
      transform: translateX(-50%) translateY(-100%);
      transition: all 0.3s ease-in-out;
      p {
        text-align: center;
        margin-bottom: 0;
      }
    }
  }
}

.nota {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    font-family: 'Plein-Bold';
    color: var(--blue);
  }
  > p {
    font-size: 60px;
    margin-bottom: 0;
  }
  .barra {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    p {
      font-size: 20px;
      margin-bottom: 0;
      margin-top: 40px;
    }
  }
}

.input-nota {
  width: 110px;
  height: 50px;
  font-size: 30px;
  text-align: center;
  font-family: 'Plein-Bold';
  color: var(--blue);
  border: 2px solid var(--blue);
  border-radius: 5px;
  &:focus {
    outline: none;
  }
}
</style>
