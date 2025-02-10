<template>
    <div class="servicos-page">
      <h1 class="page-title">Nossos Serviços</h1>
      <p class="page-description">Nossa empresa oferece soluções tecnológicas inovadoras para empresas e indivíduos. Confira abaixo nossos principais serviços:</p>
  
      <div class="servicos-grid">
        <!-- Desenvolvimento de Software -->
        <div class="servico-card">
          <h2 class="servico-title">Desenvolvimento de Software</h2>
          <p class="servico-text">
            Criamos soluções personalizadas para atender às necessidades do seu negócio. Desde aplicativos móveis até sistemas de gestão empresarial, nossa equipe desenvolve softwares sob medida para otimizar seus processos e aumentar sua produtividade.
          </p>
          <ul class="servico-beneficios">
            <li>Aplicativos móveis e desktop</li>
            <li>Sistemas de gestão integrada (ERP)</li>
            <li>Automação de processos</li>
            <li>Desenvolvimento ágil e escalável</li>
          </ul>
          <div class="servico-icon">💻</div>
        </div>
  
        <!-- Consultoria em TI -->
        <div class="servico-card">
          <h2 class="servico-title">Consultoria em TI</h2>
          <p class="servico-text">
            Oferecemos consultoria especializada para ajudar sua empresa a implementar as melhores práticas de TI. Nossa equipe analisa sua infraestrutura, identifica oportunidades de melhoria e propõe soluções para aumentar a eficiência e reduzir custos.
          </p>
          <ul class="servico-beneficios">
            <li>Análise de infraestrutura de TI</li>
            <li>Planejamento estratégico de tecnologia</li>
            <li>Migração para a nuvem</li>
            <li>Otimização de processos</li>
          </ul>
          <div class="servico-icon">📊</div>
        </div>
  
        <!-- Segurança da Informação -->
        <div class="servico-card">
          <h2 class="servico-title">Segurança da Informação</h2>
          <p class="servico-text">
            Protegemos seus dados e sistemas contra ameaças cibernéticas. Implementamos soluções de segurança robustas, como firewalls, criptografia e monitoramento em tempo real, para garantir a integridade e confidencialidade das suas informações.
          </p>
          <ul class="servico-beneficios">
            <li>Proteção contra malware e ransomware</li>
            <li>Gestão de vulnerabilidades</li>
            <li>Backup e recuperação de dados</li>
            <li>Treinamento em conscientização de segurança</li>
          </ul>
          <div class="servico-icon">🔒</div>
        </div>
  
        <!-- Criação de Sites -->
        <div class="servico-card">
          <h2 class="servico-title">Criação de Sites</h2>
          <p class="servico-text">
            Desenvolvemos sites profissionais, responsivos e otimizados para SEO. Seja um site institucional, uma loja virtual ou um blog, criamos a presença online perfeita para sua marca, garantindo uma experiência excepcional para seus usuários.
          </p>
          <ul class="servico-beneficios">
            <li>Design moderno e responsivo</li>
            <li>E-commerce integrado</li>
            <li>Otimização para motores de busca (SEO)</li>
            <li>Integração com redes sociais</li>
          </ul>
          <div class="servico-icon">🌐</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicosPage',
  };
  </script>
  
  <style scoped>
  /* Estilo geral da página */
  .servicos-page {
    padding: 60px 20px;
    background: linear-gradient(145deg, #1e1e2f, #2a2a40);
    color: #fff;
    text-align: center;
  }
  
  /* Título da página */
  .page-title {
    font-size: 3rem;
    font-weight: bold;
    color: #ffeb3b; /* Amarelo neon */
    text-shadow: 0 0 10px rgba(255, 235, 59, 0.8), 0 0 20px rgba(255, 235, 59, 0.6);
    margin-bottom: 20px;
    animation: glow 2s infinite alternate;
  }
  
  @keyframes glow {
    0% {
      text-shadow: 0 0 10px rgba(255, 235, 59, 0.8), 0 0 20px rgba(255, 235, 59, 0.6);
    }
    100% {
      text-shadow: 0 0 15px rgba(255, 235, 59, 1), 0 0 30px rgba(255, 235, 59, 0.8);
    }
  }
  
  /* Descrição da página */
  .page-description {
    font-size: 1.2rem;
    color: #e0e0e0;
    margin-bottom: 40px;
  }
  
  /* Grid de serviços */
  .servicos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Card de serviço */
  .servico-card {
    padding: 20px;
    background: #2a2929;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .servico-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  .servico-card:hover::before {
    left: 100%;
  }
  
  .servico-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 123, 255, 0.5);
  }
  
  /* Título do serviço */
  .servico-title {
    font-size: 1.5rem;
    color: #00ff88; /* Verde neon */
    text-shadow: 0 0 10px rgba(0, 255, 136, 0.8);
    margin-bottom: 10px;
  }
  
  /* Texto do serviço */
  .servico-text {
    font-size: 1rem;
    color: #e0e0e0;
    margin-bottom: 15px;
  }
  
  /* Benefícios do serviço */
  .servico-beneficios {
    text-align: left;
    margin: 15px 0;
    padding-left: 20px;
    list-style-type: disc;
    color: #e0e0e0;
  }
  
  .servico-beneficios li {
    margin-bottom: 8px;
  }
  
  /* Ícone do serviço */
  .servico-icon {
    font-size: 3rem;
    color: #ff8c00; /* Laranja neon */
    text-shadow: 0 0 10px rgba(255, 140, 0, 0.8);
    margin-top: 10px;
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .page-title {
      font-size: 2.5rem;
    }
  
    .page-description {
      font-size: 1rem;
    }
  
    .servico-title {
      font-size: 1.3rem;
    }
  
    .servico-text {
      font-size: 0.9rem;
    }
  
    .servico-icon {
      font-size: 2.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .page-title {
      font-size: 2rem;
    }
  
    .page-description {
      font-size: 0.9rem;
    }
  
    .servico-title {
      font-size: 1.2rem;
    }
  
    .servico-text {
      font-size: 0.8rem;
    }
  
    .servico-icon {
      font-size: 2rem;
    }
  }
  </style>