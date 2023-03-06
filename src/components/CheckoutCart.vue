<template>
  <section class="checkout-cart">
    <h3>summary</h3>
    <section class="cart-item__control">
      <cart-item-checkout
        v-for="item in cart"
        :key="item.title"
        :title="item.title"
        :img="item.img"
        :qty="item.qty"
        :priceOne="item.priceOne"
      ></cart-item-checkout>
    </section>
    <article class="cart-price__control">
      <div class="cart-price">
        <p>total</p>
        <h3>$ {{ cartTotal }}</h3>
      </div>
      <div class="cart-price">
        <p>shipping</p>
        <h3>$ {{ shipping }}</h3>
      </div>
      <div class="cart-price">
        <p>vat (included)</p>
        <h3>$ {{ vat }}</h3>
      </div>
      <div class="cart-price grand-price">
        <p>grand total</p>
        <h3 class="grand">$ {{ grandTotal }}</h3>
      </div>
    </article>
    <base-button @click="showPayDialog" :class="'orange'" id="btn"
      >continue & pay</base-button
    >
  </section>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import CartItemCheckout from '../components/CartItemCheckout.vue';

export default {
  components: {
    CartItemCheckout,
  },
  setup() {
    const store = useStore();

    const shipping = ref(50);
    const vatPercent = ref(15);

    const cart = computed(function () {
      return store.getters.getCart;
    });

    const cartTotal = computed(function () {
      return store.getters.cartTotal.toLocaleString('en-US');
    });

    const vat = computed(function () {
      return Math.round(
        store.getters.cartTotal * (vatPercent.value / 100)
      ).toLocaleString('en-US');
    });

    const grandTotal = computed(function () {
      return store.getters.grandTotal.toLocaleString('en-US');
    });

    const phoneRegex = ref(/[^0-9\s]/);

    function validateForm() {
      store.state.formIsValid = true;
      if (store.state.name.value === '') {
        store.state.name.isValid = false;
        store.state.formIsValid = false;
      } else {
        store.state.name.isValid = true;
      }
      if (
        store.state.email.value === '' ||
        !store.state.email.value.includes('@')
      ) {
        store.state.email.isValid = false;
        store.state.formIsValid = false;
      } else {
        store.state.email.isValid = true;
      }
      if (
        store.state.phone.value === '' ||
        store.state.phone.value.match(phoneRegex.value)
      ) {
        store.state.phone.isValid = false;
        store.state.formIsValid = false;
      } else {
        store.state.phone.isValid = true;
      }
      if (store.state.address.value === '') {
        store.state.address.isValid = false;
        store.state.formIsValid = false;
      } else {
        store.state.address.isValid = true;
      }
      if (
        store.state.zip.value === '' ||
        store.state.zip.value.match(phoneRegex.value)
      ) {
        store.state.zip.isValid = false;
        store.state.formIsValid = false;
      } else {
        store.state.zip.isValid = true;
      }
      if (store.state.city.value === '') {
        store.state.city.isValid = false;
        store.state.formIsValid = false;
      } else {
        store.state.city.isValid = true;
      }
      if (store.state.country.value === '') {
        store.state.country.isValid = false;
        store.state.formIsValid = false;
      } else {
        store.state.country.isValid = true;
      }
      if (store.state.payment.value === '') {
        store.state.payment.isValid = false;
        store.state.formIsValid = false;
      } else {
        store.state.payment.isValid = true;
      }
      if (
        (store.state.emoneyNum.value === '' ||
          store.state.emoneyNum.value.match(phoneRegex.value)) &&
        store.state.payment.value === 'emoney'
      ) {
        store.state.emoneyNum.isValid = false;
        store.state.formIsValid = false;
      } else {
        store.state.emoneyNum.isValid = true;
      }
      if (
        (store.state.emoneyPin.value === '' ||
          store.state.emoneyPin.value.match(phoneRegex.value)) &&
        store.state.payment.value === 'emoney'
      ) {
        store.state.emoneyPin.isValid = false;
        store.state.formIsValid = false;
      } else {
        store.state.emoneyPin.isValid = true;
      }
      console.log(store.state.formIsValid);
    }

    function showPayDialog() {
      validateForm();
      if (store.state.formIsValid === false) {
        return;
      } else {
        store.commit('showPayDialog');
      }
    }

    return {
      cart,
      cartTotal,
      vat,
      grandTotal,
      shipping,
      showPayDialog,
    };
  },
};
</script>

<style lang="scss" scoped>
.checkout-cart {
  height: fit-content;
  width: 350px;
  border-radius: 8px;
  background: white;
  padding: 2.1rem;

  h3 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 25px;
    letter-spacing: 1.28px;
    text-transform: uppercase;
    margin: 0;
  }
}

p {
  margin: 0;
}

.cart-item__control {
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 1.5rem;
}

.cart-price__control {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}

.cart-price {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    @include opacity-dark();
    font-size: 15px;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
  }

  .grand {
    color: $dark-orange;
  }
}

.grand-price {
  margin-top: 1rem;
}

#btn {
  margin-top: 2.2rem;
  width: 100%;
}
</style>
