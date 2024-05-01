<template>
  <div class="features-section">
    <div class="text-center mb-5">
      <h2>Inteligência Artificial para auxiliar Corretores de Redação do ENEM</h2>
      <p>
        Bem-vindo à revolução na correção de redações! Correnem é a solução inovadora que integra
        inteligência artificial ao processo de avaliação de redações.
      </p>
    </div>
    <div>
      <div class="container">
        <div class="features-grid">
          <ItemsFeature
            title="Login Seguro e Intuitivo"
            content="Garantimos a segurança dos dados dos professores com um sistema de login robusto, além de oferecer uma interface intuitiva para facilitar a navegação."
            img="\public\cadeado.svg"
            alt="Login Seguro e Intuitivo"
          />
          <ItemsFeature
            title="Dashboard de Gerenciamento"
            content="Os professores têm acesso a um dashboard completo, onde podem adicionar novas redações, visualizar históricos e acessar as correções mais recentes de forma rápida e eficiente."
            img="\public\blocos.svg"
            alt="Dashboard de Gerenciamento"
          />
          <ItemsFeature
            title="Correção Automatizada com IA"
            content="Utilizando inteligência artificial, destacamos trechos das redações que necessitam de correção e oferecemos sugestões para aprimoramento. O professor tem autonomia de editar as correções conforme necessário."
            img="\public\notas.svg"
            alt="Correção Automatizada com IA"
          />
          <ItemsFeature
            title="Avaliação Baseada em Competências"
            content="Avalia as redações com base em competências predefinidas, fornecendo ao professor uma visão clara do desempenho dos alunos em áreas específicas."
            img="\public\notas2.png"
            alt="Avaliação Baseada em Competências"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemsFeature from '@/components/Items/Feature.vue'
</script>

<style lang="scss" scoped>
.features-section {
  padding-block: 60px;
}
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
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}
</style>
