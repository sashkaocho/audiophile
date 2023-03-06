<template>
  <div class="cart-item__container">
    <div class="cart-item__control">
      <img :src="img" alt="" />
      <div class="pht"></div>
      <div class="title-n-price">
        <p class="title">{{ title }}</p>
        <p class="price">$ {{ formattedPrice }}</p>
      </div>
    </div>
    <p class="item-qty__counter">x{{ qty }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['title', 'priceOne', 'img', 'qty'],
  setup(props) {
    const formattedPrice = computed(function () {
      return props.priceOne.toLocaleString('en-US');
    });

    return {
      formattedPrice,
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

.cart-item__container {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }

  .cart-item__control {
    display: flex;
    align-items: center;

    .title-n-price {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;

      p {
        font-weight: 700;
      }
      .title {
        color: black;
        opacity: 1;
      }

      .price {
        @include opacity-dark();
        font-size: 0.875rem;
      }
    }
  }
}

.item-qty__counter {
  @include opacity-dark();
}
</style>
