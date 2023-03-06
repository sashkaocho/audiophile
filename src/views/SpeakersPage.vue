<template>
  <the-title :title="'speakers'"></the-title>
  <main>
    <product-view
      v-for="speaker in speakers"
      :key="speaker.id"
      :id="speaker.id"
      :title="speaker.title"
      :category="speaker.category"
      :description="speaker.desc"
      :img="speaker.img"
      :position="speaker.position"
      :isNew="speaker.isNew"
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

    const speakers = computed(function () {
      return store.getters.speakers;
    });

    return {
      orange: orange.value,
      speakers,
    };
  },
};
</script>

<style lang="scss" scoped></style>
