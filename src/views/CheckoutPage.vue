<template>
  <main>
    <div v-if="store.state.payDialogVisibility" class="backdrop"></div>
    <p class="back" @click="goBack">Go Back</p>
    <div class="checkout-main">
      <checkout-dialog v-if="store.state.payDialogVisibility"></checkout-dialog>
      <checkout-form></checkout-form>
      <checkout-cart></checkout-cart>
    </div>
  </main>
</template>

<script>
import CheckoutForm from '../components/CheckoutForm.vue';
import CheckoutCart from '../components/CheckoutCart.vue';
import CheckoutDialog from '../components/CheckoutDialog.vue';

import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    CheckoutForm,
    CheckoutCart,
    CheckoutDialog,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const cart = computed(function () {
      return store.getters.getCart;
    });

    const cartTotal = computed(function () {
      return store.getters.cartTotal;
    });

    function goBack() {
      router.back();
    }

    return {
      cart,
      cartTotal,
      store,
      goBack,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
  background: $light-gray3;
  padding-bottom: 9rem;
  padding-top: 5rem;

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    overflow: hidden;
    opacity: 0.4;
  }
}

p.back {
  color: black;
  cursor: pointer;
  width: fit-content;
  margin: 0 0 3.5rem 0;
  transition: 0.2s ease-in-out;
  &:hover {
    color: $dark-orange;
  }
}

.checkout-main {
  display: flex;
  justify-content: space-between;
}
</style>
