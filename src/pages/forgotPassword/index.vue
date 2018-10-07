<template>
  <section class="section section-forgotPassword">
    <div class="wrapper">
      <img src="/img/logo.svg" alt="" class="login__logo" />
      <h2 class="login-title">ログイン</h2>
      <p>
        パスワード再設定用のメールをお送りします。<br />
        登録しているメールアドレスを入力してください
      </p>
      <el-alert
        title="パスワード再設定のメール送信が完了しました"
        type="success"
        :class="{anim: success === true}"
        show-icon
      />
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
      <form id="forgotForm" name="forgotForm" class="form" method="post" @submit.prevent="sendForgotPassword">
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
        <el-button native-type="submit" class="origin_btn origin_btn--primary">送信</el-button>
      </form>
    </div>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase.js'

export default {
  name: 'forgotPassword',
  head() {
    return {
      title: 'パスワード再設定'
    }
  },
  data: () => {
    return {
      errors: [],
      email: '',
      success: false
    }
  },
  created() {
    console.log(this.$store.state)
  },
  methods: {
    sendForgotPassword () {
      const mail = this.email
      let isValid = true

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
      if (!isValid) {
        this.errors = []
      }

      firebase.auth().sendPasswordResetEmail(mail)
        .then(() => {
          this.success = true
        })
        .catch((errors) => {
          console.log(errors)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.section-forgotPassword {
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

.el-alert {
  top: -70%;

  &.anim {
    top: -20%;
  }
}
</style>


