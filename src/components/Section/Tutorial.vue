<template>
  <div class="tutorial-section">
    <div class="text-center">
      <h2>Como funciona o Correnem ?</h2>
    </div>
    <div class="container">
      <div class="slides">
        <div
          :class="['slide', curActive === 1 ? 'active' : '', curInactive === 1 ? 'inactive' : '']"
        >
          <div class="icones-primeira">
            <div class="item">
              <img src="/notas.svg" alt="Notas" />
              <h3>Texto</h3>
            </div>
            <div class="item">
              <img src="/camera.svg" alt="Camera" />
              <h3>Escanear</h3>
            </div>
            <div class="item">
              <img src="/galeria.svg" alt="Galeria" />
              <h3>Foto</h3>
            </div>
            <svg
              width="45"
              height="77"
              viewBox="0 0 45 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="cursor"
            >
              <path
                d="M0 58.8772V2.64974C0 0.893867 2.10081 -0.00975621 3.37549 1.19783L44.2793 39.9488C45.53 41.1337 44.797 43.2403 43.0808 43.3928L27.8359 44.7479C26.4557 44.8706 25.6154 46.3255 26.1989 47.5823L37.1438 71.1559C37.6144 72.1694 37.1632 73.3719 36.1421 73.8257L30.8483 76.1785C29.8309 76.6307 28.6401 76.165 28.1994 75.1426L17.6283 50.6178C17.0795 49.3444 15.433 49.0024 14.4224 49.9517L3.36935 60.3349C2.09253 61.5343 0 60.629 0 58.8772Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="generic-card">
            <p>Escolha uma forma de envio</p>
          </div>
        </div>
        <div
          :class="['slide', curActive === 2 ? 'active' : '', curInactive === 2 ? 'inactive' : '']"
        >
          <div class="anim-segunda">
            <div class="input">Arraste aqui o Arquivo</div>
            <svg
              class="file"
              width="64"
              height="80"
              viewBox="0 0 64 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.87695 0H41.0945L64 21.895V72.4707C64 76.6289 60.4734 80 56.123 80H7.87695C3.52661 80 0 76.6289 0 72.4707V7.5293C0 3.37109 3.52661 0 7.87695 0ZM57 22L41 7V22H57ZM16 40H48V48H16V40ZM48 56H16V64H48V56Z"
                fill="#044884"
              />
            </svg>
          </div>
          <div class="generic-card">
            <p>Envie a redação</p>
          </div>
        </div>
        <div
          :class="['slide', curActive === 3 ? 'active' : '', curInactive === 3 ? 'inactive' : '']"
        >
          <div class="nota-final mb-5">
            <CardNotaCompetencia
              title="Nota Final"
              tooltip="Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista."
              nota="1000"
              maxNota="1000"
              :delay="700"
              class="resultado"
              infinity
            />
          </div>
          <div class="generic-card">
            <p>Veja a correção da IA e faça os ajustes necessários</p>
          </div>
        </div>
      </div>
      <div class="options mb-4">
        <div
          v-for="index in length"
          :key="index"
          :class="['option', curActive === index ? 'active' : '']"
        >
          {{ index }}
        </div>
      </div>
      <div class="result">
        <div :class="['bar', start === true ? 'active' : '']"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardNotaCompetencia from '@/components/Items/CardNotaCompetencia.vue'

let length = 3
let curActive = ref(1)
let curInactive = ref(3)
let start = ref(false)
let timer: any = ref(null)
let duration = 5000

function changeActive(index: number | null = null) {
  timer.value && clearTimeout(timer.value)

  let next = index ? index : curActive.value + 1
  if (next > length) next = 1
  timer.value = setTimeout(() => {
    changeActive()
  }, duration)
  curInactive.value = curActive.value
  curActive.value = next
  if (start.value) start.value = false

  setTimeout(() => {
    start.value = true
  }, 100)
}

changeActive()

let btns = document.querySelectorAll('.option')
btns.forEach((btn: any) => {
  btn.addEventListener('click', () => {
    changeActive(parseInt(btn.innerText))
  })
})
</script>

<style lang="scss" scoped>
.text-center {
  h2 {
    font-family: 'Plein-Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 32px;
  }
  p {
    font-family: 'Switzer-Medium';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 21px;
    text-align: center;
    max-width: 800px;
    margin-inline: auto;
  }
}

.icones-primeira {
  opacity: 0.85;
  display: flex;
  justify-content: space-evenly;
  height: 90%;
  align-items: center;
  margin-top: 20px;
  img {
    width: 50px;
    height: 50px;
    &:not(.cursor) {
      animation: grow-shrink-img 1.8s infinite;
      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          animation-delay: #{$i * 0.3}s;
        }
      }
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      font-family: 'Plein-Bold';
      font-size: 1.2rem;
      margin-top: 10px;
      color: var(--blue);
    }
  }
  .cursor {
    position: absolute;
    left: -10px;
    opacity: 0;
    animation: cursor-primeira 5s infinite;
  }
}

@keyframes grow-shrink-img {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.anim-segunda {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 100%;
  .input {
    width: 50%;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed var(--blue);
    border-radius: 5px;
    font-family: 'Plein-Bold';
    font-size: 1.2rem;
    color: var(--blue);
    padding-block: 30px;
  }
  svg.file {
    position: absolute;
    left: -25%;
    animation: cursor-segunda 5s infinite;
  }
}

@keyframes cursor-primeira {
  0% {
    opacity: 0;
    left: 0%;
  }
  10% {
    opacity: 1;
    transform: translateY(-50%);
  }
  50% {
    opacity: 1;
    left: 75%;
    scale: 1;
    transform: translateY(40%);
  }
  55% {
    opacity: 1;
    left: 75%;
    scale: 1.2;
    transform: translateY(40%);
  }
  60% {
    opacity: 1;
    left: 75%;
    scale: 1;
    transform: translateY(40%);
  }
  70% {
    opacity: 0;
    scale: 1;
    transform: translateY(40%);
  }
  100% {
    left: 75%;
  }
}

@keyframes cursor-segunda {
  0% {
    opacity: 0;
    left: 120%;
  }
  10% {
    opacity: 1;
    left: 120%;
    transform: translateY(-50%);
  }
  70% {
    opacity: 1;
    left: 30%;
    scale: 1;
    transform: translateY(-30%) rotate(0deg);
  }
  85% {
    opacity: 0;
    left: 30%;
    scale: 0;
    transform: translateY(20%) rotate(-45deg);
  }
  100% {
    opacity: 0;
    left: 30%;
    scale: 1;
    transform: translateY(20%) rotate(-45deg);
  }
}

.slides {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  height: 500px;
  position: relative;
  .slide {
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    visibility: hidden;
    width: 100%;
    min-width: 100%;
    opacity: 0;
    transition: all 1s ease-in-out;
  }
  .active {
    left: 0;
    opacity: 1;
    visibility: visible;
  }
  .inactive {
    left: 100%;
    opacity: 0;
    visibility: hidden;
  }
  .generic-card {
    width: fit-content;
    padding: 30px;
    margin-inline: auto;
    min-width: 300px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    p {
      margin-bottom: 0;
      text-align: center;
    }
  }
}

.tutorial-section {
  padding-block: 60px;
}

.result {
  width: 100%;
  min-width: 100%;
  .bar {
    width: 0px;
    background-color: var(--blue);
    height: 5px;
    transition: all 0s ease-in-out;
    &.active {
      transition: all 5s linear;
      width: 100%;
    }
  }
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .option {
    &:not(:last-child) {
      margin-right: 10px;
    }
    font-family: 'Plein-Bold';
    font-size: 2rem;
    line-height: 40px;
    padding-bottom: 5px;
    color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 2px;
    border: 3px solid var(--blue);
    transition: all 0.3s ease-in-out;
    &.active {
      background-color: var(--blue);
      color: var(--white);
    }
  }
}

.nota-final {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  .resultado {
    margin-bottom: 160px;
  }
}
</style>
