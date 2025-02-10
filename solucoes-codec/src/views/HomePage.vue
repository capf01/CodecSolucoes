<template>
    <section><HeroComponent/></section>
    <section><ServicesComponent/></section>
    <section><AboutComponent/></section>
    <section><EquipeCards/></section>
  </template>
  
  <script>
import AboutComponent from '@/components/AboutComponent.vue';
import EquipeCards from '@/components/EquipeCards.vue';
import HeroComponent from '@/components/HeroComponent.vue';
import ServicesComponent from '@/components/ServicesComponent.vue';

  export default {
    name: 'HomePage',
    components:{
        HeroComponent,
        ServicesComponent,
        AboutComponent,
        EquipeCards,
    }
  }
  </script>
  
  <style scoped>
  /* estilos CSS aqui */
  </style>