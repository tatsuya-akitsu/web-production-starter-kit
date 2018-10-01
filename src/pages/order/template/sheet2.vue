<template>
  <div>
    <section class="section section--style_1">
      <page-sidebar />
      <div class="dashboard-main">
        <div class="wrapper--main">
          <page-section-title title="仕様情報" img="/img/order/order_img_title2.svg" />
          <form id="specificationForm" name="specificationForm" class="form form-order" method="post">
            <div class="form-announce">
              <p class="form-msg" v-for="(item, i) in errors" :key="i">
                <img src="/img/icon/icon_exclamation.svg" alt="" />
                <span class="alert-msg">{{ item }}</span>
              </p>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">使用プラットフォーム</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-radio v-model="$store.state.order.useEnviroment" label="静的サイト" border>静的サイト</el-radio>
                <el-radio v-model="$store.state.order.useEnviroment" label="WordPress" border>WordPress</el-radio>
                <el-radio v-model="$store.state.order.useEnviroment" label="Strikingly" border>Strikingly</el-radio>
                <el-radio v-model="$store.state.order.useEnviroment" label="WiX" border>WiX</el-radio>
                <el-radio v-model="$store.state.order.useEnviroment" label="独自CMS" border>独自CMS</el-radio>
                <el-radio v-model="$store.state.order.useEnviroment" label="その他CMS" border>その他CMS</el-radio>
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">表示プラットフォーム</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-checkbox :indeterminate="$store.state.order.isDisplayIndeterminate" v-model="$store.state.order.checkAllDisplay" @change="handleCheckedAllDisplay">すべて選択</el-checkbox>
                <el-checkbox-group v-model="$store.state.order.checkedDisplay" @change="handleCheckedDisplay">
                  <el-checkbox v-for="(display, d) in display" :label="display" :key="d">{{display.val}}</el-checkbox>
                </el-checkbox-group>
                <div class="version-content">
                  <div class="version-box" v-for="(dis, c) in $store.state.order.checkedDisplay" :key="c">
                    <p>{{ dis.val }}</p>
                    <el-input
                      name="envVersion"
                      type="text"
                      v-model="dis.version"
                      placeholder="指定バージョンをご記入ください"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">レスポンシブ</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-checkbox :indeterminate="$store.state.order.isResponsiveIndeterminate" v-model="$store.state.order.checkAllResponsive" @change="handleCheckedAllResponsive">すべて選択</el-checkbox>
                <el-checkbox-group v-model="$store.state.order.checkedResponsive" @change="handleCheckedResponsive">
                  <el-checkbox v-for="(device, i) in responsive" :label="device" :key="i">{{device.val}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">サイトイメージURL</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="referenceSite1"
                  placeholder="google.com"
                  v-model="$store.state.order.referenceSite1"
                  class="md-form-control"
                >
                  <template slot="prepend">http://</template>
                </el-input>
                <el-input
                  name="referenceSite2"
                  placeholder="yahoo.co.jp"
                  v-model="$store.state.order.referenceSite2"
                  class="md-form-control"
                >
                  <template slot="prepend">http://</template>
                </el-input>
                <el-input
                  name="referenceSite3"
                  placeholder="bing.com"
                  v-model="$store.state.order.referenceSite3"
                  class="md-form-control"
                >
                  <template slot="prepend">http://</template>
                </el-input>
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">その他サイトイメージ</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="http://example.comの○○のようなデザインを取り入れてください。"
                  v-model="$store.state.order.otherReferenceSite"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">必要機能</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="資料請求用と求人応募用と2種類の応募フォームの設置をお願いします"
                  v-model="$store.state.order.requiredFeature"
                />
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">画像用意方法</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-radio v-model="$store.state.order.imagePreparation" label="新規作成" border>新規作成</el-radio>
                <el-radio v-model="$store.state.order.imagePreparation" label="クライアント側で用意" border>クライアント側で用意</el-radio>
                <el-radio v-model="$store.state.order.imagePreparation" label="既存サイトから回収" border>既存サイトから回収</el-radio>
              </div>
            </div>
            <div class="form-item order-item" v-if="$store.state.order.imagePreparation === '既存サイトから回収'">
              <label class="form-label">
                <span class="label__title">回収サイトURL</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="referenceSite1"
                  placeholder="google.com"
                  v-model="$store.state.order.collectionImgUrl"
                  class="md-form-control"
                >
                  <template slot="prepend">http://</template>
                </el-input>
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">テキスト用意方法</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-radio v-model="$store.state.order.textPreparation" label="新規作成" border>新規作成</el-radio>
                <el-radio v-model="$store.state.order.textPreparation" label="クライアント側で用意" border>クライアント側で用意</el-radio>
                <el-radio v-model="$store.state.order.textPreparation" label="既存サイトから回収" border>既存サイトから回収</el-radio>
              </div>
            </div>
            <div class="form-item order-item" v-if="$store.state.order.textPreparation === '既存サイトから回収'">
              <label class="form-label">
                <span class="label__title">回収サイトURL</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="referenceSite1"
                  placeholder="google.com"
                  v-model="$store.state.order.collectionTextUrl"
                  class="md-form-control"
                >
                  <template slot="prepend">http://</template>
                </el-input>
              </div>
            </div>
            <div class="form-item order-item">
              <label class="form-label">
                <span class="label__title">コピーライト</span>
                <span class="require-icon require-icon__required">必須</span>
              </label>
              <div class="form-item__inner">
                <el-input
                  name="clientName"
                  type="text"
                  v-model="$store.state.order.copyright"
                  placeholder="Copyright © 2018 example Corporation.All Rights Reserved."
                  class="form-control"
                />
              </div>
            </div>
          </form>
          <el-button class="origin_btn origin_btn--tertiary" @click="$router.push(`/order/template/sheet1`)">
            戻る
          </el-button>
          <el-button class="origin_btn origin_btn--primary" @click="$router.push(`/order/template/sheet3`)">
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
      title: '仕様情報'
    }
  },
  data: () => {
    return {
      errors: [],
      display: [],
      responsive: []
    }
  },
  created () {
    setTimeout(() => {
      this.display = this.$store.state.order.displayEnvironment
      this.responsive = this.$store.state.order.responsive
    }, 1)
  },
  methods: {
    handleCheckedDisplay (value) {  // 表示プラットフォーム選択
      let checkedCount = value.length
      this.$store.state.order.checkAllDisplay = checkedCount === this.display.length
      this.$store.state.order.isDisplayIndeterminate = checkedCount > 0 && checkedCount < this.display.length
      console.log(this.$store.state.order.checkedDisplay)
    },
    handleCheckedAllDisplay (val) { // 表示プラットフォーム全て選択
      this.$store.state.order.checkedDisplay = val ? this.display : []
      this.$store.state.order.isDisplayIndeterminate = false
    },
    handleCheckedResponsive (value) {  // レスポンシブ選択
      let checkedCount = value.length
      this.$store.state.order.checkAllResponsive = checkedCount === this.responsive.length
      this.$store.state.order.isResponsiveIndeterminate = checkedCount > 0 && checkedCount < this.responsive.length
    },
    handleCheckedAllResponsive (val) { // レスポンシブ全て選択
      this.$store.state.order.checkedResponsive = val ? this.responsive : []
      this.$store.state.order.isResponsiveIndeterminate = false
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
