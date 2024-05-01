<template>
  <LayoutBreadcrumb :breadcrumbs="breadcrumbs" title="Cadastrando Nova Redação" />
  <div class="container">
    <div class="redacoes">
      <h2>Em qual formato você gostaria de enviar sua redação?</h2>
      <div class="grid-options">
        <ItemsCardNewRedacao
          text="Colar ou digitar texto da redação"
          btnText="Texto"
          to="/nova-redacao/texto"
        >
          <template v-slot:svg>
            <svg
              width="40"
              height="39"
              viewBox="0 0 40 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 0C2.23858 0 0 2.23858 0 5V31C0 33.7614 2.23858 36 5 36H31L20.7014 25.7014V19.7014H26.7014L37 30V5C37 2.23858 34.7614 0 32 0H5ZM31 5H6V9H31V5ZM6 13H17V17H6V13Z"
                fill="#044884"
              />
              <path
                d="M22.7678 25.3033V21.7678H26.3033L36.2028 31.6673L32.6673 35.2028L22.7678 25.3033Z"
                fill="#044884"
              />
              <path
                d="M33.7279 36.2635L37.2634 32.7279L38.6777 34.1421C39.0682 34.5327 39.0682 35.1658 38.6777 35.5563L36.5563 37.6777C36.1658 38.0682 35.5326 38.0682 35.1421 37.6777L33.7279 36.2635Z"
                fill="#044884"
              />
            </svg>
          </template>
        </ItemsCardNewRedacao>
        <ItemsCardNewRedacao
          text="Usar a câmera desse dispositivo para tirar uma foto da redação"
          btnText="Escanear"
          to="/nova-redacao/texto"
        >
          <template v-slot:svg>
            <svg
              width="32"
              height="29"
              viewBox="0 0 32 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 3C1.79086 3 0 4.79086 0 7V25C0 27.2091 1.79086 29 4 29H28C30.2091 29 32 27.2091 32 25V7C32 4.79086 30.2091 3 28 3H25.1569C24.096 3 23.0786 2.57857 22.3284 1.82843L21.6716 1.17157C20.9214 0.421427 19.904 0 18.8431 0H12.1569C11.096 0 10.0786 0.421428 9.32843 1.17157L8.67157 1.82843C7.92143 2.57857 6.90401 3 5.84315 3H4ZM8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16ZM11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16Z"
                fill="#044884"
              />
            </svg>
          </template>
        </ItemsCardNewRedacao>
        <ItemsCardNewRedacao
          text="Já tem a foto da redação, precisa apenas enviar"
          btnText="Enviar foto"
          to="/nova-redacao/texto"
        >
          <template v-slot:svg>
            <svg
              width="33"
              height="29"
              viewBox="0 0 33 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 25V28.5H30C31.5 28.5 33 27.5 33 25.5V6H29.5V25H6Z" fill="#044884" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 0C0.895431 0 0 0.89543 0 2V20C0 21.1046 0.89543 22 2 22H24C25.1046 22 26 21.1046 26 20V2C26 0.895431 25.1046 0 24 0H2ZM3 3H23V14C23 13.6 20.6667 11.5 19.5 10.5L13 16.5L11 14.5L13.5 12L10 8.5L3 15.5V3Z"
                fill="#044884"
              />
            </svg>
          </template>
        </ItemsCardNewRedacao>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutBreadcrumb from '@/components/Layout/Breadcrumb.vue'
import ItemsCardNewRedacao from '@/components/Items/CardNewRedacao.vue'
import { type Breadcrumb } from '@/types/Breadcrumb'

const breadcrumbs: Breadcrumb[] = []
</script>

<style lang="scss" scoped>
h2 {
  font-size: 21px;
  font-family: 'Plein-Medium';
  font-weight: 400;
  margin-bottom: 1rem;
}
.grid-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-block: 20px 60px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}
</style>
