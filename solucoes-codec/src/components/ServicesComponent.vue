<template>
    <section id="services" class="services">
      <h2 class="services-title">Nossos Serviços</h2>
      <div class="services-grid">
        <div class="service-card">
          <h3 class="service-title">Desenvolvimento de Software</h3>
          <p class="service-text">Soluções personalizadas para sua empresa.</p>
        </div>
        <div class="service-card">
          <h3 class="service-title">Consultoria em TI</h3>
          <p class="service-text">Otimização de processos e infraestrutura.</p>
        </div>
        <div class="service-card">
          <h3 class="service-title">Segurança da Informação</h3>
          <p class="service-text">Proteção de dados e sistemas.</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ServicesComponent",
  };
  </script>
  
  <style scoped>
  .services {
    padding: 40px 20px;
    text-align: center;
    background-color: #f9f9f9;
  }
  
  .services-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .service-card {
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-10px);
  }
  
  .service-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .service-text {
    font-size: 1rem;
    color: #666;
  }
  </style>