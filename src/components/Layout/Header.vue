<template>
  <div class="holder">
    <div class="spacer">
      <!-- empty div to keep the header fixed -->
    </div>
    <div class="header">
      <div class="container">
        <BasicLogo />
        <div class="right-side">
          <div :class="['hamburguer', { active: showMenu }]" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div :class="['menu', { active: showMenu }]" @click="menuClick">
            <!-- menu sem estar logado -->
            <RouterLink to="/login" class="menu-item" v-if="!isLogged"> Acessar </RouterLink>
            <RouterLink to="/register" class="menu-item btn-padrao" v-if="!isLogged">
              Registrar
            </RouterLink>

            <!-- menu logado -->
            <RouterLink to="/redacoes" class="menu-item" v-if="isLogged">
              Suas Redações
            </RouterLink>
            <RouterLink to="/perfil" class="menu-item" v-if="isLogged"> Perfil </RouterLink>
            <RouterLink to="/nova-redacao" class="menu-item btn-padrao" v-if="isLogged">
              Nova Redação
              <svg
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 2C0 0.89543 0.895431 0 2 0H10L14 4V15C14 16.1046 13.1046 17 12 17H2C0.89543 17 0 16.1046 0 15V2ZM6 7H8V10H11V12H8V15H6V12H3V10H6V7ZM13 5H9V1L13 5Z"
                  fill="#FBF7EF"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed, ref } from 'vue'
import BasicLogo from '@/components/Basic/Logo.vue'
import { useStore } from 'vuex'

const store = useStore()

const isLogged = computed(() => store.state.login.isLogged)

const showMenu = ref(false)

function menuClick(e: Event) {
  if ((e.target as HTMLElement).tagName === 'A') {
    showMenu.value = false
    document.body.style.overflow = 'auto'
  }
}

function toggleMenu() {
  showMenu.value = !showMenu.value
  if (showMenu.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    showMenu.value = false
    document.body.style.overflow = 'auto'
  }
})
</script>

<style lang="scss" scoped>
.hamburguer {
  @media (min-width: 992px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  span {
    width: 100%;
    height: 3px;
    background-color: var(--black);
    transition: all 0.4s ease-in-out;
    &:nth-child(1) {
      transform: translateY(0);
    }
    &:nth-child(2) {
      transform: translateY(0);
    }
    &:nth-child(3) {
      transform: translateY(0);
    }
  }
  &.active {
    span {
      &:nth-child(1) {
        transform: translateY(8.4px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }
}
@media (max-width: 992px) {
  .menu {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
    left: 0;
    top: 0;
    margin-top: 77px;
    width: 100%;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 64px);
    padding-top: 30px;
    .menu-item {
      margin-block: 10px;
      margin-left: 0;
    }
    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 30;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #ece5f0 5.27%, #044884 100%);
    opacity: 0.3;
    height: 100%;
    border-bottom: 1px solid #044884;
    z-index: -1;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding-block: 10px;
  }
}
.spacer {
  height: 84px;
}

.menu-item {
  color: var(--black);
  font-family: 'Plein-Medium';
  font-size: 1.2rem;
  text-decoration: none;
  margin-left: 1.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background-color: var(--blue);
    transition: width 0.4s;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:hover::after {
    width: 100%;
  }
  &.btn-padrao {
    background-color: var(--blue);
    color: var(--white);
    &::after {
      bottom: -1px;
    }
    &:hover {
      color: var(--blue);
      background-color: transparent;
    }
  }
}
</style>
