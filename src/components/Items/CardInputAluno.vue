<template>
  <div class="card-aluno">
    <div class="abas">
      <div :class="['aba', 'aba-old', isNew ? '' : 'active']" @click="changeIsNew(false)">
        <span> Selecionar Aluno </span>
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1516 6.08634C15.9682 6.13729 14.1239 6.93207 12.0503 7.84912C9.30935 9.06676 8.23945 9.56095 8.14265 9.66794C8.03566 9.78002 8 9.86663 8 10.0195C8 10.3761 8.09171 10.4321 10.3945 11.446C11.5561 11.9606 12.5394 12.4038 12.5751 12.4293C12.6209 12.4649 12.6362 12.7757 12.6362 13.6724C12.6362 15.0021 12.6872 15.3842 12.9521 16.0211C13.3393 16.9534 14.0933 17.7686 14.9849 18.2169C15.7083 18.5786 16.1719 18.6907 16.9413 18.6958C18.1181 18.6958 19.0861 18.3239 19.9064 17.5393C20.3649 17.1062 20.6808 16.6834 20.91 16.1739C21.231 15.481 21.2565 15.3231 21.2922 13.815L21.3227 12.4395L22.6474 11.8434C23.3759 11.5173 23.9873 11.2473 24.0127 11.2473C24.0331 11.2422 24.0484 12.358 24.0484 13.7182C24.0484 15.8988 24.0586 16.2147 24.1299 16.3675C24.2522 16.6222 24.4764 16.7598 24.8075 16.7853C25.1438 16.8057 25.373 16.6834 25.5463 16.3879C25.6481 16.2147 25.6532 16.1281 25.6685 13.3616L25.6838 10.5137L25.8061 10.3659C25.9844 10.1519 25.9793 9.86663 25.7959 9.66794C25.6889 9.55585 24.6751 9.08714 21.8526 7.83383C19.7434 6.9015 17.9042 6.11691 17.7258 6.07106C17.2928 5.96916 16.5642 5.97935 16.1516 6.08634Z"
            fill="black"
          />
          <path
            d="M13.2478 20.0204C12.0658 20.3872 10.8889 21.019 10.0381 21.7526C8.57594 23.0161 7.90853 24.8961 8.48423 26.1596C8.62688 26.4703 9.04465 26.9289 9.34524 27.1072C9.85981 27.4078 9.47261 27.3976 17.0739 27.3823L24.0232 27.367L24.3187 27.2498C24.6855 27.1021 25.1949 26.6385 25.3936 26.2767C25.5872 25.915 25.6942 25.375 25.6484 24.9266C25.4853 23.1893 24.2422 21.6507 22.1636 20.6216C21.3331 20.2089 20.5536 19.9389 20.2021 19.9389C20.0391 19.9338 19.876 19.9746 19.7436 20.0408C19.6315 20.1019 19.1067 20.591 18.5718 21.126C17.5478 22.1602 17.3643 22.2978 16.967 22.2978C16.5696 22.2978 16.3862 22.1602 15.3621 21.126C14.8323 20.591 14.3126 20.107 14.2056 20.0561C13.9101 19.8981 13.6707 19.893 13.2478 20.0204Z"
            fill="black"
          />
        </svg>
      </div>
      <div :class="['aba', 'aba-new', { active: isNew }]" @click="changeIsNew(true)">
        <span> Adicionar Aluno </span>
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1516 6.08634C10.9682 6.13729 9.12387 6.93207 7.05031 7.84912C4.30935 9.06676 3.23945 9.56095 3.14265 9.66794C3.03566 9.78002 3 9.86663 3 10.0195C3 10.3761 3.09171 10.4321 5.39452 11.446C6.55612 11.9606 7.53941 12.4038 7.57507 12.4293C7.62092 12.4649 7.63621 12.7757 7.63621 13.6724C7.63621 15.0021 7.68715 15.3842 7.95208 16.0211C8.33928 16.9534 9.0933 17.7686 9.98488 18.2169C10.7083 18.5786 11.1719 18.6907 11.9413 18.6958C13.1181 18.6958 14.0861 18.3239 14.9064 17.5393C15.3649 17.1062 15.6808 16.6834 15.91 16.1739C16.231 15.481 16.2565 15.3231 16.2922 13.815L16.3227 12.4395L17.6474 11.8434C18.3759 11.5173 18.9873 11.2473 19.0127 11.2473C19.0331 11.2422 19.0484 12.358 19.0484 13.7182C19.0484 15.8988 19.0586 16.2147 19.1299 16.3675C19.2522 16.6222 19.4764 16.7598 19.8075 16.7853C20.1438 16.8057 20.373 16.6834 20.5463 16.3879C20.6481 16.2147 20.6532 16.1281 20.6685 13.3616L20.6838 10.5137L20.8061 10.3659C20.9844 10.1519 20.9793 9.86663 20.7959 9.66794C20.6889 9.55585 19.6751 9.08714 16.8526 7.83383C14.7434 6.9015 12.9042 6.11691 12.7258 6.07106C12.2928 5.96916 11.5642 5.97935 11.1516 6.08634Z"
            fill="black"
          />
          <path
            d="M8.2478 20.0204C7.06583 20.3872 5.88894 21.019 5.03812 21.7526C3.57594 23.0161 2.90853 24.8961 3.48423 26.1596C3.62688 26.4703 4.04465 26.9289 4.34524 27.1072C4.85981 27.4078 4.47261 27.3976 12.0739 27.3823L19.0232 27.367L19.3187 27.2498C19.6855 27.1021 20.1949 26.6385 20.3936 26.2767C20.5872 25.915 20.6942 25.375 20.6484 24.9266C20.4853 23.1893 19.2422 21.6507 17.1636 20.6216C16.3331 20.2089 15.5536 19.9389 15.2021 19.9389C15.0391 19.9338 14.876 19.9746 14.7436 20.0408C14.6315 20.1019 14.1067 20.591 13.5718 21.126C12.5478 22.1602 12.3643 22.2978 11.967 22.2978C11.5696 22.2978 11.3862 22.1602 10.3621 21.126C9.83227 20.591 9.3126 20.107 9.20561 20.0561C8.91012 19.8981 8.67067 19.893 8.2478 20.0204Z"
            fill="black"
          />
          <rect x="23" y="13.8" width="7" height="1.4" rx="0.7" fill="black" />
          <rect
            x="27.2998"
            y="11"
            width="7"
            height="1.4"
            rx="0.7"
            transform="rotate(90 27.2998 11)"
            fill="black"
          />
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="content-old" v-if="!isNew">
        <div class="holder" v-if="students.length > 0">
          <h5>Selecione um de seus alunos:</h5>
          <div class="alunos-grid">
            <div
              v-for="(student, index) in students"
              :key="index"
              :class="['aluno', selectedAluno === student.nome ? 'active' : '']"
              @click="changeAluno(student)"
            >
              <p>
                {{ student.nome }}
              </p>
            </div>
          </div>
        </div>
        <div class="aviso" v-else>
          <p>Nenhum aluno cadastrado</p>
        </div>
      </div>
      <div class="content-new" v-else>
        <h5>Digite o nome do aluno:</h5>
        <input type="text" v-model="novoAluno" placeholder="Nome do aluno" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['change-aluno'])

const isNew = ref<boolean>(false)
let students = ref<any[any]>([])
const props = defineProps({
  initial: String | null
})
const selectedAluno = ref<string>('')

onMounted(async () => {
  await store.dispatch('students/getStudents').then((studentsRes) => {
    students.value = studentsRes.data.alunos
  })

  if (students.value.length === 0) {
    isNew.value = true
  }

  if (props.initial) {
    selectedAluno.value = props.initial
  }
})

const changeIsNew = (value: boolean) => {
  isNew.value = value
  if (value) {
    emit('change-aluno', novoAluno.value)
  } else {
    emit('change-aluno', selectedAluno.value)
  }
}

const novoAluno = ref<string>('')

const changeAluno = (student: any) => {
  selectedAluno.value = student.nome
  emit('change-aluno', student.nome)
}

watch(novoAluno, () => {
  emit('change-aluno', novoAluno.value)
})
</script>

<style scoped lang="scss">
.card-aluno {
  h5 {
    font-size: 1.1rem;
    font-family: 'Plein-Medium';
    font-weight: 400;
    margin-bottom: 10px;
  }
  .abas {
    display: flex;
    .aba {
      width: 100%;
      position: relative;
      padding: 4px;
      text-align: center;
      transition: all 0.3s ease-in-out;
      svg {
        transition: all 0.3s ease-in-out;
      }
      &:not(.active):hover {
        cursor: pointer;
        svg {
          scale: 1.1;
        }
      }
      &::after {
        content: '';
        position: absolute;
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        left: 4px;
        top: 4px;
        border: 1px solid var(--blue);
        transition: all 0.3s ease-in-out;
      }
      &.active {
        background-color: var(--white);
        border-radius: 5px 5px 0 0;
        &::after {
          opacity: 0;
        }
        svg {
          fill: white;
        }
      }
    }
  }

  .content {
    padding: 10px 20px 20px;
    background-color: var(--white);
    border-radius: 0 0 5px 5px;
  }

  .aviso {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    p {
      font-size: 1.2rem;
      font-family: 'Plein-Medium';
      padding-block: 50px;
      color: var(--gray);
    }
  }
}

.alunos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  gap: 10px;
  .aluno {
    padding: 10px;
    border-radius: 2px;
    background-color: transparent;
    color: var(--black);
    border: 1px solid var(--blue);
    font-size: 1.2rem;
    font-family: 'Plein-Medium';
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    p {
      text-transform: capitalize;
      margin-bottom: 0;
      text-align: center;
    }
    &.active {
      background-color: var(--blue);
      color: white;
    }
    &:not(.active):hover {
      cursor: pointer;
      background-color: #04488452;
    }
  }
}

input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--gray);
  font-size: 1rem;
  font-family: 'Switzer-Medium';
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #04488470;
  }
}
</style>
