<template>
  <li>
    <p class="qty">{{ quantity }}x</p>
    <p>{{ item }}</p>
  </li>
</template>

<script>
export default {
  props: ['quantity', 'item'],
  setup() {},
};
</script>

<style lang="scss" scoped>
p {
  @include opacity-dark();
  margin: 0;
}

li {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;

  .qty {
    font-weight: 700;
    color: $dark-orange;
    opacity: 1;
    margin-right: 1rem;
  }
}
</style>
