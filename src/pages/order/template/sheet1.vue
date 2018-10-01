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
                  v-model="$store.state.order.clientName"
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
                  v-model="$store.state.order.repName"
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
                  v-model="$store.state.order.projectName"
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
                  v-model="$store.state.order.deliveryMethod"
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
                  v-model="$store.state.order.deliveryDate"
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
                <el-radio v-model="$store.state.order.hopeTime" label="なる早" border>なる早</el-radio>
                <el-radio v-model="$store.state.order.hopeTime" label="通常" border>通常</el-radio>
                <el-radio v-model="$store.state.order.hopeTime" label="ゆっくり" border>ゆっくり</el-radio>
                <el-input
                  name="hopeTimeDetail"
                  type="text"
                  v-model="$store.state.order.hopeTimeDetail"
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
                  v-model="$store.state.order.siteName"
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
                  v-model="$store.state.order.siteDescription"
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
                  v-model="$store.state.order.ogpText"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">制作目的</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-checkbox-group v-model="$store.state.order.productionPurpose">
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
                <el-checkbox-group v-model="$store.state.order.orderRange">
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
                      v-model="$store.state.order.age"
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
                    <el-radio v-model="$store.state.order.gender" label="男性" border>男性</el-radio>
                    <el-radio v-model="$store.state.order.gender" label="女性" border>女性</el-radio>
                  </div>
                </div>
                <div class="form-item__column form-column">
                  <h3 class="form-item__title">職業</h3>
                  <div class="column__inner">
                    <el-checkbox :indeterminate="$store.state.order.isEmployIndeterminate" v-model="$store.state.order.checkAllEmployment" @change="handleCheckedAllEmployment">すべて選択</el-checkbox>
                    <el-checkbox-group v-model="$store.state.order.checkedEmployment" @change="handleCheckedEmploy">
                      <el-checkbox v-for="(emp, e) in employment" :label="emp" :key="e">{{emp.val}}</el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="form-item__column form-column">
                  <h3 class="form-item__title">職種</h3>
                  <div class="column__inner">
                    <el-checkbox :indeterminate="$store.state.order.isJobCategoryIndeterminate" v-model="$store.state.order.checkAllJobCategory" @change="handleCheckedAllJobCategory">すべて選択</el-checkbox>
                    <el-checkbox-group v-model="$store.state.order.checkedJobCategory" @change="handleCheckedJobCategory">
                      <el-checkbox v-for="(item, i) in jobCategory" :label="item" :key="i">{{item.val}}</el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
                <div class="form-item__column form-column">
                  <h3 class="form-item__title">地方圏</h3>
                  <div class="column__inner">
                    <el-checkbox :indeterminate="$store.state.order.isLocalIndeterminate" v-model="$store.state.order.checkAllLocal" @change="handleCheckedAllLocal">すべて選択</el-checkbox>
                    <el-checkbox-group v-model="$store.state.order.checkedLocal" @change="handleCheckedLocal">
                      <el-checkbox v-for="(local, l) in local" :label="local" :key="l">{{local.area}}</el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <el-button class="origin_btn origin_btn--primary" @click="$router.push(`/order/template/sheet2`)">
            次へ
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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
      local: []
    }
  },
  created () {
    setTimeout(() => {
      this.employment = this.$store.state.order.employment
      this.jobCategory = this.$store.state.order.jobCategory
      this.local = this.$store.state.order.local
    }, 1)
  },
  methods: {
    handleCheckedEmploy (value) { // 職業選択
      let checkedCount = value.length
      this.$store.state.order.checkAllEmployment = checkedCount === this.employment.length
      this.$store.state.order.isEmployIndeterminate = checkedCount > 0 && checkedCount < this.employment.length
    },
    handleCheckedAllEmployment (val) {  // 職業全て選択
      this.$store.state.order.checkedEmployment = val ? this.employment : []
      this.$store.state.order.isEmployIndeterminate = false
    },
    handleCheckedJobCategory (value) {  // 職種選択
      let checkedCount = value.length
      this.$store.state.order.checkAllJobCategory = checkedCount === this.jobCategory.length
      this.$store.state.order.isJobCategoryIndeterminate = checkedCount > 0 && checkedCount < this.jobCategory.length
    },
    handleCheckedAllJobCategory (val) { // 職種全て選択
      this.$store.state.order.checkedJobCategory = val ? this.jobCategory : []
      this.$store.state.order.isJobCategoryIndeterminate = false
    },
    handleCheckedLocal (value) {  // 地方圏選択
      let checkedCount = value.length
      this.$store.state.order.checkAllLocal = checkedCount === this.local.length
      this.$store.state.order.isLocalIndeterminate = checkedCount > 0 && checkedCount < this.local.length
    },
    handleCheckedAllLocal (val) { // 地方圏全て選択
      this.$store.state.order.checkedLocal = val ? this.local : []
      this.$store.state.order.isLocalIndeterminate = false
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
