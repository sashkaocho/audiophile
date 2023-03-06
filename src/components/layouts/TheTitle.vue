<template>
  <div class="title">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: ['title'],
  setup() {},
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 35vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 11rem;
}

h2 {
  color: white;
}
</style>
