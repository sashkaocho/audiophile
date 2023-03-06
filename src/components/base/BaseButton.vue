<template>
  <button v-if="!link" :class="setColor(color)">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="setColor(color)"
    ><slot></slot
  ></router-link>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
    redirect: {
      type: String,
      required: false,
      default: null,
    },
  },
  setup() {
    function setColor(color) {
      if (color === 'orange') {
        return 'orange';
      }
      if (color === 'black') {
        return 'black';
      }

      if (color === 'none') {
        return 'none';
      }
    }

    return {
      setColor,
    };
  },
};
</script>

<style lang="scss" scoped>
button,
a {
  border: none;
  text-decoration: none;
  width: 10rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  transition: 0.2s ease-in-out;
}

// button,
// a {
//   text-decoration: none;
//   padding: 0.75rem 1.5rem;
//   font: inherit;
//   background-color: #3a0061;
//   border: 1px solid #3a0061;
//   color: white;
//   cursor: pointer;
//   border-radius: 30px;
//   margin-right: 0.5rem;
//   display: inline-block;
// }

.orange {
  background: $dark-orange;
  color: white;
  &:hover {
    @include white-hover();
  }
}

.black {
  background: black;
  color: white;
  &:hover {
    @include white-hover();
  }
}

.none {
  background: none;
  outline: 1px solid black;
  color: black;
  &:hover {
    @include black-hover();
  }
}
</style>
