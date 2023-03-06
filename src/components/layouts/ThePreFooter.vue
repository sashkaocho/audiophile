<template>
  <section class="pre-main">
    <div class="pre-container">
      <h2>Bringing you the <span>best</span> audio gear</h2>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
    <div class="img-control"></div>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.pre-main {
  width: 100%;
  height: 36.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 11rem;

  .pre-container {
    width: 27.9rem;
    height: 24rem;

    span {
      color: $dark-orange;
    }

    p {
      @include opacity-dark();
    }
  }

  .img-control {
    background: url(../../assets/shared/desktop/image-best-gear.jpg) no-repeat;
    width: 540px;
    height: 100%;
    border-radius: 8px;
  }
}
</style>
