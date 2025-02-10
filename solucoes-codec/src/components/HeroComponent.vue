<template>
    <section id="Video" class="video">
      <div class="video-container">
        <!-- Vídeo -->
        <video
          src="@/assets/images/3129595-uhd_2560_1440_30fps.mp4"
          class="promo-video"
          ref="videoElement"
          muted
          loop
          autoplay
          @click="toggleVideo"
        ></video>
  
        <!-- Texto centralizado sobre o vídeo -->
        <div class="centered-text">
          <h1>Soluções Tecnológicas para o seu Negócio</h1>
          <p>Inovação, qualidade e eficiência em cada projeto. </p>
          <p>Conheça nossos serviços</p>
  
          <div class="button-group">
            <button @click="handleContato" class="sololeving-button">Contato</button>
            <button @click="handleSaibaMais" class="sololeving-button">Serviços</button>
          </div>
        </div>
  
        <!-- Ícone de Play (aparece apenas quando o vídeo está pausado) -->
        <div v-if="!isPlaying" class="play-icon" @click="toggleVideo">
          ▶
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HeroComponent",
    data() {
      return {
        isPlaying: true, // Estado inicial: vídeo está reproduzindo
      };
    },
    methods: {
      toggleVideo() {
        const video = this.$refs.videoElement;
  
        if (this.isPlaying) {
          video.pause(); // Pausa o vídeo
        } else {
          video.play(); // Reproduz o vídeo
        }
  
        this.isPlaying = !this.isPlaying; // Alterna o estado
      },
      handleContato() {
        window.open("https://wa.me/5592984713059", "_blank"); // Redireciona para o WhatsApp
      },
      handleSaibaMais() {
        window.location.href = "/Portifolio"; // Redireciona para a página /Imoveis
      },
    },
  };
  </script>
  
  <style scoped>
  /* Garantir que não há margens ou padding na página */
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Impede rolagem horizontal */
  }
  
  /* Container do vídeo */
  .video-container {
    position: relative;
    width: 100%; /* Cobre toda a largura da viewport */
    height: 100vh; /* Cobre toda a altura da viewport */
    overflow: hidden; /* Garante que nada ultrapasse o container */
    display: flex;
    justify-content: center; /* Centraliza horizontalmente os elementos */
    align-items: center; /* Centraliza verticalmente os elementos */
  }
  
  /* Estilos do vídeo */
  .promo-video {
    width: 100vw; /* Cobre toda a largura da tela */
    height: 100vh; /* Cobre toda a altura da viewport */
    object-fit: cover; /* Garante que o vídeo preencha o container sem distorcer */
    position: absolute;
    top: 0;
    left: 0;
  }
  
  /* Texto centralizado */
  .centered-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    z-index: 10;
    font-family: Arial, Helvetica, sans-serif;
    max-width: 80%; /* Limita a largura do texto */
    opacity: 0.8; /* Transparência do texto */
  }
  
  .centered-text h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  
  .centered-text p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  /* Botões */
  .button-group {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .sololeving-button {
    background-color: #001eff;
    color: rgb(255, 255, 255);
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    padding: 12px 25px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    animation: shadow-move 3s infinite ease-in-out;
  }
  
  @keyframes shadow-move {
    0% {
      box-shadow: 0 0 10px rgba(16, 42, 238, 0.8), 0 0 20px rgba(16, 42, 238, 0.6), 0 0 30px rgba(16, 42, 238, 0.4);
    }
    25% {
      box-shadow: 10px 0 20px rgba(124, 22, 183, 0.8), 20px 0 40px rgba(124, 22, 183, 0.6), 30px 0 60px rgba(124, 22, 183, 0.4);
    }
    50% {
      box-shadow: 0 0 10px rgba(16, 42, 238, 0.8), 0 0 20px rgba(16, 42, 238, 0.6), 0 0 30px rgba(16, 42, 238, 0.4);
    }
    75% {
      box-shadow: -10px 0 20px rgba(124, 22, 183, 0.8), -20px 0 40px rgba(124, 22, 183, 0.6), -30px 0 60px rgba(124, 22, 183, 0.4);
    }
    100% {
      box-shadow: 0 0 10px rgba(16, 42, 238, 0.8), 0 0 20px rgba(16, 42, 238, 0.6), 0 0 30px rgba(16, 42, 238, 0.4);
    }
  }
  
  .sololeving-button:hover {
    transform: scale(1.07);
    animation: none; /* Pausa a animação ao passar o mouse */
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.996), 0 0 40px rgb(255, 255, 255), 0 0 60px rgba(255, 255, 255, 0.4);
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    .centered-text h1 {
      font-size: 2rem;
    }
    .centered-text p {
      font-size: 1rem;
    }
    .sololeving-button {
      font-size: 0.9rem;
      padding: 10px 20px;
    }
  }
  
  @media (max-width: 480px) {
    .centered-text h1 {
      font-size: 1.5rem;
    }
    .centered-text p {
      font-size: 0.9rem;
    }
    .sololeving-button {
      font-size: 0.8rem;
      padding: 8px 15px;
    }
  }
  </style>