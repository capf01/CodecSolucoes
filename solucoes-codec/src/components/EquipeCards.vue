<template>
    <div class="team-container">
      <h1 class="section-title">Nossa Equipe</h1>
      <div class="cards">
        <div 
          class="card" 
          v-for="corretor in corretores" 
          :key="corretor.id"
          @mouseover="hoverEffect(corretor.id)"
          @mouseleave="resetEffect"
        >
          <div class="card-inner">
            <div class="profile-header">
              <div class="image-wrapper">
                <img 
                  :src="corretor.foto" 
                  :alt="`Foto de ${corretor.nome}`" 
                  class="profile-pic"
                  :class="{ 'hovered': activeHover === corretor.id }"
                />
                <div class="decor-line"></div>
              </div>
              <h2 class="name">{{ corretor.nome }}</h2>
              <p class="position">{{ corretor.apresentacao }}</p>
            </div>
            <div class="social-links">
              <a href="https://wa.me/5592984713059" class="social-icon">
                <img src="@/assets/images/WhatsappIcon.png" alt="Facebook" class="social-image" />
              </a>
              <a href="https://www.linkedin.com/in/capf01/" class="social-icon">
                <img src="@/assets/images/linkedinIcon.png" alt="WhatsApp" class="social-image" />
              </a>
              <a href="https://github.com/capf01" class="social-icon">
                <img src="@/assets/images/github.png" alt="GitHub" class="social-image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "EquipeCards",
    data() {
      return {
        activeHover: null,
        corretores: [
          {
            id: 1,
            nome: "César Augusto Pacheco Ferreira",
            apresentacao: "CEO e Fundador",
            foto: require("@/assets/images/Cesarfoto.jpg"),
          },
          {
            id: 2,
            nome: "Douglas Daniel Moraes Ferreira",
            apresentacao: "Fundador",
            foto: require("@/assets/images/Douglas1.jpeg"),
          },
        ],
      };
    },
    methods: {
      hoverEffect(id) {
        this.activeHover = id;
      },
      resetEffect() {
        this.activeHover = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .team-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    background: linear-gradient(45deg, #1e1e2f 0%, #2a2a40 100%);
    color: #fff;
    min-height: 100vh;
    text-align: center;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 3rem;
    color: #618eff;
    margin-bottom: 3rem;
    font-weight: 700;
    letter-spacing: -1px;
    position: relative;
    display: inline-block;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: floatTitle 3s ease-in-out infinite;
  }
  
  @keyframes floatTitle {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-40px);
    }
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
  
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 1.5rem;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px #618eff;
  }
  
  .card-inner {
    position: relative;
    z-index: 1;
  }
  
  .profile-header {
    position: relative;
    margin-bottom: 1.5rem;
  }
  
  .image-wrapper {
    position: relative;
    width: 180px;
    height: 180px;
    margin: 0 auto 1.5rem;
    border-radius: 100%;
    overflow: hidden;
    border: 4px solid #0048ff;
    box-shadow: 0 8px 20px rgba(255, 111, 97, 0.3);
    animation: glow 3s infinite alternate;
  }
  
  @keyframes glow {
    0% {
      box-shadow: 0 0 10px #180152;
    }
    100% {
      box-shadow: 0 0 20px #618eff;
    }
  }
  
  .profile-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
  
  .profile-pic.hovered {
    transform: scale(1.05);
  }
  
  .decor-line {
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 4px;
    background: linear-gradient(90deg, #61adff 0%, #00060b 100%);
    border-radius: 2px;
  }
  
  .name {
    font-size: 1.5rem;
    color: #61b0ff;
    margin: 1rem 0 0.5rem;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  .position {
    color: #a8a8a8;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  }
  
  .card:hover .social-links {
    opacity: 1;
    transform: translateY(0);
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(97, 107, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    text-decoration: none;
  }
  
  .social-icon:hover {
    background: #fbfbfb;
    transform: translateY(-3px) scale(1.1);
  }
  
  .social-image {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    .cards {
      grid-template-columns: 1fr;
    }
    
    .section-title {
      font-size: 2rem;
    }
  }
  </style>