<template>
  <section class="item">
    <img v-if="position === 'left'" :src="img" alt="" />
    <div class="item-text__container">
      <h4 v-if="isNew">new product</h4>
      <h2>{{ fullTitle }}</h2>
      <p>
        {{ description }}
      </p>
      <base-button link :to="detailsLink" :class="orange"
        >see product</base-button
      >
    </div>
    <img v-if="position === 'right'" :src="img" alt="" />
  </section>
</template>

<script>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['id', 'title', 'description', 'category', 'img', 'position', 'isNew'],
  setup(props) {
    const route = useRoute();

    const orange = ref('orange');

    const fullTitle = computed(function () {
      return props.title + ' ' + props.category;
    });

    const detailsLink = computed(function () {
      return route.path + '/' + props.id;
    });

    return {
      orange: orange.value,
      fullTitle,
      detailsLink,
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10rem;

  img {
    width: 540px;
    height: 560px;
    border-radius: 8px;
  }

  h2 {
    margin-top: 1rem;
  }

  .item-text__container {
    width: 445px;
    height: 343px;

    h4 {
      color: $dark-orange;
    }

    p {
      @include opacity-dark();
    }
  }
}
</style>
