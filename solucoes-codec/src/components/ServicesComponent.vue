<template>
  <section id="services" class="services">
    <h2 class="section-title">Nossos Serviços</h2>
    
    <div class="services-grid">
      <div class="service-card">
        <h3 class="service-title">Desenvolvimento de Software</h3>
        <img src="@/assets/images/tecnologia_desenvolvimento_de_software.jpeg" alt="Desenvolvimento de Software" class="imgcard"/>
        <p class="service-text">Soluções personalizadas para sua empresa.</p>
        <router-link to="/servicos" class="saiba-mais-btn">Saiba Mais</router-link>
      </div>
      <div class="service-card">
        <h3 class="service-title">Consultoria em TI</h3>
        <img src="@/assets/images/consultoria_em_ti.jpeg" alt="Consultoria em TI" class="imgcard"/>
        <p class="service-text">Otimização de processos e infraestrutura.</p>
        <router-link to="/servicos" class="saiba-mais-btn">Saiba Mais</router-link>
      </div>
      <div class="service-card">
        <h3 class="service-title">Segurança da Informação</h3>
        <img src="@/assets/images/cadeado-seguranca-700x432.jpg" alt="Segurança da Informação" class="imgcard"/>
        <p class="service-text">Proteção de dados e sistemas.</p>
        <router-link to="/servicos" class="saiba-mais-btn">Saiba Mais</router-link>
      </div>
      <div class="service-card">
        <h3 class="service-title">Criação de Sites</h3>
        <img src="@/assets/images/cria_o_de_sites.jpeg" alt="Criação de Sites" class="imgcard"/>
        <p class="service-text">Realizamos a criação de sites profissionais.</p>
        <router-link to="/servicos" class="saiba-mais-btn">Saiba Mais</router-link>
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
  font-family: Arial, Helvetica, sans-serif;
  color: #618eff;
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
.services {
  padding: 60px 20px;
  text-align: center;
  background: linear-gradient(45deg, #1e1e2f 0%, #2a2a40 100%);
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

/* Estilo do botão "Saiba Mais" */
.saiba-mais-btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background: linear-gradient(145deg, #ff0033, #ff8c00);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 0, 51, 0.5);
}

.saiba-mais-btn:hover {
  background: linear-gradient(145deg, #001eff, #3300ff);
  box-shadow: 0 6px 15px rgba(255, 0, 51, 0.8);
  transform: translateY(-2px);
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