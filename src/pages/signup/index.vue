<template>
  <div>
    <section class="section section-signup">
      <div class="wrapper">
        <img src="/img/logo.svg" alt="" class="signup__logo" />
        <h2 class="signup-title">POiDERはWEB制作依頼を<br />スムーズに行うプラットフォームです</h2>
        <form id="signupform" name="signupform" class="form" method="post" @submit.prevent="createAccount">
          <div class="form-announce">
            <p class="form-msg" v-for="(item, i) in errors" :key="i">
              <img src="/img/icon/icon_exclamation.svg" alt="" />
              <span class="alert-msg">{{ item }}</span>
            </p>
          </div>
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
        <el-button class="origin_btn origin_btn--tertiary" @click="googleLogin">
          <img src="/img/icon/icon_google.svg" alt="" />
          Googleで新規登録
        </el-button>
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
  methods: {
    googleLogin() {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider).catch((err) => {
        this.errors.push(err)
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
      }
      if (regName.test(name)) {
        isValid = false
        this.errors.push('卑猥もしくは不適切な言葉が含まれています')
      }

      if (!email.length) {
        isValid = false
        this.errors.push('メールアドレスが未入力です')
      }
      if (!email.match(regEmail)) {
        isValid = false
        this.errors.push('メールアドレスの入力形式が違います')
      }

      if (!password.length) {
        isValid = false
        this.errors.push('パスワードが未入力です')
      }
      if (!password.match(regPW)) {
        isValid = false
        this.errors.push('パスワードは半角英数字の大文字･小文字･数字を含む8文字以上で設定をお願いします')
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
          console.log(firebase.auth().currentUser.uid)
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
</style>
