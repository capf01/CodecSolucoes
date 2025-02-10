<template>    
    <div class="image-containerwwp">
      <a href="https://api.whatsapp.com/send?phone=5592984713059">
        <img src="@/assets/images/WhatsappIcon.png" alt="Imagem do WhatsApp" />
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: "WhatsappComponente",
  };
  </script>
  
  <style scoped>
  .image-containerwwp {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: pulse 2s infinite;
  }
  
  .image-containerwwp img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); /* Cor do WhatsApp */
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
  }
  </style>