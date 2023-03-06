<template>
  <section class="main-logo">
    <div class="main-logo__container">
      <h4 class="main-logo__label">new product</h4>
      <h1>XX99 Mark II Headphones</h1>
      <p class="main-logo__desc">
        Experience natural, lifelike audio and exceptional <br />
        build quality made for the passionate music <br />
        enthusiast.
      </p>
      <base-button link :to="'/headphones/h1'" :class="orange"
        >see product</base-button
      >
    </div>
  </section>
  <main>
    <the-store></the-store>
    <section class="product-view">
      <section class="container1">
        <svg
          class="circle"
          width="944"
          height="944"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#FFF" fill="none" fill-rule="evenodd" opacity=".202">
            <circle cx="472" cy="472" r="235.5" />
            <circle cx="472" cy="472" r="270.5" />
            <circle cx="472" cy="472" r="471.5" />
          </g>
        </svg>
        <div class="container1-rev">
          <h1>zx9 speaker</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <base-button link :to="'/speakers/s1'" :color="black"
            >see product</base-button
          >
        </div>
        <img src="../assets/home/desktop/image-speaker-zx9.png" alt="" />
      </section>
      <section class="container2">
        <div class="container2-rev">
          <h3>zx7 speaker</h3>
          <base-button link :to="'/speakers/s2'" :color="none"
            >see product</base-button
          >
        </div>
      </section>
      <section class="container3"></section>
      <section class="container4">
        <div class="container4-rev">
          <h3>yx1 earphones</h3>
          <base-button link :to="'/earphones/e1'" :color="none"
            >see product</base-button
          >
        </div>
      </section>
    </section>
    <the-pre-footer></the-pre-footer>
  </main>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const orange = ref('orange');
    const black = ref('black');
    const none = ref('none');

    return {
      orange: orange.value,
      black: black.value,
      none: none.value,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-logo {
  background: url(../assets/home/desktop/image-hero.jpg) center / cover
    no-repeat;
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  .main-logo__container {
    width: 25%;
    height: 346px;
    margin: 3rem 0 0 11.1rem;
  }

  .main-logo__label {
    color: #ffffff;
    opacity: 0.5;
  }
}

@media (max-width: 55rem) {
  .main-logo {
    background: url(../assets/home/tablet/image-header.jpg) center / cover
      no-repeat;
    width: 100%;
    height: 729px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .main-logo__container {
      width: 379px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;

      h1,
      p {
        text-align: center;
      }
    }
  }
}

@media (max-width: 30rem) {
  .main-logo {
    background: url(../assets/home/mobile/image-header.jpg) center / cover
      no-repeat;
  }
}

.product-view {
  width: 100%;
  height: 89rem;
  margin: 0 0 12.5rem 0;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem 2rem;
  grid-template-areas:
    'main main'
    'main main'
    'mid mid'
    'bot1 bot2';
}

.container1 {
  grid-area: main;
  background: $dark-orange;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 5rem;

  img {
    position: absolute;
    width: 27rem;
    top: 26%;
    left: 13%;
  }

  .container1-rev {
    width: 349px;
    height: 303px;
    z-index: 10;
    margin-bottom: 2.3rem;
  }

  .circle {
    position: absolute;
    right: 26.4%;
    top: -3%;
  }
}

.container2 {
  grid-area: mid;
  background: url('../assets/home/desktop/image-speaker-zx7.jpg') center / cover;
  @include container();

  .container2-rev {
    @include container-rev();
  }
}

.container3 {
  grid-area: bot1;
  background: url('../assets/home/desktop/image-earphones-yx1.jpg') center /
    cover no-repeat;
  border-radius: 8px;
}

.container4 {
  grid-area: bot2;
  background: $light-gray2;
  @include container();

  .container4-rev {
    @include container-rev();
  }
}
</style>
