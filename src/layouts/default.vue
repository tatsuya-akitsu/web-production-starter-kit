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
.origin_btn {
  padding: 1.6rem 4.5rem;
  border-radius: 5px;
  transition: $init-anim;
  
  span {
    transition: $init-anim;
    font-size: 1.4rem;
    font-weight: bold;
  }
  
  &:hover {
    transition: $init-anim;

    span {
      transition: $init-anim;
    }
  }

  img {
    margin: 0 1rem 0 0;
    width: 1.4rem;
  }
}
.origin_btn--primary {
  background-color: $color-main;
  border: 1px solid $color-main;

  span {
    color: $base-wh;
  }

  &:hover {
    background-color: $base-wh;

    span {
      color: $color-main;
    }
  }
}
.origin_btn--secondary {
  background-color: #edeff1;
  border: 1px solid #edeff1;

  span {
    color: $base-bl;
  }

  &:hover {
    background-color: $base-bl;

    span {
      color: #edeff1;
    }
  }
}
.origin_btn--tertiary {
  background-color: #f3f3f3;
  border: 1px solid #f3f3f3;

  span {
    color: $base-bl;
  }

  &:hover {
    background-color: $base-bl;

    span {
      color: #f3f3f3;
    }
  }
}
</style>

