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
</style>
