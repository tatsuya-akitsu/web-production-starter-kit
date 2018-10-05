<template>
  <div>
    <section class="section section-signup">
      <div class="wrapper">
        <img src="/img/logo.svg" alt="" class="signup__logo" />
        <h2 class="signup-title">POiDERはWEB制作依頼を<br />スムーズに行うプラットフォームです</h2>
        <form id="signupform" name="signupform" class="form" method="post" @submit.prevent="createAccount">
          <el-alert
            title="プロフィールの変更が完了しました"
            type="success"
            :class="{anim: $store.state.completeProfile === true}"
            show-icon
          />
          <el-alert
            title="アカウント名が未入力です"
            type="error"
            :class="{anim: $store.state.setErrorNameLength === true}"
            show-icon
          />
          <el-alert
            title="卑猥もしくは不適切な言葉が含まれています"
            type="error"
            :class="{anim: $store.state.setErrorName === true}"
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
          <el-alert
            title="パスワードが未入力です"
            type="error"
            :class="{anim: $store.state.setErrorPasswordLength ===  true}"
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
              <span class="label__title">ユーザー名</span>
              <span class="require-icon require-icon__required">必須</span>
            </label>
            <div class="form-item__inner">
              <el-input
                name="name"
                type="text"
                v-model="name"
                placeholder="ユーザーネーム"
                class="form-control"
                :class="{error: $store.state.setErrorName === true || $store.state.setErrorNameLength === true}"
              />
            </div>
          </div>
          <div class="form-item">
            <label class="form-label">
              <span class="label__title">メールアドレス</span>
              <span class="require-icon require-icon__required">必須</span>
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
              <span class="require-icon require-icon__required">必須</span>
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
              <p class="form__note">パスワードは半角英数字の大文字･小文字･数字を含む8文字以上で設定をお願いします</p>
            </div>
          </div>
          <div class="form-item">
            <label class="form-label">
              <span class="label__title">サムネイル</span>
              <span class="require-icon require-icon__any">任意</span>
            </label>
            <div class="form-item__inner">
              <div class="thumbnail-input__box">
                <div class="thumbnail-input__inner">
                  <p class="thumbnail__note">
                    <img src="/img/signup/cloud.svg" alt="" />
                    クリックして画像をアップロードしてください
                  </p>
                  <input
                    type="file"
                    name="file"
                    v-on:change="inputThumbnail"
                  />
                  <div class="thumbnail-preview__box" />
                </div>
              </div>
            </div>
          </div>
          <el-button native-type="submit" class="origin_btn origin_btn--primary">アカウント作成</el-button>
        </form>
        <span class="signup__note">or</span>
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
  name: 'signup',
  head() {
    return {
      title: '新規登録'
    }
  },
  data: () => {
    return {
      name: '',
      email: '',
      password: '',
      photoUrl: '',
      errors: []
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
    inputThumbnail(e) {
      let files = e.target.files || e.dataTransfer.files
      const storageRef = firebase.storage().ref();
      var uploadRef = storageRef.child(files[0].name);
      const f = files[0];
      uploadRef.put(f).then((snapshot) => {
        uploadRef.getDownloadURL().then((url) => {
          const thumbnail = window.document.querySelector('.thumbnail-preview__box');
          thumbnail.style.backgroundImage = "url("+url+")";
          console.log(url)
          this.photoUrl = url
        }).catch((err) => {
          this.errors.push(err)
        });
      });
    },
    createAccount() {
      const name = this.name
      const email = this.email
      const password = this.password
      const photo = this.photoUrl
      let isValid = true
      
      const regName = /(ちんちん|おっぱい)/;
      const regPW = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}')
      const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!name.length) {
        isValid = false
        this.errors.push('アカウント名が未入力です')
        this.$store.commit('errorConsole', 'nameLength')
      }
      if (regName.test(name)) {
        isValid = false
        this.errors.push('卑猥もしくは不適切な言葉が含まれています')
        this.$store.commit('errorConsole', 'nameReg')
      }

      if (!email.length) {
        isValid = false
        this.errors.push('メールアドレスが未入力です')
        this.$store.commit('errorConsole', 'mailLength')
      }
      if (!email.match(regEmail)) {
        isValid = false
        this.errors.push('メールアドレスの入力形式が違います')
        this.$store.commit('errorConsole', 'mailReg')
      }

      if (!password.length) {
        isValid = false
        this.errors.push('パスワードが未入力です')
        this.$store.commit('errorConsole', 'passwordLength')
      }
      if (!password.match(regPW)) {
        isValid = false
        this.errors.push('パスワードは半角英数字の大文字･小文字･数字を含む8文字以上で設定をお願いします')
        this.$store.commit('errorConsole', 'passwordReg')
      }

      if(!isValid) {
        this.errors = []
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(newUser => {
          return newUser.user.updateProfile({
            displayName: this.name,
            photoURL: this.photoUrl
          });
        }).then(() => {
          this.$store.commit('inLoading')
          this.$router.push(`/dashboard/${firebase.auth().currentUser.uid}`)
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.section-signup {
  padding-top: 10rem;
  text-align: center;
}
.signup__logo {
  display: block;
  margin: 0 auto;
  width: 15rem;
}
.signup-title {
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

.form-control {
  text-align: left;
}

.thumbnail-input__box {
  position: relative;
  height: 300px;
  border-radius: 5px;
  background-color: #f8f8f8;
}
.thumbnail-input__inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  border: 2px dashed #d1d1d1;
  background-color: transparent;
}
.thumbnail__note {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  color: #d1d1d1;
  width: 100%;

  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 6rem;
  }
}
input[type="file"] {
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.thumbnail-preview__box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  &::before {
    content: '';
    display: block;
    padding-top: 60%;
  }
}

.signup__note {
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

.section-loading {
  position: relative;
  width: 0;
  height: 100vh;
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
