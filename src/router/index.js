import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' });
    }
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Neto Santos | Front-End Developer'
      }
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/SobreView.vue'),
      meta: {
        title: 'Sobre Neto Santos | Front-End Developer'
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue'),
      meta: {
        title: 'Portfolio de Neto Santos'
      }
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../views/ContatoView.vue'),
      meta: {
        title: 'Contato Neto Santos'
      }
    }
  ]
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Default Title';
})

export default router
