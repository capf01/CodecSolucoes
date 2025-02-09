import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue') // rota para página home 
  },
  {
    path: '/Sobre',
    name: 'SobrePage',
    component: () => import('@/views/SobrePage.vue') // rota para a página Sobre
  },
  {
    path: '/Contato',
    name: 'ContactPage',
    component: () => import('@/views/ContactPage.vue') // rota para a página Contato
  },
  {
    path: '/Portifolio',
    name: 'PortifolioPage',
    component: () => import('@/views/ContactPage.vue') // rota para a página Portifolio
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
