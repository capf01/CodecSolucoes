<template>
  <section id="contact" class="section">
    <div class="contact-info">
      <div class="section-title">
      <h2>Como Nos Encontrar</h2>
    </div>
      <p>Estamos localizados em Manaus, AM. Veja nossa localização no mapa e entre em contato.</p>
      
      <!-- Mapa -->
      <div class="map-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.google.com/maps/embed/v1/place?q=Rua+Salto+Santiago,+Raiz,+Manaus+-+AM,+CEP+69028270&key=AIzaSyDHZCPY-nZ3vozFF32STNyGywCeUoF5b1w" frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
      
      <!-- Detalhes de Contato -->
      <div class="contact-details">
        <p><strong>Endereço:</strong> Rua Salto Santiago, Raiz, Manaus - AM - CEP 69028270</p>
        <p><strong>Telefone:</strong> +55 92 98471-3059</p>
        <p><strong>Email:</strong> solucoescodec@gmail.com</p>
      </div>

      <!-- Formulário de Contato -->
      <div class="contact-form">
        <h3>Envie uma mensagem:</h3>
        <form @submit.prevent="sendToWhatsApp">
          <input type="text" v-model="form.name" placeholder="Seu Nome" required />
          <input type="email" v-model="form.email" placeholder="Seu Email" required />
          <textarea v-model="form.message" placeholder="Sua Mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      whatsappNumber: "5592984713059", // Número de telefone no formato internacional
    };
  },
  methods: {
    sendToWhatsApp() {
      const { name, email, message } = this.form;

      if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const encodedMessage = encodeURIComponent(`Olá! Meu nome é ${name}, meu email é ${email}. Mensagem: ${message}`);
      const whatsappLink = `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodedMessage}`;
      
      window.open(whatsappLink, "_blank");
    },
  },
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
/* Estilo geral da seção */
.section {
  padding: 60px 20px;
  background: #2a2929; /* Fundo escuro */
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
  color: #fff;
  overflow: hidden;
  position: relative;
  border: 2px solid #444; /* Borda sutil */
}

.contact-info {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #4d85ff; /* Vermelho neon */
  text-shadow: 0 0 10px rgba(77, 116, 255, 0.8), 0 0 20px rgba(77, 110, 255, 0.6);
  animation: glow 2s infinite alternate;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
  color: #e0e0e0;
}

/* Estilo do mapa */
.map-container {
  margin-bottom: 30px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
  position: relative;
  z-index: 2;
  border: 2px solid #444; /* Borda sutil */
}

/* Detalhes de contato */
.contact-details p {
  font-size: 18px;
  margin: 10px 0;
  color: #e0e0e0;
}

.contact-details strong {
  color: #0099ff; /* Verde neon */
  text-shadow: 0 0 10px rgba(0, 94, 255, 0.8);
}

/* Formulário de contato */
.contact-form {
  margin-top: 40px;
}

.contact-form h3 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #ff8c00; /* Laranja neon */
  text-shadow: 0 0 10px rgba(255, 140, 0, 0.8);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #444;
  font-size: 16px;
  background-color: #1a1a1a;
  color: #fff;
  transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #00ff88;
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.contact-form button {
  background: linear-gradient(145deg, #ff0033, #ff8c00); /* Gradiente vibrante */
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 0, 51, 0.5);
}

.contact-form button:hover {
  background: linear-gradient(145deg, #ff8c00, #ff0033);
  box-shadow: 0 6px 15px rgba(255, 0, 51, 0.8);
  transform: translateY(-2px);
}

/* Animação de brilho */
@keyframes glow {
  0% {
    text-shadow: 0 0 10px rgba(1, 147, 251, 0.8), 0 0 20px rgba(77, 175, 255, 0.6);
  }
  100% {
    text-shadow: 0 0 15px rgb(77, 130, 255), 0 0 150px rgba(77, 95, 255, 0.8);
  }
}
</style>