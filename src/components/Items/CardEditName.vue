<template>
  <ProfileCard>
    <template #title>
      <strong>Editar nome</strong>
    </template>
    <template #form>
      <form @submit.prevent="submitForm" class="form">
        <div class="form-group mb-3">
          <label for="name">Nome:</label>
          <div class="input-holder" :class="{ error: nameError }">
            <input type="text" id="name" placeholder="Seu nome" v-model="name" class="w-100" />
          </div>
          <div class="error-input" v-if="nameError">{{ nameError }}</div>
        </div>
        <div class="error-input" v-if="genericError">{{ genericError }}</div>
        <div class="alert alert-success" v-if="successMessage">
          {{ successMessage }}
        </div>
        <div class="final-line row">
          <div class="col-lg-12 d-flex justify-content-end align-items-center">
            <button
              type="submit"
              :class="['btn-padrao', { inactive: !isValidForm }]"
              @click="submitForm"
            >
              Salvar
            </button>
          </div>
        </div>
        <LoadingOverlay v-if="loading" />
      </form>
    </template>
  </ProfileCard>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { ref, defineProps, onMounted, watch } from 'vue'
import ProfileCard from '@/components/Items/ProfileCard.vue'
import LoadingOverlay from '@/components/Basic/LoadingOverlay.vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

onMounted(() => {
  name.value = props.name
})

const store = useStore()

const name = ref(props.name)
const nameError = ref('')
const genericError = ref('')
const isValidForm = ref(false)
const loading = ref(false)
const successMessage = ref('')

watch(
  () => props.name,
  () => {
    name.value = props.name
    isValidForm.value = false
  }
)

// if value change isValidForm is true
watch([name], () => {
  successMessage.value = ''
  if (name.value == '') {
    nameError.value = 'Campo obrigatório'
  } else {
    nameError.value = ''
  }
  if (name.value && !nameError.value) {
    isValidForm.value = true
  } else {
    isValidForm.value = false
  }
})

const submitForm = (e) => {
  loading.value = true
  e.preventDefault()
  if (nameError.value) {
    loading.value = false
    return
  }

  store
    .dispatch('login/updateName', { name: name.value })
    .then(() => {
      loading.value = false
      successMessage.value = 'Nome atualizado com sucesso'
    })
    .catch(() => {
      genericError.value = 'Erro ao atualizar nome'
      loading.value = false
    })

  isValidForm.value = true
}
</script>

<style lang="scss" scoped>
.form {
  position: relative;
}
</style>
