<template>
  <section class="store">
    <article class="store-item">
      <img src="../../assets/shared/desktop/headphones.png" alt="" />
      <h3 class="store-title">headphones</h3>
      <div class="shop-control">
        <router-link to="/headphones">shop</router-link>
        <svg
          class="store-arrow"
          width="8"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </article>
    <article class="store-item">
      <img src="../../assets/shared/desktop/speakers.png" alt="" />
      <h3 class="store-title">speakers</h3>
      <div class="shop-control">
        <router-link to="/speakers">shop</router-link>
        <svg
          class="store-arrow"
          width="8"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </article>
    <article class="store-item">
      <img src="../../assets/shared/desktop/earphones.png" alt="" />
      <h3 class="store-title">earphones</h3>
      <div class="shop-control">
        <router-link to="/earphones">shop</router-link>
        <svg
          class="store-arrow"
          width="8"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.store {
  width: 100%;
  height: fit-content;
  margin: 12rem 0;
  display: flex;
  flex-direction: row;
  gap: 1.7rem;
}

.store-item {
  position: relative;
  width: 100%;
  height: 12.75rem;
  background: $light-gray2;
  border-radius: 8px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 0.8rem;

  img {
    position: absolute;
    width: 14rem;
    bottom: 4rem;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 5;
    transition: all 0.2s ease-in-out;
    &:hover {
      bottom: 4.8rem;
    }
  }

  .store-title {
    color: black;
    font-size: 1.125rem;
    margin: 0;
    line-height: 25px;
    letter-spacing: 1.28px;
    text-transform: uppercase;
  }
}

.shop-control {
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    margin: 0.8rem 0;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    @include opacity-dark();
    transition: 0.2s ease-in-out;
  }

  &:hover a {
    color: $dark-orange;
  }

  .store-arrow {
    width: fit-content;
    padding-left: 0.1rem;
    transition: 0.2s ease-in-out;
  }

  &:hover .store-arrow {
    transform: translateX(5px);
  }
}

@media (max-width: 55rem) {
  .store {
    gap: 0.7rem;
    margin: 9rem 0;
  }
  .store-item {
    height: 11.75rem;
    padding-bottom: 0.6rem;

    img {
      width: 11rem;
      bottom: 4.3rem;
    }
  }
  .shop-control {
    a {
      font-size: 1rem;
    }
    .store-arrow {
      padding-left: 0.4rem;
    }
  }
}
</style>
