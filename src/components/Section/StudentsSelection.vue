<template>
  <p v-if="!isEditing && !curName">Aluno não informado.</p>
  <p v-else-if="!isEditing && curName">{{ curName }}</p>
  <div v-else class="aluno-input">
    <CardInputAluno :initial="curName" @change-aluno="changeAluno" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, onMounted } from 'vue'
import CardInputAluno from '@/components/Items/CardInputAluno.vue'

let emits = defineEmits(['change-aluno'])

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

const curAluno = ref<string>('')

const changeAluno = (nome: string) => {
  emits('change-aluno', nome)
}
</script>

<style lang="scss" scoped>
.aluno-input {
  width: 100%;
  margin-block: 10px 20px;
}
</style>
