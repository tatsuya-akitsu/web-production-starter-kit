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
      <el-dropdown>
        <div class="author-box">
          <img :src="photoUrl" alt="" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <p class="author__name">{{ name }}</p>
          <el-dropdown-item><a>マイページ</a></el-dropdown-item>
          <el-dropdown-item><a>設定</a></el-dropdown-item>
          <el-dropdown-item><a @click="logout">ログアウト</a></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import firebase from '@/plugins/firebase.js'

export default {
  data: () => {
    return {
      name: '',
      photoUrl: ''
    }
  },
  updated () {
    if (this.$store.state.isLoggined === true) {
      this.name = firebase.auth().currentUser.displayName
      this.photoUrl = firebase.auth().currentUser.photoURL
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
        .then(() => {
          this.$store.commit('logout')
          this.$router.push('/')
        }).catch((err) => {
          console.log(err)
        })
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
  height: 5rem;
}
.loggined-logo {
  margin: 0 0 0 1rem;
  display: block;
  width: 8rem;
}
.el-dropdown {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.author-box {
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    max-width: 100%;
  }
}
.author__name {
  margin: 0 2rem;
  padding-bottom: .5rem;
  font-size: 1.4rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.el-dropdown-menu {
  width: 15rem;
}
.el-dropdown-menu__item {
  padding: 0;
  color: $base-bl;
  line-height: $base-lineHeight;

  a {
    display: block;
    padding: .5rem 2rem;
  }

  &:nth-of-type(1) {
    margin-top: .5rem;
  }
}
</style>
