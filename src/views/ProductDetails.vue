<template>
  <main>
    <p class="back" @click="goBack">Go Back</p>
    <section class="item">
      <img :src="img" alt="" />
      <div class="item-text__container">
        <h4 v-if="isNew">new product</h4>
        <h2>{{ fullTitle }}</h2>
        <p>
          {{ description }}
        </p>
        <h3 class="price">$ {{ formattedPrice }}</h3>
        <div class="item-btn__container">
          <div class="item-qty">
            <p @click="subtractQty" class="item-qty__operator">-</p>
            <p class="item-qty__counter">{{ counter }}</p>
            <p @click="addQty" class="item-qty__operator">+</p>
          </div>
          <base-button @click="addToCart" :class="orange"
            >add to cart</base-button
          >
        </div>
      </div>
    </section>
    <section class="other-details">
      <div class="features">
        <h3>features</h3>
        <p>{{ features }}</p>
      </div>
      <div class="inBox">
        <h3>in the box</h3>
        <ul>
          <product-in-box
            v-for="box in inBox"
            :key="box.item"
            :quantity="box.qty"
            :item="box.item"
          ></product-in-box>
        </ul>
      </div>
    </section>
    <product-photo-view
      :img1="imgGallery1"
      :img2="imgGallery2"
      :img3="imgGallery3"
    ></product-photo-view>
    <h3 class="more-products">you may also like</h3>
    <section class="other">
      <other-products
        v-for="other in others"
        :key="other.title"
        :img="other.img"
        :title="other.title"
        :category="other.category"
        :othersId="other.id"
      ></other-products>
    </section>
    <the-store></the-store>
    <the-pre-footer></the-pre-footer>
  </main>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import ProductPhotoView from '../components/ProductPhotoView.vue';
import ProductInBox from '../components/ProductInBox.vue';
import OtherProducts from '../components/OtherProducts.vue';

export default {
  components: {
    ProductPhotoView,
    ProductInBox,
    OtherProducts,
  },
  props: ['id'],
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const orange = ref('orange');

    const selectedProduct = ref(null);

    const counter = ref(1);

    const title = computed(function () {
      return selectedProduct.value.title;
    });

    const img = computed(function () {
      return selectedProduct.value.img;
    });

    const fullTitle = computed(function () {
      return selectedProduct.value.title + ' ' + selectedProduct.value.category;
    });

    const description = computed(function () {
      return selectedProduct.value.desc;
    });

    const price = computed(function () {
      return selectedProduct.value.price;
    });

    const formattedPrice = computed(function () {
      return price.value.toLocaleString('en-US');
    });

    const features = computed(function () {
      return selectedProduct.value.features;
    });

    const isNew = computed(function () {
      return selectedProduct.value.isNew;
    });

    const imgGallery1 = computed(function () {
      return selectedProduct.value.galPhoto1;
    });

    const imgGallery2 = computed(function () {
      return selectedProduct.value.galPhoto2;
    });

    const imgGallery3 = computed(function () {
      return selectedProduct.value.galPhoto3;
    });

    const inBox = computed(function () {
      return selectedProduct.value.inBox;
    });

    const others = computed(function () {
      return selectedProduct.value.others;
    });

    selectedProduct.value = store.getters.products.find(
      (item) => item.id === props.id
    );

    function goBack() {
      router.back();
    }

    function addQty() {
      counter.value++;
    }

    function subtractQty() {
      if (counter.value !== 1) {
        counter.value--;
      }
    }

    function addToCart() {
      store.commit('addToCart', {
        value: {
          qty: counter.value,
          price: price.value * counter.value,
          priceOne: price.value,
          title: title,
          img: img,
        },
      });
    }

    return {
      store,
      orange: orange.value,
      counter,
      title,
      fullTitle,
      img,
      description,
      price,
      formattedPrice,
      features,
      isNew,
      imgGallery1,
      imgGallery2,
      imgGallery3,
      inBox,
      others,
      goBack,
      addQty,
      subtractQty,
      addToCart,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
}

p.back {
  color: black;
  cursor: pointer;
  width: fit-content;
  margin: 5rem 0 3.5rem 0;
  transition: 0.2s ease-in-out;
  &:hover {
    color: $dark-orange;
  }
}

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
    margin-bottom: 3.5rem;

    h3 {
      font-size: 1.125rem;
      line-height: 25px;
      letter-spacing: 1.3px;
      margin: 2.5rem 0;
    }

    h4 {
      color: $dark-orange;
    }

    p {
      @include opacity-dark();
      margin: 0;
    }
  }

  .item-btn__container {
    display: flex;

    .item-qty {
      height: 48px;
      width: 120px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background: $light-gray2;
      margin-right: 1rem;

      .item-qty__operator {
        font-weight: 700;
        transition: 0.2s ease-in-out;
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
  }
}

.other-details {
  display: flex;
  height: 22rem;

  h3 {
    font-size: 2rem;
    line-height: 36px;
    letter-spacing: 1.14px;
  }

  .features {
    height: 100%;
    width: 635px;
    margin-bottom: 10rem;

    p {
      @include opacity-dark();
    }
  }

  .inBox {
    height: 100%;
    margin-left: 8rem;

    ul {
      padding: 0;
      width: 17rem;
      height: 14rem;
      gap: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: start;
    }
  }
}

.more-products {
  font-size: 2rem;
  line-height: 36px;
  letter-spacing: 1.14px;
  text-align: center;
}

.other {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin: 4rem 0 14rem 0;
}
</style>
