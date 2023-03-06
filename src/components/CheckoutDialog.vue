<template>
  <section class="main-dialog">
    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <circle fill="#D87D4A" cx="32" cy="32" r="32" />
        <path
          stroke="#FFF"
          stroke-width="4"
          d="m20.754 33.333 6.751 6.751 15.804-15.803"
        />
      </g>
    </svg>
    <h2>thank you for your order</h2>
    <p>You will receive an email confirmation shortly.</p>
    <section class="order-info">
      <div class="order-info__control">
        <cart-item-checkout
          v-for="item in cart"
          :key="item.title"
          :title="item.title"
          :img="item.img"
          :qty="item.qty"
          :priceOne="item.priceOne"
        ></cart-item-checkout>
      </div>
      <div class="order-info__total">
        <p>grand total</p>
        <h3>$ {{ grandTotal }}</h3>
      </div>
    </section>
    <base-button @click="finishOrder" :class="'orange'" class="btn"
      >back to home</base-button
    >
  </section>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import CartItemCheckout from '../components/CartItemCheckout.vue';

export default {
  components: {
    CartItemCheckout,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const cart = computed(function () {
      return store.getters.getCart;
    });

    const grandTotal = computed(function () {
      return store.getters.grandTotal.toLocaleString('en-US');
    });

    function finishOrder() {
      store.commit('clearCart');
      store.commit('showCart');
      store.commit('showPayDialog');
      store.state.payDialogVisibility = false;
      store.state.name.value = '';
      store.state.email.value = '';
      store.state.phone.value = '';
      store.state.address.value = '';
      store.state.zip.value = '';
      store.state.city.value = '';
      store.state.country.value = '';
      store.state.payment.value = '';
      store.state.emoneyNum.value = '';
      store.state.emoneyPin.value = '';
      router.replace('/home');
    }

    return {
      finishOrder,
      grandTotal,
      cart,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-dialog {
  position: absolute;
  left: 32%;
  width: 540px;
  height: fit-content;
  padding: 3rem;
  background: white;
  border-radius: 8px;
  z-index: 30;

  h2 {
    font-size: 2rem;
    line-height: 36px;
    letter-spacing: 1.14px;
    text-transform: uppercase;
  }

  p {
    @include opacity-dark();
  }

  .btn {
    width: 100%;
  }
}

.order-info {
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  display: flex;
  justify-content: right;
  background: $light-gray2;
  margin-bottom: 3rem;

  .order-info__control {
    width: 55%;
    padding: 1rem 1rem 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .order-info__total {
    width: 45%;
    background: black;
    border-radius: 8px;
    border-start-start-radius: 0;
    border-bottom-left-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2.5rem;

    p {
      color: white;
      text-transform: uppercase;
      margin: 0 0 0.7rem 0;
    }

    h3 {
      font-size: 1.125rem;
      line-height: 25px;
      text-transform: uppercase;
      color: white;
      margin: 0;
    }
  }
}
</style>
