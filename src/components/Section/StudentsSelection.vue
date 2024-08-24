<template>
  <p v-if="!isEditing && !curName">Aluno não informado.</p>
  <button v-if="isEditing && curName" @click="btnChangeStudent = true">Alterar aluno</button>
  <div class="selection-area" v-if="isActuallyEditing">
    <input
      type="text"
      v-model="curInput"
      placeholder="Digite o nome do aluno"
      @change="changedInput"
      @input="changedInput"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, onMounted } from 'vue'

const props = defineProps({
  isEditing: {
    type: Boolean,
    required: true
  },
  curName: {
    type: String,
    required: false
  }
})

const isActuallyEditing = ref(false)
const btnChangeStudent = ref(false)
const curInput = ref('')
let inputTimeout = null
const curResult = ref('')

watch(
  () => props.isEditing,
  () => checarEdicao()
)

watch(
  () => props.curName,
  () => checarEdicao()
)

watch(
  () => btnChangeStudent.value,
  () => checarEdicao()
)

function checarEdicao() {
  if (props.isEditing) {
    isActuallyEditing.value = !props.curName || props.curName === '' || btnChangeStudent.value
  } else {
    isActuallyEditing.value = false
  }
}

function changedInput() {
  clearTimeout(inputTimeout)
  inputTimeout = setTimeout(() => {
    actualChangeInput()
  }, 500)
}

function actualChangeInput() {
  console.log('Mudou o input para:', curInput)
}

onMounted(() => {
  window.addEventListener('resetCard', cancelEdit)
})

function cancelEdit() {
  isActuallyEditing.value = false
  btnChangeStudent.value = false
  curInput.value = ''
  clearTimeout(inputTimeout)
}
</script>

<style lang="scss" scoped>
.selection-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid var(--blue);
    border-radius: 0.25rem;
    margin-block: 20px;
  }
}
</style>
