<template>
  <div>
    <section class="section section-login">
      <div class="wrapper">
        <img src="/img/logo.svg" alt="" class="login__logo" />
        <h2 class="login-title">ログイン</h2>
        <form id="loginform" name="loginform" class="form" method="post" @submit.prevent="normalLogin">
          <el-alert
            title="メールアドレスが未入力です"
            type="error"
            :class="{anim: $store.state.setErrorMail === true}"
            show-icon
          />
          <el-alert
            title="メールアドレスの入力形式が違います"
            type="error"
            :class="{anim: $store.state.setErrorMailReg === true}"
            show-icon
          />
          <el-alert
            title="パスワードが未入力です"
            type="error"
            :class="{anim: $store.state.setErrorPasswordLength === true}"
            show-icon
          />
          <el-alert
            title="パスワードは半角英数字の大文字･小文字･数字を含む8文字以上で設定をお願いします"
            type="error"
            :class="{anim: $store.state.setErrorPasswordReg === true}"
            show-icon
          />
          <div class="form-item">
            <label class="form-label">
              <span class="label__title">メールアドレス</span>
            </label>
            <div class="form-item__inner">
              <el-input
                name="email"
                type="email"
                v-model="email"
                placeholder="メールアドレス"
                class="form-control"
                :class="{error: $store.state.setErrorMail === true || $store.state.setErrorMailReg === true}"
              />
            </div>
          </div>
          <div class="form-item">
            <label class="form-label">
              <span class="label__title">パスワード</span>
            </label>
            <div class="form-item__inner">
              <el-input
                name="password"
                type="password"
                v-model="password"
                placeholder="パスワード"
                class="form-control"
                :class="{error: $store.state.setErrorPasswordLength === true || $store.state.setErrorPasswordReg === true}"
              />
            </div>
          </div>
          <el-button native-type="submit" class="origin_btn origin_btn--primary">ログイン</el-button>
          <a class="login__link">パスワードを忘れた方はこちら</a>
        </form>
        <span class="login__note">or</span>
        <div class="login__btn-wrap">
          <el-button class="origin_btn origin_btn--tertiary" @click="googleLogin">
            <img src="/img/icon/icon_google.svg" alt="" />
            Googleでログイン
          </el-button>
          <el-button class="origin_btn origin_btn--facebook" @click="fbLogin">
            <img src="/img/icon/icon_facebook.svg" alt="" />
            Facebookでログイン
          </el-button>
          <el-button class="origin_btn origin_btn--tertiary" @click="fbLogin">
            <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2350 2314.8" xml:space="preserve">
              <path d="M1175,0C525.8,0,0,525.8,0,1175c0,552.2,378.9,1010.5,890.1,1139.7c-5.9-14.7-8.8-35.3-8.8-55.8v-199.8H734.4
	            c-79.3,0-152.8-35.2-185.1-99.9c-38.2-70.5-44.1-179.2-141-246.8c-29.4-23.5-5.9-47,26.4-44.1c61.7,17.6,111.6,58.8,158.6,120.4
	            c47,61.7,67.6,76.4,155.7,76.4c41.1,0,105.7-2.9,164.5-11.8c32.3-82.3,88.1-155.7,155.7-190.9c-393.6-47-581.6-240.9-581.6-505.3
	            c0-114.6,49.9-223.3,132.2-317.3c-26.4-91.1-61.7-279.1,11.8-352.5c176.3,0,282,114.6,308.4,143.9c88.1-29.4,185.1-47,284.9-47
	            c102.8,0,196.8,17.6,284.9,47c26.4-29.4,132.2-143.9,308.4-143.9c70.5,70.5,38.2,261.4,8.8,352.5c82.3,91.1,129.3,202.7,129.3,317.3
	            c0,264.4-185.1,458.3-575.7,499.4c108.7,55.8,185.1,214.4,185.1,331.9V2256c0,8.8-2.9,17.6-2.9,26.4
	            C2021,2123.8,2350,1689.1,2350,1175C2350,525.8,1824.2,0,1175,0L1175,0z"/></svg>
            Githubでログイン
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase.js'

export default {
  name: 'login',
  head() {
    return {
      title: 'ログイン'
    }
  },
  data: () => {
    return {
      errors: [],
      email: '',
      password: '',
    }
  },
  updated () {
    if (this.$store.state.isLoading === true) {
      const loading = document.getElementById('loading')
      const wh = window.innerHeight
      loading.style.height = `${wh}px`
    }
  },
  methods: {
    googleLogin() {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          this.$store.commit('inLoading')
          this.$router.push(`/dashboard/${result.user.uid}`)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fbLogin () {
      let provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          this.$store.commit('inLoading')
          this.$router.push(`/dashboard/${result.user.uid}`)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    githubLogin () {
      let provider = new firebase.auth.GithubAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          this.$store.commit('inLoading')
          this.$router.push(`/dashboard/${result.user.uid}`)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    normalLogin() {
      const mail = this.email
      const password = this.password
      let isValid = true

      const regPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}')
      const regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!mail.length) {
        isValid = false
        this.errors.push('メールアドレスが未入力です')
        this.$store.commit('errorConsole', 'mailLength')
      }
      if (!mail.match(regMail)) {
        isValid = false
        this.errors.push('メールアドレスの入力形式が違います')
        this.$store.commit('errorConsole', 'mailReg')
      }

      if (!password.length) {
        isValid = false
        this.errors.push('パスワードが未入力です')
        this.$store.commit('errorConsole', 'passwordLength')
      }
      if (!password.match(regPassword)) {
        isValid = false
        this.errors.push('パスワードの入力形式が違います')
        this.$store.commit('errorConsole', 'passwordReg')
      }

      if (!isValid) {
        this.errors = []
      }
      firebase.auth().signInWithEmailAndPassword(mail, password)
        .then(() => {
          localStorage.mail = mail
          localStorage.password = password
          this.$store.commit('inLoading')
          this.$router.push(`/dashboard/${firebase.auth().currentUser.uid}`)
        })
        .catch((error) => {
          this.errors.push('ログインに失敗しました')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.section-login {
  padding-top: 10rem;
  text-align: center;
}
.login__logo {
  display: block;
  margin: 0 auto;
  width: 15rem;
}
.login-title {
  margin: 0;
  padding-top: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: $base-bl;
}

.form {
  margin-top: 5rem;
  max-width: 540px;
  text-align: center;
}

.login__link {
  cursor: pointer;
  display: block;
  margin: 1rem 0 0;
  font-size: 1.2rem;
  color: $color-main;
  transition: $init-anim;
  text-decoration: underline;

  &:hover {
    transition: $init-anim;
    text-decoration: none;
  }
}

.login__note {
  display: block;
  position: relative;
  margin: 3rem auto;
  font-size: 1.2rem;
  color: #ccc;
  text-align: center;
  max-width: 540px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    width: 230px;
    height: 1px;
    background-color: #ccc;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: 230px;
    height: 1px;
    background-color: #ccc;
  }
}

.login__btn-wrap {
  button {
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
    width: 256px;

    &:nth-of-type(1) {
      margin-top: 0;
    }
  }
}
</style>
