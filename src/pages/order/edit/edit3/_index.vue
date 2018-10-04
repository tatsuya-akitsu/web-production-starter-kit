<template>
  <div>
    <section class="section section--style_1">
      <page-sidebar />
      <div class="dashboard-main">
        <div class="wrapper--main">
          <page-section-title title="設定情報" img="/img/order/order_img_title3.svg" />
          <form id="configForm" name="configForm" class="form form-order" method="post">
            <div class="form-announce">
              <p class="form-msg" v-for="(item, i) in errors" :key="i">
                <img src="/img/icon/icon_exclamation.svg" alt="" />
                <span class="alert-msg">{{ item }}</span>
              </p>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">アナリティクス情報</span>
                <span class="require-icon require-icon__any">任意</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="設定が必要なアナリティクスがあればご記入ください"
                  v-model="$store.state.editOrder.analytics"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">サーバー名</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="serverName"
                  type="text"
                  v-model="$store.state.editOrder.serverName"
                  class="form-control"
                />
              </div>
            </div>

            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">サーバーパスワード</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="serverPassword"
                  type="text"
                  v-model="$store.state.editOrder.serverPassword"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">サーバー管理画面ログインID</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="controlLoginId"
                  type="text"
                  v-model="$store.state.editOrder.controlLoginId"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">サーバー管理画面ログインパスワード</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="controlLoginPassword"
                  type="text"
                  v-model="$store.state.editOrder.controlLoginPassword"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">FTPサーバー名</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="ftpServerName"
                  type="text"
                  v-model="$store.state.editOrder.ftpServerName"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">FTPアカウント名</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="ftpAccountName"
                  type="text"
                  v-model="$store.state.editOrder.ftpAccountName"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">WordPressログインID</span>
                <span class="require-icon require-icon__any">任意</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="wordpressLoginId"
                  type="text"
                  v-model="$store.state.editOrder.wordpressLoginId"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">WordPressログインパスワード</span>
                <span class="require-icon require-icon__any">任意</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="wordpressLoginPassword"
                  type="text"
                  v-model="$store.state.editOrder.wordpressLoginPassword"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">その他アクセス制限ID</span>
                <span class="require-icon require-icon__any">任意</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="otherLoginId"
                  type="text"
                  v-model="$store.state.editOrder.otherLoginId"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">その他アクセス制限パスワード</span>
                <span class="require-icon require-icon__any">任意</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="otherLoginPassword"
                  type="text"
                  v-model="$store.state.editOrder.otherLoginPassword"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">メモ</span>
                <span class="require-icon require-icon__any">任意</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="その他備考があればご記入ください"
                  v-model="$store.state.editOrder.memo"
                />
              </div>
            </div>
          </form>
          <el-button class="origin_btn origin_btn--tertiary" @click="$router.push(`/order/edit/edit2/${key}`)">
            戻る
          </el-button>
          <el-button class="origin_btn origin_btn--primary" @click="$router.push(`/order/edit/confirm/${key}`)">
            確認画面へ
          </el-button>
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
  name: 'order',
  components: { PageSidebar, PageSectionTitle },
  head() {
    return {
      title: '設定情報'
    }
  },
  data: () => {
    return {
      errors: [],
      key: ''
    }
  },
  created () {
    const uid = firebase.auth().currentUser.uid
    const orderId = this.$route.params.index
    firebase.firestore().collection(uid).doc(orderId).get()
      .then((doc) => {
        this.key = doc.id
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style lang="scss" scoped>
.section-order {
  text-align: center;
}
.wrapper--main {
  margin: 0 auto;
  max-width: 780px;
  text-align: center;
}
</style>
