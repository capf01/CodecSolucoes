<template>
    <section id="about" class="about">
      <h2 class="about-title">Sobre Nós</h2>
      <div class="about-content">
        <p class="about-text">
          A CODEC Soluções Tecnológicas é especializada em oferecer soluções inovadoras e personalizadas para empresas de todos os tamanhos. Nossa missão é transformar ideias em realidade através da tecnologia.
        </p>
        <img src="@/assets/images/imagem_de_fundo_para_o_site_codec.jpeg" alt="Sobre a CODEC" class="about-image" />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutComponent",
  };
  </script>
  
  <style scoped>
  .about {
    padding: 40px 20px;
    text-align: center;
    background-color: #fff;
  }
  
  .about-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .about-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .about-text {
    font-size: 1.2rem;
    color: #333;
    text-align: left;
    max-width: 500px;
  }
  
  .about-image {
    max-width: 400px;
    border-radius: 10px;
  }
  
  @media (max-width: 768px) {
    .about-content {
      flex-direction: column;
    }
  
    .about-text {
      text-align: center;
    }
  }
  </style>