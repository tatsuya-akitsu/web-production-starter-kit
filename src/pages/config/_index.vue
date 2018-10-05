<template>
  <div>
    <section class="section section-config">
      <page-sidebar />
      <div class="dashboard-main">
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
          :class="{anim: $store.state.setErrorPasswordLength === true}"
          show-icon
        />
        <el-alert
          title="パスワードは半角英数字の大文字･小文字･数字を含む8文字以上で設定をお願いします"
          type="error"
          :class="{anim: $store.state.setErrorPasswordReg === true}"
          show-icon
        />
        <div class="wrapper--main">
        <page-section-title title="設定" img="/img/config/config_img1.svg" />
        <div class="config__wrap">
          <form id="signupform" name="signupform" class="form" method="post" @submit.prevent="updateAccount">
            <div class="form-item">
              <label class="form-label">
                <span class="label__title">ユーザー名</span>
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
            <el-button native-type="submit" class="origin_btn origin_btn--primary">プロフィール更新</el-button>
          </form>
          <el-button class="origin_btn origin_btn--aleart" @click="dialogVisible = true">
            退会処理
          </el-button>
          <el-dialog
            title="削除確認"
            :visible.sync="dialogVisible"
            width="640px"
            center
          >
            <p class="delete__text">
              選択したデータを削除します。<br />
              本当に削除してもよろしいですか？
              <br /><br />
              データベースに保存されているアカウント登録情報（ユーザー名・サムネイル・メールアドレス・パスワード･案件依頼情報）記録したデータを削除し、以降復旧は不可能になります。<br />
              再度ご利用になる場合は<a @click="$router.push('/signup')">こちらより</a>再度アカウント登録が必要になります
            </p>
            <el-button class="origin_btn--small origin_btn--secondary" @click="dialogVisible = false">キャンセル</el-button>
            <el-button class="origin_btn--small origin_btn--primary" @click="deleteData">退会する</el-button>
          </el-dialog>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase.js'
import PageSidebar from '~/components/PageSidebar'
import PageSectionTitle from '~/components/PageSectionTitle'

export default {
  name: 'config',
  components: { PageSidebar, PageSectionTitle },
  head() {
    return {
      title: '設定'
    }
  },
  data: () => {
    return {
      errors: [],
      uid: '',
      name: '',
      email: '',
      password: '',
      photoUrl: '',
      provider: '',
      dialogVisible: false,
    }
  },
  created () {
    this.uid = firebase.auth().currentUser.uid
    this.name = firebase.auth().currentUser.displayName
    this.email = firebase.auth().currentUser.email
    this.password = firebase.auth().currentUser.passsword
    this.photoUrl = firebase.auth().currentUser.photoURL
  },
  methods: {
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
    updateAccount () {
      const name = this.name
      const email = this.email
      const password = this.password
      const photoUrl = this.photoUrl
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

      console.log(this.errors, this.$store.state)

      if(!isValid) {
        this.errors = []
        return;
      }

      firebase.auth().currentUser.updateProfile({
        displayName: this.name,
        email: this.email,
        password: this.password,
        photoURL: this.photoUrl
      }).then(() => {
        console.log('hogehoge')
        this.$store.commit('updateProfile')
      }).catch((error) => {
        console.log(error)
      })
    },
    deleteData () {
      firebase.auth().currentUser.delete().then(() => {
        this.$router.push('/')
      }).catch((error) => {
        console.log(error)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper--main {
  margin: 0 auto;
  max-width: 640px;
  text-align: center;
}

.config__wrap {
  margin: 3rem 0 0;
}

.form {
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

.origin_btn--aleart {
  margin: 4rem 0 0;
}
.delete__text {
  a {
    color: $color-main;
    text-decoration: underline;
  }
}
</style>
