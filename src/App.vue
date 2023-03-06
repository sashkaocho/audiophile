<template>
  <the-header></the-header>
  <the-cart
    :style="{ display: route.path === '/checkout' ? 'none' : '' }"
    :class="cartStyle"
  ></the-cart>
  <router-view :key="route.path"> </router-view>
  <the-footer></the-footer>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const route = useRoute();

    const store = useStore();

    const cartStyle = computed(() => {
      const cartVisibility = store.getters.getCartVis;
      return {
        cartActive: cartVisibility,
      };
    });

    return {
      route,
      store,
      cartStyle,
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Manrope';
}

body {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: $light-gray2;
}

::-webkit-scrollbar-thumb {
  background: hsl(0, 0%, 60%);
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(0, 0%, 50%);
}

main {
  width: 100%;
  padding: 0 14rem;
}

@media (max-width: 55rem) {
  main {
    padding: 0 2rem;
  }
}

h1 {
  color: white;
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 58px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 1.5rem 0;
}

h2 {
  color: black;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 44px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

h3 {
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: black;
}

h4 {
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 0.87rem;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
}

p {
  font-weight: 500;
  font-size: 0.93rem;
  line-height: 25px;
  color: #ffffff;
  opacity: 0.75;
  margin-bottom: 2.5rem;
}
</style>
