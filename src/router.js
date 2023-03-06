import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './views/HomePage.vue';
import HeadphonesPage from './views/HeadphonesPage.vue';
import SpeakersPage from './views/SpeakersPage.vue';
import EarphonesPage from './views/EarphonesPage.vue';
import CheckoutPage from './views/CheckoutPage.vue';
import ProductDetails from './views/ProductDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: HomePage },
    { path: '/headphones', name: 'headphones', component: HeadphonesPage },
    {
      path: '/headphones/:id',
      name: 'headphone',
      props: true,
      component: ProductDetails,
    },
    { path: '/speakers', name: 'speakers', component: SpeakersPage },
    {
      path: '/speakers/:id',
      name: 'speaker',
      props: true,
      component: ProductDetails,
    },
    { path: '/earphones', name: 'earphones', component: EarphonesPage },
    {
      path: '/earphones/:id',
      name: 'earphone',
      props: true,
      component: ProductDetails,
    },
    { path: '/checkout', name: 'checkout', component: CheckoutPage },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
