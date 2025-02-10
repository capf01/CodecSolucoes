<template>
    <header class="header">
      <!-- Fundo gradiente dinâmico -->
      <div id="dynamic-gradient">
        <canvas id="gradient-canvas"></canvas>
      </div>
  
      <!-- Contêiner para Logotipo Centralizado -->
      <div class="header-content-center">
        <div class="logo-container">
          <div
            class="logo-circle"
            @mousemove="handleMouseMove"
            @mouseleave="resetShadow"
            @mouseenter="animateLogo"
          >
            <img
              src="@/assets/images/logoCodec.jpeg"
              alt="Logo da CODEC"
              class="logo1"
              :style="logoStyle"
            />
          </div>
        </div>
      </div>
  
      <!-- Menu de navegação -->
      <nav class="nav-menu">
        <ul class="nav-links" :class="{ show: isMenuOpen }">
          <li><router-link to="/" class="menu-item">Início</router-link></li>
          <li><router-link to="/Sobre" class="menu-item">Quem Somos</router-link></li>
          <li><router-link to="/Portifolio" class="menu-item">Portifólio</router-link></li>
          <li><router-link to="/Contato" class="menu-item">Contato</router-link></li>
        </ul>
  
        <!-- Botão Hambúrguer (para telas menores) -->
        <button class="hamburger" @click="toggleMenu" aria-label="Abrir menu">
          &#9776;
        </button>
      </nav>
    </header>
  </template>
  
  <script>
  import { ref, computed, onMounted } from "vue";
  
  export default {
    name: "HeaderComponent",
    setup() {
      const isMenuOpen = ref(false);
      const mouseX = ref(0);
      const mouseY = ref(0);
      const shadowX = ref(0);
      const shadowY = ref(0);
      const isLogoAnimating = ref(false);
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
        if (isMenuOpen.value) {
          setTimeout(() => {
            isMenuOpen.value = false;
          }, 2000);
        }
      };
  
      const handleMouseMove = (event) => {
        const offsetX = event.clientX - window.innerWidth / 2;
        const offsetY = event.clientY - window.innerHeight / 2;
  
        mouseX.value = event.clientX;
        mouseY.value = event.clientY;
        shadowX.value = Math.min(Math.max(offsetX / 10, -15), 15);
        shadowY.value = Math.min(Math.max(offsetY / 10, -15), 15);
      };
  
      const resetShadow = () => {
        shadowX.value = 0;
        shadowY.value = 0;
        isLogoAnimating.value = false;
      };
  
      const animateLogo = () => {
        isLogoAnimating.value = true;
      };
  
      const logoStyle = computed(() => ({
        filter: `drop-shadow(${shadowX.value}px ${shadowY.value}px 20px rgba(2, 11, 181, 0.9))`, // Sombra dinâmica
        transform: isLogoAnimating.value ? "scale(1.1)" : "scale(1)", // Efeito de escala
        transition: "transform 0.3s ease, filter 0.1s ease-out",
      }));
  
      const createGradientEffect = () => {
        const canvas = document.getElementById("gradient-canvas");
        if (!canvas) return;
  
        const ctx = canvas.getContext("2d");
        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
  
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
  
          const gradient = ctx.createRadialGradient(
            mouseX.value,
            mouseY.value,
            100,
            canvas.width / 2,
            canvas.height / 2,
            canvas.width
          );
  
          gradient.addColorStop(0, "rgba(1, 1, 1, 1)");
          gradient.addColorStop(1, "rgba(35, 35, 35, 1)");
  
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
  
          requestAnimationFrame(animate);
        };
  
        resizeCanvas();
        animate();
  
        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);
      };
  
      onMounted(() => {
        createGradientEffect();
      });
  
      return {
        isMenuOpen,
        toggleMenu,
        handleMouseMove,
        resetShadow,
        animateLogo,
        logoStyle,
      };
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");
  
  /* Estilo para o fundo gradiente dinâmico */
  #dynamic-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }
  
  #gradient-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .header {
    background-color: transparent;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    position: relative;
    overflow: hidden;
  }
  
  .header-content-center {
    display: flex;
    flex: 1;
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .logo1 {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-top: 20px;
    border-radius: 100%;
  }
  
  .nav-menu {
    display: flex;
    font-size: 12px;
    align-items: center;
    gap: 20px;
  }
  
  .nav-links {
    font-size: 16px;
    display: flex;
    list-style: none;
    gap: 20px;
  }
  
  .menu-item {
    text-decoration: none;
    color: #fbfbfb;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .menu-item:hover {
    color: #0076fd;
  }
  
  /* Estilo padrão: botão hambúrguer oculto em telas maiores */
  .hamburger {
    padding-top: 30px;
    display: none; /* Oculta o botão por padrão */
  }
  
  /* Exibe o botão hambúrguer em telas menores que 700px */
  @media (max-width: 700px) {
    .logo1 {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
  
    .hamburger {
      display: block; /* Exibe o botão */
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 1.5rem;
      background: none;
      border: none;
      color: #0241ff;
      cursor: pointer;
      z-index: 110; /* Certifique-se de que ele fique acima de outros elementos */
    }
  
    .nav-links {
      flex-direction: column; /* Configuração para o menu hambúrguer */
      position: fixed;
      top: 0;
      right: 0;
      padding-top: 20px;
      width: 100%;
      height: 50%;
      background-color: rgba(0, 34, 94, 0.9);
      justify-content: center;
      align-items: center;
      font-family: Arial, Helvetica, sans-serif;
      opacity: 0.8;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      z-index: 100; /* Ajuste da ordem */
    }
  
    .nav-links.show {
      transform: translateX(0); /* Exibe o menu */
    }
  }
  </style>