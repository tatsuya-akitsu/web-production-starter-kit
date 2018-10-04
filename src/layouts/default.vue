<template>
  <div id="app">
    <app-header v-if="$store.state.isLoading === false" />
    <transition name="fade">
      <nuxt v-if="$store.state.isLoading === false" />
    </transition>
    <app-footer v-if="$store.state.isLoading === false" />
    <section id="loading" class="section section-loading" v-if="$store.state.isLoading === true">
      <div id="loadingElm" class="loading-wrapper" :class="{ anim: $store.state.isLoading === true }">
        <div class="loading">
          <div>
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
            <div class="c4"></div>
          </div>
          <span>Loaading...</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '~/components/Header'
import AppFooter from '~/components/Footer'

export default {
  components: { AppHeader, AppFooter },
  beforeUpdate() {
    if (this.$store.state.isLoading === true) {
      setTimeout(() => {
        this.$store.commit('outLoading')
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
html {
  display: block;
  font-size: 62.5%;
}

body {
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

.section--style_1 {
  display: flex;
  justify-content: space-between;  
}
.dashboard-main {
  margin-left: auto;
  padding: 5rem 3rem;
  width: calc(100% - 26rem);
}
.wrapper {
  position: relative;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
  max-width: $inner-width;
}
.wrapper--main {
  margin: 0 auto;
  max-width: 1200px;
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

  img,
  svg {
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
    
    path {
      fill: #f3f3f3;
    }
  }
}
.origin_btn--facebook {
  background-color: #305097;
  border: 1px solid #305097;

  span {
    color: $base-wh;
  }

  &:hover {
    background-color: $base-wh;

    span {
      color: #305097;
    }
  }
}
.origin_btn--small {
  padding: 1.2rem 2.8rem;
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

.origin-badge {
  display: inline-block;
  vertical-align: middle;
  padding: .4rem .8rem;
  font-size: 1.2rem;
  line-height: 1;
  border-radius: 3px;
}
.origin-badge__create {
  color: $base-wh;
  background-color: #0fe071;
}
.origin-badge__doing {
  color: $base-wh;
  background-color: #ef1488;
}
.origin-badge__done {
  color: $base-wh;
  background-color: #0c83b6;
}
.origin-badge__warning {
  color: $base-bl;
  background-color: #e0da0f;
}


/* loading */
.section-loading {
  position: relative;
  width: 100%;
  height: 100vh;
}
.loading-wrapper {
  width: 0;
  height: 100%;
  background-color: $color-main;
  transition: all .3s ease-out;

  &.anim {
    transition: all .3s ease-out;
    width: 100%;
  }
}

.loading > div {
  width: 60px;
  height: 60px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  top: 50%;
  margin-top: -30px;
}


.loading > div > div {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  background: $base-wh;
  top: 10px;
  left: 10px;
  transform-origin: 20px 20px;
  border-radius: 8px;
  animation: spin-a 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
}

.loading > div > .c2 {
  top: 10px;
  left: auto;
  right: 10px;
  transform-origin: -4px 20px;
  animation: spin-b 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
}
.loading > div > .c3 {
  top: auto;
  left: auto;
  right: 10px;
  bottom: 10px;
  transform-origin: -4px -4px;
  animation: spin-c 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
}
.loading > div > .c4 {
  top: auto;
  bottom: 10px;
  transform-origin: 20px -4px;
  animation: spin-d 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
}

@keyframes spin-a {
  0%   { transform: rotate(90deg); }
  0%  { transform: rotate(90deg); }
  50%  { transform: rotate(180deg); }
  75%  { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
}
@keyframes spin-b {
  0%   { transform: rotate(90deg); }
  25%  { transform: rotate(90deg); }
  25%  { transform: rotate(180deg); }
  75%  { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
}
@keyframes spin-c {
  0%   { transform: rotate(90deg); }
  25%  { transform: rotate(90deg); }
  50%  { transform: rotate(180deg); }
  50%  { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
}
@keyframes spin-d {
  0%   { transform: rotate(90deg); }
  25%  { transform: rotate(90deg); }
  50%  { transform: rotate(180deg); }
  75%  { transform: rotate(270deg); }
  75% { transform: rotate(360deg); }
  100% { transform: rotate(360deg); }
}


.loading > span {
  width: 100px;
  height: 30px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: 30px;
  font-size: 12px;
  color: $base-wh;
  text-align: center;
}
</style>

