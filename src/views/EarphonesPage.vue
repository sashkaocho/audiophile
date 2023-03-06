<template>
  <the-title :title="'earphones'"></the-title>
  <main>
    <product-view
      v-for="earphone in earphones"
      :key="earphone.id"
      :id="earphone.id"
      :title="earphone.title"
      :category="earphone.category"
      :description="earphone.desc"
      :img="earphone.img"
      :position="earphone.position"
      :isNew="earphone.isNew"
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

    const earphones = computed(function () {
      return store.getters.earphones;
    });

    return {
      orange: orange.value,
      earphones,
    };
  },
};
</script>

<style lang="scss" scoped></style>
