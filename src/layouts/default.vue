<template>
  <div id="app">
    <app-header />
    <transition name="fade">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import AppHeader from '~/components/Header'

export default {
  components: { AppHeader }
}
</script>

<style lang="scss">
html {
  display: block;
  font-size: 62.5%;
}

body {
  @media screen and (max-width: 768px) {
    overflow-x: hidden;
  }

  background: $base-wh;
  color: $base-bl;
  font-family: $font-stack;
  height: 100%;
  line-height: $base-lineHeight;
  margin: 0 auto;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-scrolling: touch;
  -os-overflow-scrolling: touch;
  padding: 0;
  position: relative;
  width: 100%;
}

.wrapper {
  position: relative;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
  max-width: $inner-width;
}

img {
  width: 100%;
  max-width: 100%;
}
// btn
.origin__btn--primary {
  padding: 1.6rem 4.5rem;
  border-radius: 5px;
  background-color: $color-main;
  border: 1px solid $color-main;
  transition: $init-anim;

  span {
    transition: $init-anim;
    font-size: 1.4rem;
    font-weight: bold;
    color: $base-wh;
  }

  &:hover {
    transition: $init-anim;
    background-color: $base-wh;

    span {
      color: $color-main;
      transition: $init-anim;
    }
  }
}
.origin__btn--secondary {
  padding: 1.6rem 4.5rem;
  border-radius: 5px;
  background-color: #edeff1;
  border: 1px solid #edeff1;
  transition: $init-anim;

  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: $base-bl;
    transition: $init-anim;
  }

  &:hover {
    transition: $init-anim;
    background-color: $base-bl;

    span {
      transition: $init-anim;
      color: #edeff1;
    }
  }
}
</style>

