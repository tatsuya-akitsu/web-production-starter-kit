<template>
  <div>
    <section class="section section-login">
      <div class="wrapper">
        <img src="/img/logo.svg" alt="" class="login__logo" />
        <h2 class="login-title">ログイン</h2>
        <form id="loginform" name="loginform" class="form" method="post" @submit.prevent="normalLogin">
          <div class="form-announce">
            <p class="form-msg" v-for="(item, i) in errors" :key="i">
              <img src="/img/icon/icon_exclamation.svg" alt="" />
              <span class="alert-msg">{{ item }}</span>
            </p>
          </div>
          <div class="form-item">
            <label>
              <span class="label__title">メールアドレス</span>
            </label>
            <div class="form-item__inner">
              <el-input
                name="email"
                type="email"
                v-model="email"
                placeholder="メールアドレス"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-item">
            <label>
              <span class="label__title">パスワード</span>
            </label>
            <div class="form-item__inner">
              <el-input
                name="password"
                type="password"
                v-model="password"
                placeholder="パスワード"
                class="form-control"
              />
            </div>
          </div>
          <el-button native-type="submit" class="origin_btn origin_btn--primary">ログイン</el-button>
          <a class="login__link">パスワードを忘れた方はこちら</a>
        </form>
        <span class="login__note">or</span>
        <el-button class="origin_btn origin_btn--tertiary" @click="googleLogin">
          <img src="/img/icon/icon_google.svg" alt="" />
          Googleでログイン
        </el-button>
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
  mounted () {
    firebase.auth().getRedirectResult().then(result => {
      if (result.user) {
        this.$router.push(`/dashboard/${result.user.uid}`)
      }
    })
  },
  methods: {
    googleLogin() {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider).catch((err) => {
        this.errors.push(err)
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
      }
      if (!mail.match(regMail)) {
        isValid = false
        this.errors.push('メールアドレスの入力形式が違います')
      }

      if (!password.length) {
        isValid = false
        this.errors.push('パスワードが未入力です')
      }
      if (!password.match(regPassword)) {
        isValid = false
        this.errors.push('パスワードの入力形式が違います')
      }

      if (!isValid) {
        this.errors = []
      }
      firebase.auth().signInWithEmailAndPassword(mail, password)
        .then(() => {
          localStorage.mail = mail
          localStorage.password = password
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
  margin: 0 auto;
  margin-top: 5rem;
  max-width: 540px;
}
.form-item {
  margin: 3rem 0 0;

  &:nth-of-type(1) {
    margin: 0;
  }
  
  &:nth-last-of-type(1) {
    margin-bottom: 3rem;
  }
}

label {
  display: block;
  padding-bottom: 1.2rem;
  font-size: 0;
  text-align: left;
}
.label__title {
  font-size: 1.4rem;
  font-weight: bold;
  color: $base-bl;
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
.form-msg {
  margin: 0;
  padding: 1rem 3rem;
  font-size: 0;
  text-align: left;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 3px;

  img {
    display: inline-block;
    vertical-align: middle;
    margin: -.2rem 1rem 0 0;
    width: 1.4rem;
  }
}
.alert-msg {
  display: inline-block;
  vertical-align: middle;
  font-size: 1.4rem;
  color: #721c24;
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
</style>
