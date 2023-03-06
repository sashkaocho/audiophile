<template>
  <section class="cart">
    <div class="cart-container1">
      <h6 class="cart-qty">cart ({{ cartQty }})</h6>
      <p @click="clearCart">Remove all</p>
    </div>
    <section class="cart-items">
      <cart-item
        v-for="item in cart"
        :key="item.title"
        :title="item.title"
        :priceOne="item.priceOne"
        :img="item.img"
        :qty="item.qty"
      ></cart-item>
    </section>
    <div class="cart-total">
      <p>total</p>
      <h3>$ {{ cartTotal }}</h3>
    </div>
    <base-button @click="goCheckout" class="btn" :class="'orange'"
      >checkout</base-button
    >
  </section>
</template>

<script>
import { computed } from 'vue';
import CartItem from '../CartItem.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  components: {
    CartItem,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const cart = computed(function () {
      return store.state.cart;
    });

    const cartQty = computed(function () {
      return store.getters.cartQty;
    });

    const cartTotal = computed(function () {
      return store.getters.cartTotal.toLocaleString('en-US');
    });

    function clearCart() {
      store.commit('clearCart');
    }

    function goCheckout() {
      if (cartQty.value !== 0) {
        router.push('/checkout');
      }
    }

    return {
      cart,
      cartQty,
      cartTotal,
      goCheckout,
      clearCart,
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

.cartActive.cart {
  max-height: 30rem;
}

.cart {
  position: absolute;
  width: 377px;
  max-height: 0px;
  overflow: hidden;
  top: 7.5rem;
  right: 12rem;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.422);
  padding: 0 2rem;
  z-index: 10;
  transition: 0.5s ease-in-out;

  .cart-items {
    max-height: 220px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    margin: 2rem 0 1.1rem 0;
    gap: 1rem;
  }

  .cart-container1 {
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    h6 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 25px;
      letter-spacing: 1.28px;
      text-transform: uppercase;
    }

    p {
      text-decoration: underline;
      @include opacity-dark();
      transition: 0.2s ease-in-out;
      &:hover {
        color: $dark-orange;
        cursor: pointer;
      }
    }
  }
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    @include opacity-dark();
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.125rem;
    line-height: 25px;
  }
}

.btn {
  width: 100%;
  margin: 0.6rem 0 2rem 0;
}
</style>
