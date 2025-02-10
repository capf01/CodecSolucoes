<template>
    <section id="services" class="services">
      <h2 class="services-title">Nossos Serviços</h2>
      
      <div class="services-grid">
        <div class="service-card">
          <h3 class="service-title">Desenvolvimento de Software</h3>
          <img src="@/assets/images/tecnologia_desenvolvimento_de_software.jpeg" alt="Desenvolvimento de Software" class="imgcard"/>
          <p class="service-text">Soluções personalizadas para sua empresa.</p>
        </div>
        <div class="service-card">
          <h3 class="service-title">Consultoria em TI</h3>
          <img src="@/assets/images/consultoria_em_ti.jpeg" alt="Consultoria em TI" class="imgcard"/>
          <p class="service-text">Otimização de processos e infraestrutura.</p>
        </div>
        <div class="service-card">
          <h3 class="service-title">Segurança da Informação</h3>
          <img src="@/assets/images/cadeado-seguranca-700x432.jpg" alt="Segurança da Informação" class="imgcard"/>
          <p class="service-text">Proteção de dados e sistemas.</p>
        </div>
        <div class="service-card">
          <h3 class="service-title">Criação de Sites</h3>
          <img src="@/assets/images/cria_o_de_sites.jpeg" alt="Criação de Sites" class="imgcard"/>
          <p class="service-text">Realizamos a criação de sites profissionais.</p>
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
    padding: 60px 20px;
    text-align: center;
    background: linear-gradient(135deg, #5d5b5b, #0a0a0a);
    color: #fff;
  }
  
  .services-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #ffffff, #dbdbdb);
  -webkit-background-clip: text; /* Prefixo para navegadores WebKit (Chrome, Safari) */
  background-clip: text; /* Propriedade padrão */
  -webkit-text-fill-color: transparent; /* Prefixo para navegadores WebKit */
  color: #f9f9fa;
  font-family: Arial, Helvetica, sans-serif;
}
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .service-card {
    padding: 20px;
    background: #2a2929;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .service-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  .service-card:hover::before {
    left: 100%;
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 123, 255, 0.5);
  }
  
  .service-title {
    font-size: 1.5rem;
    color: #f9f9fa;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
  
  .service-text {
    font-size: 1rem;
    color: #f9f9fa;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .imgcard {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
    transition: transform 0.3s ease;
  }
  
  .service-card:hover .imgcard {
    transform: scale(1.05);
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .services-title {
      font-size: 2rem;
    }
  
    .service-title {
      font-size: 1.3rem;
    }
  
    .service-text {
      font-size: 0.9rem;
    }
  
    .imgcard {
      height: 150px;
    }
  }
  
  @media (max-width: 480px) {
    .services-title {
      font-size: 1.8rem;
    }
  
    .service-title {
      font-size: 1.2rem;
    }
  
    .service-text {
      font-size: 0.8rem;
    }
  
    .imgcard {
      height: 120px;
    }
  }
  </style>