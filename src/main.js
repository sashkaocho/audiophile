import { createApp } from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';

import BaseButton from './components/base/BaseButton.vue';

import TheHeader from './components/layouts/TheHeader.vue';
import TheTitle from './components/layouts/TheTitle.vue';
import TheStore from './components/layouts/TheStore.vue';
import ThePreFooter from './components/layouts/ThePreFooter.vue';
import TheFooter from './components/layouts/TheFooter.vue';
import TheCart from './components/layouts/TheCart.vue';

const app = createApp(App);

app.component('base-button', BaseButton);

app.component('the-header', TheHeader);
app.component('the-title', TheTitle);
app.component('the-store', TheStore);
app.component('the-pre-footer', ThePreFooter);
app.component('the-footer', TheFooter);
app.component('the-cart', TheCart);

app.use(store);

app.use(router);

app.mount('#app');
