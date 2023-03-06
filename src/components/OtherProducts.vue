<template>
  <div class="other-items">
    <img :src="img" alt="" />
    <h3>{{ title }}</h3>
    <base-button link :to="othersPath" :class="'orange'"
      >see product</base-button
    >
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['img', 'title', 'category', 'othersId'],
  setup(props) {
    const othersPath = computed(function () {
      return '/' + props.category + '/' + props.othersId;
    });

    return {
      othersPath,
    };
  },
};
</script>

<style lang="scss" scoped>
.other-items {
  height: 100%;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 318px;
    width: 320px;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.5rem;
  }
}
</style>
