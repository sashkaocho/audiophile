<template>
  <section class="gallery">
    <div class="gallery-photo__container">
      <img :src="img1" />
      <img :src="img2" />
    </div>
    <img class="gallery-photo__m" :src="img3" />
  </section>
</template>

<script>
export default {
  props: ['img1', 'img2', 'img3'],
  setup() {},
};
</script>

<style lang="scss" scoped>
.gallery {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin: 12rem 0 10rem 0;

  .gallery-photo__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      border-radius: 8px;
    }
  }

  .gallery-photo__m {
    border-radius: 8px;
  }
}
</style>
