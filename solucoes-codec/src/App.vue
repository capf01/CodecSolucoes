<template>
 <section>
  <HeaderComponent/>
 </section>
  
 <router-view/>

 <section>
  <FooterComponent/>
 </section>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* Personalização da barra de rolagem no estilo sololeving anime */
::-webkit-scrollbar {
  width: 14px; /* Largura um pouco maior para destacar */
}

/* Trilho da barra de rolagem (fundo) */
::-webkit-scrollbar-track {
  background: #000000; /* Fundo preto para contraste */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.1); /* Sombra interna sutil */
}

/* Alça da barra de rolagem (parte móvel) */
::-webkit-scrollbar-thumb {
  background: linear-gradient(
    145deg,
    #007bff,
    #ff8c00,
    #ffeb3b,
    #00ff88,
    #00a8ff,
    #a100ff
  ); /* Gradiente multicolorido vibrante */
  border-radius: 10px; /* Bordas arredondadas */
  border: 2px solid #000000; /* Borda preta para contraste */
  box-shadow: 0 0 10px rgba(255, 0, 51, 0.8), 0 0 20px rgba(255, 140, 0, 0.8),
    0 0 30px rgba(0, 255, 136, 0.8); /* Efeito neon com múltiplas sombras */
  animation: scrollbar-glow 2s infinite alternate; /* Animação de brilho */
  transition: all 0.3s ease; /* Transição suave */
}

/* Efeito ao passar o mouse sobre a barra de rolagem */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    145deg,
    #006eff,
    #ff8c00,
    #ffeb3b,
    #00ff88,
    #00a8ff,
    #a100ff
  ); /* Gradiente ainda mais vibrante */
  box-shadow: 0 0 15px rgb(3, 69, 190), 0 0 30px rgba(255, 140, 0, 1),
    0 0 45px rgba(0, 255, 136, 1); /* Brilho neon mais intenso */
  transform: scale(1.05); /* Aumenta levemente o tamanho */
}

/* Animação de brilho para a alça da barra de rolagem */
@keyframes scrollbar-glow {
  0% {
    box-shadow: 0 0 10px rgba(255, 0, 51, 0.8), 0 0 20px rgba(255, 140, 0, 0.8),
      0 0 30px rgba(0, 255, 136, 0.8);
  }
  100% {
    box-shadow: 0 0 15px rgba(255, 0, 51, 1), 0 0 30px rgba(255, 140, 0, 1),
      0 0 45px rgba(0, 255, 136, 1);
  }
}

/* Barra de rolagem para navegadores Firefox */
* {
  scrollbar-width: thin; /* Largura da barra */
  scrollbar-color: #3700ff #000000; /* Cor da alça e do trilho */
}</style>
