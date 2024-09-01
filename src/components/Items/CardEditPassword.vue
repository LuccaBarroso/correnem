<template>
  <ProfileCard>
    <template #title>
      <strong>Editar senha</strong>
    </template>
    <template #form>
      <form @submit.prevent="submitForm" class="form">
        <div class="form-group mb-3">
          <label for="oldPassword">Senha Atual:</label>
          <div class="input-holder" :class="{ error: oldPasswordError }">
            <input
              type="password"
              id="oldPassword"
              placeholder="Sua senha atual"
              v-model="oldPassword"
              class="w-100"
              autocomplete="current-password"
            />
          </div>
          <div class="error-input" v-if="oldPasswordError">{{ oldPasswordError }}</div>
        </div>
        <div class="form-group mb-3">
          <label for="newPassword">Nova Senha:</label>
          <div class="input-holder" :class="{ error: newPasswordError }">
            <input
              type="password"
              id="newPassword"
              placeholder="Sua nova senha"
              v-model="newPassword"
              class="w-100"
              autocomplete="new-password"
            />
          </div>
          <div class="error-input" v-if="newPasswordError">{{ newPasswordError }}</div>
        </div>
        <div class="form-group mb-3">
          <label for="confirmNewPassword">Confirme a nova senha:</label>
          <div class="input-holder" :class="{ error: confirmNewPasswordError }">
            <input
              type="password"
              id="confirmNewPassword"
              placeholder="Confirme sua nova senha"
              v-model="confirmNewPassword"
              class="w-100"
              autocomplete="off"
            />
          </div>
          <div class="error-input" v-if="confirmNewPasswordError">
            {{ confirmNewPasswordError }}
          </div>
        </div>

        <div class="error-input" v-if="genericError">{{ genericError }}</div>
        <div class="alert alert-success" v-if="successMessage">{{ successMessage }}</div>
        <div class="final-line row">
          <div class="col-lg-12 d-flex justify-content-end align-items-center">
            <button
              type="submit"
              :disabled="!isValidForm"
              :class="['btn-padrao', { inactive: !isValidForm }]"
              @click="submitForm"
            >
              Salvar
            </button>
          </div>
        </div>
      </form>
    </template>
  </ProfileCard>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { ref, watch } from 'vue'
import ProfileCard from '@/components/Items/ProfileCard.vue'

const store = useStore()

const oldPassword = ref('')
const oldPasswordError = ref('')
const newPassword = ref('')
const newPasswordError = ref('')
const confirmNewPassword = ref('')
const confirmNewPasswordError = ref('')
const successMessage = ref('')

const genericError = ref('')
const isValidForm = ref(false)

watch([oldPassword, newPassword, confirmNewPassword], () => {
  successMessage.value = ''
  if (!oldPassword.value) {
    oldPasswordError.value = 'Campo obrigatório'
  } else {
    oldPasswordError.value = ''
  }
  if (!newPassword.value) {
    newPasswordError.value = 'Campo obrigatório'
  } else {
    newPasswordError.value = ''
  }
  if (!confirmNewPassword.value) {
    confirmNewPasswordError.value = 'Campo obrigatório'
  } else {
    confirmNewPasswordError.value = ''
  }

  if (oldPassword.value && newPassword.value && confirmNewPassword.value) {
    if (newPassword.value != confirmNewPassword.value) {
      confirmNewPasswordError.value = 'As senhas não coincidem'
      isValidForm.value = false
    } else {
      confirmNewPasswordError.value = ''
      isValidForm.value = true
    }
  } else {
    isValidForm.value = false
  }
})

const submitForm = () => {
  store
    .dispatch('login/updatePassword', {
      passwordNew: newPassword.value,
      passwordOld: oldPassword.value
    })
    .then(() => {
      oldPassword.value = ''
      newPassword.value = ''
      confirmNewPassword.value = ''
      genericError.value = ''
      isValidForm.value = false
      successMessage.value = 'Senha alterada com sucesso'
      setTimeout(() => {
        oldPasswordError.value = ''
        newPasswordError.value = ''
        confirmNewPasswordError.value = ''
      }, 20)
    })
    .catch((error) => {
      genericError.value = error.data.message
    })

  isValidForm.value = false
}
</script>
