<template>
  <the-title :title="'headphones'"></the-title>
  <main>
    <product-view
      v-for="headphone in headphones"
      :key="headphone.id"
      :id="headphone.id"
      :title="headphone.title"
      :category="headphone.category"
      :description="headphone.desc"
      :img="headphone.img"
      :position="headphone.position"
      :isNew="headphone.isNew"
    ></product-view>
    <the-store></the-store>
    <the-pre-footer></the-pre-footer>
  </main>
</template>

<script>
import { ref } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

import ProductView from '../components/ProductView.vue';

export default {
  components: {
    ProductView,
  },
  setup() {
    const store = useStore();

    const orange = ref('orange');

    const headphones = computed(function () {
      return store.getters.headphones;
    });

    return {
      orange: orange.value,
      headphones,
    };
  },
};
</script>

<style lang="scss" scoped></style>
