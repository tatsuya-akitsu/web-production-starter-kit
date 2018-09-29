<template>
  <header id="header" class="header">
    <div class="wrapper--header" v-if="!$store.state.isLoggined">
      <p class="header-note">幅広いWEB制作に対応する依頼・見積りを簡易制作｜POiDER</p>
      <div class="header__area">
        <a class="header__link" @click="$router.push('/signup')">新規登録</a>
        <a class="header__link" @click="$router.push('/login')">ログイン</a>
      </div>
    </div>
    <div class="wrapper--header wrapper--loggined" v-else-if="$store.state.isLoggined">
      <img src="/img/logo--white.svg" alt="" class="loggined-logo" />
    </div>
  </header>
</template>

<script>
import firebase from '@/plugins/firebase.js'

export default {
  updated () {
    if (this.$store.state.isLoggined === true) {
      this.name = firebase.auth().currentUser.displayName
      this.photoUrl = firebase.auth().currentUser.photoURL
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #2e3135;
}
.wrapper--header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 1rem 0;
  width: 100%;
  max-width: $inner-width;
}

.header-note {
  margin: 0;
  font-size: 1.2rem;
  color: $base-wh;
}
.header__link {
  cursor: pointer;
  display: inline-block;
  padding: 0 1rem 0 0;
  font-size: 1.2rem;
  color: $base-wh;
  line-height: 1;
  text-decoration: underline;
  transition: $init-anim;

  &:nth-of-type(2) {
    padding: 0 0 0 1rem;
    border-left: 1px solid $base-wh;
  }

  &:hover {
    transition: $init-anim;
    text-decoration: none;
  }
}

.wrapper--loggined {
  img {
    display: block;
    width: 8rem;
  }
}
</style>
