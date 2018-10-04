<template>
  <div>
    <section class="section section--style_1">
      <page-sidebar />
      <div class="dashboard-main">
        <div class="wrapper--main">
          <page-section-title title="基本情報" img="/img/order/order_img_title1.svg" />
          <form id="initForm" name="initForm" class="form form-order" method="post">
            <div class="form-announce">
              <p class="form-msg" v-for="(item, i) in errors" :key="i">
                <img src="/img/icon/icon_exclamation.svg" alt="" />
                <span class="alert-msg">{{ item }}</span>
              </p>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">クライアント名</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="clientName"
                  type="text"
                  v-model="$store.state.editOrder.clientName"
                  placeholder="クライアント名"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">担当者名</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="repName"
                  type="text"
                  v-model="$store.state.editOrder.repName"
                  placeholder="山田 太郎"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">案件名</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="projectName"
                  type="text"
                  v-model="$store.state.editOrder.projectName"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">納品方法</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="deliveryMethod"
                  type="text"
                  v-model="$store.state.editOrder.deliveryMethod"
                  placeholder="データ納品"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">納品希望日</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-date-picker
                  v-model="$store.state.editOrder.deliveryDate"
                  type="date"
                  placeholder="納品希望日を選択してください"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">希望制作期間</span>
                <span class="require-icon require-icon__any">任意</span>
              </label>
              <div class="form-item__inner">
                <el-radio v-model="$store.state.editOrder.hopeTime" label="なる早" border>なる早</el-radio>
                <el-radio v-model="$store.state.editOrder.hopeTime" label="通常" border>通常</el-radio>
                <el-radio v-model="$store.state.editOrder.hopeTime" label="ゆっくり" border>ゆっくり</el-radio>
                <el-input
                  name="hopeTimeDetail"
                  type="text"
                  v-model="$store.state.editOrder.hopeTimeDetail"
                  placeholder="○○日までにはいただけると嬉しいです"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">サイト名</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="siteName"
                  type="text"
                  v-model="$store.state.editOrder.siteName"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">サイトディスクリプション</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="当サイトは○○社のコーポレートサイトです"
                  v-model="$store.state.editOrder.siteDescription"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">OGPテキスト</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="当サイトは○○社のコーポレートサイトです"
                  v-model="$store.state.editOrder.ogpText"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">制作目的</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-checkbox-group v-model="$store.state.editOrder.productionPurpose">
                  <el-checkbox label="広告用LP" />
                  <el-checkbox label="サイトリニューアル" />
                  <el-checkbox label="新規制作" />
                  <el-checkbox label="既存サイト見栄え修正" />
                  <el-checkbox label="既存サイト機能修正" />
                  <el-checkbox label="その他" />
                </el-checkbox-group>
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">依頼範囲</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-checkbox-group v-model="$store.state.editOrder.orderRange">
                  <el-checkbox label="インフラ" />
                  <el-checkbox label="バックエンド" />
                  <el-checkbox label="フロントエンド" />
                  <el-checkbox label="デザイン" />
                  <el-checkbox label="画像作成" />
                  <el-checkbox label="イラスト作成" />
                  <el-checkbox label="テキスト作成" />
                </el-checkbox-group>
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">ターゲット層</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <div class="form-item__column form-column">
                  <h3 class="form-item__title">年齢層</h3>
                  <div class="column__inner">
                    <el-slider
                      v-model="$store.state.editOrder.age"
                      range
                      show-stops
                      :step="10"
                      :max="60"
                    />
                  </div>
                </div>
                <div class="form-item__column form-column">
                  <h3 class="form-item__title">性別</h3>
                  <div class="column__inner">
                    <el-radio v-model="$store.state.editOrder.gender" label="男性" border>男性</el-radio>
                    <el-radio v-model="$store.state.editOrder.gender" label="女性" border>女性</el-radio>
                  </div>
                </div>
                <div class="form-item__column form-column">
                  <h3 class="form-item__title">職業</h3>
                  <div class="column__inner">
                    <el-checkbox :indeterminate="$store.state.editOrder.isEmployIndeterminate" v-model="$store.state.editOrder.checkAllEmployment" @change="handleCheckedAllEmployment">すべて選択</el-checkbox>
                    <el-checkbox-group v-model="$store.state.editOrder.checkedEmployment" @change="handleCheckedEmploy">
                      <el-checkbox v-for="(emp, e) in employment" :label="emp" :key="e">{{emp}}</el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="form-item__column form-column">
                  <h3 class="form-item__title">職種</h3>
                  <div class="column__inner">
                    <el-checkbox :indeterminate="$store.state.editOrder.isJobCategoryIndeterminate" v-model="$store.state.editOrder.checkAllJobCategory" @change="handleCheckedAllJobCategory">すべて選択</el-checkbox>
                    <el-checkbox-group v-model="$store.state.editOrder.checkedJobCategory" @change="handleCheckedJobCategory">
                      <el-checkbox v-for="(item, i) in jobCategory" :label="item" :key="i">{{item}}</el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="form-item__column form-column">
                  <h3 class="form-item__title">地方圏</h3>
                  <div class="column__inner">
                    <el-checkbox :indeterminate="$store.state.editOrder.isLocalIndeterminate" v-model="$store.state.editOrder.checkAllLocal" @change="handleCheckedAllLocal">すべて選択</el-checkbox>
                    <el-checkbox-group v-model="$store.state.editOrder.checkedLocal" @change="handleCheckedLocal">
                      <el-checkbox v-for="(local, l) in local" :label="local" :key="l">{{local}}</el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <el-button class="origin_btn origin_btn--primary" @click="$router.push(`/order/edit/edit2/${key}`)">
            次へ
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
      title: '基本情報'
    }
  },
  data: () => {
    return {
      errors: [],
      employment: [],
      jobCategory: [],
      local: [],
      key: ''
    }
  },
  created () {
    const uid = firebase.auth().currentUser.uid
    const orderId = this.$route.params.index
    firebase.firestore().collection(uid).doc(orderId).get()
      .then((doc) => {
        this.key = doc.id
        this.$store.commit('update', doc.data())
      })
      .catch((error) => {
        console.log(error)
      })
  },
  mounted () {
    setTimeout(() => {
      this.employment = this.$store.state.editOrder.employment
      this.jobCategory = this.$store.state.editOrder.jobCategory
      this.local = this.$store.state.editOrder.local
    }, 1)
  },
  methods: {
    handleCheckedEmploy (value) { // 職業選択
      let checkedCount = value.length
      this.$store.state.editOrder.checkAllEmployment = checkedCount === this.employment.length
      this.$store.state.editOrder.isEmployIndeterminate = checkedCount > 0 && checkedCount < this.employment.length
    },
    handleCheckedAllEmployment (val) {  // 職業全て選択
      this.$store.state.editOrder.checkedEmployment = val ? this.employment : []
      this.$store.state.editOrder.isEmployIndeterminate = false
    },
    handleCheckedJobCategory (value) {  // 職種選択
      let checkedCount = value.length
      this.$store.state.editOrder.checkAllJobCategory = checkedCount === this.jobCategory.length
      this.$store.state.editOrder.isJobCategoryIndeterminate = checkedCount > 0 && checkedCount < this.jobCategory.length
    },
    handleCheckedAllJobCategory (val) { // 職種全て選択
      this.$store.state.editOrder.checkedJobCategory = val ? this.jobCategory : []
      this.$store.state.editOrder.isJobCategoryIndeterminate = false
    },
    handleCheckedLocal (value) {  // 地方圏選択
      let checkedCount = value.length
      this.$store.state.editOrder.checkAllLocal = checkedCount === this.local.length
      this.$store.state.editOrder.isLocalIndeterminate = checkedCount > 0 && checkedCount < this.local.length
    },
    handleCheckedAllLocal (val) { // 地方圏全て選択
      this.$store.state.editOrder.checkedLocal = val ? this.local : []
      this.$store.state.editOrder.isLocalIndeterminate = false
    }
  }
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
