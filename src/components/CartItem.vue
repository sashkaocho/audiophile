<template>
  <div class="cart-item__container">
    <div class="cart-item__control">
      <img :src="img" alt="" />
      <div class="title-n-price">
        <p class="title">{{ title }}</p>
        <p class="price">$ {{ formattedPrice }}</p>
      </div>
    </div>
    <div class="item-qty">
      <p @click="subtractQty" class="item-qty__operator">-</p>
      <p class="item-qty__counter">{{ qty }}</p>
      <p @click="addQty" class="item-qty__operator">+</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: ['title', 'priceOne', 'img', 'qty'],
  setup(props) {
    const store = useStore();

    const formattedPrice = computed(function () {
      return props.priceOne.toLocaleString('en-US');
    });

    function addQty() {
      store.commit('findItem', {
        name: props.title,
        operator: '+',
      });
    }
    function subtractQty() {
      store.commit('findItem', {
        name: props.title,
        operator: '-',
      });
    }
    return {
      addQty,
      subtractQty,
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
  padding-right: 0.7rem;

  img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    background: red;
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

.item-qty {
  width: 96px;
  height: 32px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: $light-gray2;

  .item-qty__operator {
    font-weight: 700;
    transition: 0.2s ease-in-out;
    @include opacity-dark();
    &:hover {
      color: $dark-orange;
      cursor: pointer;
    }
    &::selection {
      background: none;
    }
  }

  .item-qty__counter {
    opacity: 1;
    color: black;
  }
}
</style>
