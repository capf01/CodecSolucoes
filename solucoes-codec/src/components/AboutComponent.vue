<template>
    <section id="about" class="about">
      <h2 class="section-title">Sobre Nós</h2>
      <div class="about-content">
        <p class="about-text">
          A CODEC Soluções Tecnológicas é especializada em oferecer soluções inovadoras e personalizadas para empresas de todos os tamanhos. 
          Nossa missão é transformar ideias em realidade através da tecnologia.
        </p>
        <img 
          src="@/assets/images/image-removebg-preview (16).png" 
          alt="Sobre a CODEC" 
          class="about-image" 
          loading="lazy" 
        />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutComponent",
  };
  </script>
  
  <style scoped>
   @keyframes floatTitle {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-40px);
    }
  }
  .section-title {
    font-size: 3rem;
    color: #618eff;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 3rem;
    font-weight: 700;
    letter-spacing: -1px;
    position: relative;
    display: inline-block;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: floatTitle 3s ease-in-out infinite;
  }
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #618eff;
    border-radius: 2px;
  }
 .about {
    padding: 60px 20px;
    text-align: center;
    background: linear-gradient(45deg, #1e1e2f 0%, #2a2a40 100%);
    color: #ffffff;
  }
  
  .about-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .about-text {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #e0e0e0;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    max-width: 600px;
  }
  
  .about-image {
    max-width: 450px;
    width: 100%;
    background-color: #423eac;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .about-image:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    .about-content {
      flex-direction: column;
      gap: 30px;
    }
  
    .about-text {
      text-align: center;
      font-size: 1.1rem;
    }
  
    .about-image {
      max-width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    .about-title {
      font-size: 2rem;
    }
  
    .about-text {
      font-size: 1rem;
    }
  }
  </style>