<template>
  <main class="ai-assist-container">
    <section class="text-center mb-5">
      <h2>Inteligência Artificial para auxiliar Corretores de Redação do ENEM</h2>
      <p>Bem-vindo à revolução na correção de redações! CorreNem é a solução inovadora que integra inteligência artificial ao processo de avaliação de redações.</p>
    </section>
    <section class="features-section">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-4">
            <div class="feature-box">
              <div class="icon-container">
                <img src="\public\cadeado.png" alt="Login Seguro e Intuitivo">
              </div>
              <h3>Login Seguro e Intuitivo</h3>
              <p>Garantimos a segurança dos dados dos professores com um sistema de login robusto, além de oferecer uma interface intuitiva para facilitar a navegação.</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="feature-box">
              <div class="icon-container">
                <img src="\public\blocos.png" alt="Dashboard de Gerenciamento">
              </div>
              <h3>Dashboard de Gerenciamento</h3>
              <p>Os professores têm acesso a um dashboard completo, onde podem adicionar novas redações, visualizar históricos e acessar as correções mais recentes de forma rápida e eficiente.</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="feature-box">
              <div class="icon-container">
                <img src="\public\notas.png" alt="Correção Automatizada com IA">
              </div>
              <h3>Correção Automatizada com IA</h3>
              <p>Utilizando inteligência artificial, destacamos trechos das redações que necessitam de correção e oferecemos sugestões para aprimoramento. O professor tem autonomia de editar as correções conforme necessário.</p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div class="feature-box">
              <div class="icon-container">
                <img src="\public\notas2.png" alt="Avaliação Baseada em Competências">
              </div>
              <h3>Avaliação Baseada em Competências</h3>
              <p>Avalia as redações com base em competências predefinidas, fornecendo ao professor uma visão clara do desempenho dos alunos em áreas específicas.</p>
            </div>
          </div>
        </div>
    </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ai-assist-container {
  .text-center {
    margin-top: 2rem;
    h2 {
      font-family: "Plein-Medium";
      font-style: normal;
      font-weight: 500;
      font-size: 23px;
      line-height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    p {
      font-family: "Switzer-Medium";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  
  .features-section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-around;

  .feature-box {
    background: linear-gradient(162.83deg, rgba(4, 72, 132, 0.3) -14.49%, rgba(236, 229, 240, 0.3) 88.2%);
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    padding: 1rem;
    text-align: center;
    min-width: 250px; // Isto pode ser um problema, tente comentar esta linha se problemas persistirem
    box-sizing: border-box;

    .icon-container {
      background-color: #eff3f6;
      border-radius: 50%; 
      width: 80px; 
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto 1rem;
      border: solid 3px #044884;

      img {
        width: 40px;
        height: 40px; 
      }
    }

      h3 {
        font-family: "Plein-Medium";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      p {
        font-size: 0.875rem;
        margin-bottom: 0;
        margin-bottom: 1rem;
        font-family: 'Switzer-Medium';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
      }
    }

    .feature-box {
      position: relative;
      background-color: #ffffff;
      border: 1px solid #dee2e6; 
      padding: 1rem;
      border-radius: 0.25rem; 
      min-height: 300px;
      
      &::after {
        content: '';
        position: absolute;
        top: 10px; 
        right: 10px; 
        bottom: 10px; 
        left: 10px;
        border-radius: inherit; 
        box-shadow: inset 0 0 0 2px #044884; 
        pointer-events: none; 
      }
    }
  }
}
</style>
