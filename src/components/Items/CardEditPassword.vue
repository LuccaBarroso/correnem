<template>
  <ProfileCard>
    <template #title>
      <strong>Editar senha</strong>
    </template>
    <template #form>
      <form @submit.prevent="submitForm">
        <div class="form-group mb-3">
          <label for="oldPassword">Senha Atual:</label>
          <div class="input-holder" :class="{ error: oldPasswordError }">
            <input
              type="password"
              id="oldPassword"
              placeholder="Sua senha atual"
              v-model="oldPassword"
              class="w-100"
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
            />
          </div>
          <div class="error-input" v-if="confirmNewPasswordError">
            {{ confirmNewPasswordError }}
          </div>
        </div>

        <div class="error-input" v-if="genericError">{{ genericError }}</div>
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
      </form>
    </template>
  </ProfileCard>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { ref } from 'vue'
import ProfileCard from '@/components/Items/ProfileCard.vue'

const store = useStore()

const oldPassword = ref('')
const oldPasswordError = ref('')
const newPassword = ref('')
const newPasswordError = ref('')
const confirmNewPassword = ref('')
const confirmNewPasswordError = ref('')

const genericError = ref('')
const isValidForm = ref(false)

const submitForm = () => {
  if (!name.value) {
    nameError.value = 'Campo obrigatório'
  } else {
    nameError.value = ''
  }

  if (nameError.value) {
    return
  }

  isValidForm.value = true
}
</script>
