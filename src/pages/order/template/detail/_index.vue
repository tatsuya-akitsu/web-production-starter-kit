<template>
  <div>
    <section class="section section--detail">
      <div class="detail-thumbnail">
        <img :src="thumbItem" alt="" />
      </div>
      <div class="wrapper--detail">
        <div class="inner--detail" v-for="(item, i) in data" :key="i">
          <div class="detail__link-wrap">
            <a class="detail__link" @click="backDashboard">一覧に戻る</a>
            <div class="detail__link-box">
              <a class="detail__link" @click="`/order/edit/edit1/${key}`">編集する</a>
              <a href="#" id="download" class="detail__link" @click="downloadCSV">CSVダウンロード</a>
            </div>
          </div>
          <h2 class="detail-title">
            <span class="origin-badge origin-badge__create" v-if="item.status === 'create'">
              {{ item.status }}
            </span>
            <span class="origin-badge origin-badge__doing" v-else-if="item.status === 'doing'">
              {{ item.status }}
            </span>
            <span class="origin-badge origin-badge__done" v-if="item.status === 'done'">
              {{ item.status }}
            </span>
            <span class="origin-badge origin-badge__warning" v-if="item.status === 'warning'">
              {{ item.status }}
            </span>
            {{ item.client }}様案件依頼書
          </h2>
          <div class="detail-content">
            <h3>基本情報</h3>
            <div class="detail-box">
              <p class="detail-label">クライアント名</p>
              <p class="detail-item">{{ item.clientName }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">担当者名</p>
              <p class="detail-item">{{ item.repName }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">プロジェクト名</p>
              <p class="detail-item">{{ item.projectName }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">納品方法</p>
              <p class="detail-item">{{ item.deliveryMethod }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">納品希望日</p>
              <p class="detail-item">{{ item.date }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">希望制作期間</p>
              <p class="detail-item">{{ item.hopeTime }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">希望制作期間詳細</p>
              <p class="detail-item">{{ item.hopeTimeDetail }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">サイト名</p>
              <p class="detail-item">{{ item.siteName }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">ディスクリプション</p>
              <p class="detail-item">{{ item.siteDescription }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">OGP</p>
              <p class="detail-item">{{ item.ogpText }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">制作目的</p>
              <p class="detail-item" v-for="(val, p) in item.productionPurpose" :key="p">{{ val }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">依頼範囲</p>
              <p class="detail-item" v-for="(range, r) in item.orderRange" :key="r">{{ range }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">年齢層</p>
              <p class="detail-item">
                {{ item.age[0] }}代〜{{ item.age[1] }}代
              </p>
            </div>
            <div class="detail-box">
              <p class="detail-label">性別</p>
              <p class="detail-item">{{ item.gender }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">職業</p>
              <p class="detail-item" v-for="(emp, e) in item.checkedEmployment" :key="e">{{ emp }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">職種</p>
              <p class="detail-item" v-for="(job, j) in item.checkedJobCategory" :key="j">{{ job }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">地方圏</p>
              <p class="detail-item" v-for="(lcl, l) in item.checkedLocal" :key="l">{{ lcl }}</p>
            </div>
          </div>
          <div class="detail-content">
            <h3>仕様情報</h3>
            <div class="detail-box">
              <p class="detail-label">使用プラットフォーム</p>
              <p class="detail-item">{{ item.useEnvironment }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">表示プラットフォーム</p>
              <p class="detail-item" v-for="(dsp, d) in item.checkedDisplay" :key="d">
                {{ dsp }}
              </p>
              <p class="detail-item" v-if="item.environmentVersion">
                {{ item.environmentVersion }}
              </p>
            </div>
            <div class="detail-box">
              <p class="detail-label">レスポンシブ</p>
              <p class="detail-item" v-for="(res, r) in item.checkedResponsive" :key="r">{{ res }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">参考サイト</p>
              <p class="detail-item" v-for="(ref, f) in item.refarence" :key="f">
                https://{{ ref }}
              </p>
            </div>
            <div class="detail-box">
              <p class="detail-label">その他サイトイメージ</p>
              <p class="detail-item">{{ item.otherReferenceSite }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">必要機能</p>
              <p class="detail-item">{{ item.requiredFeature }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">画像用意方法</p>
              <p class="detail-item">
                {{ item.imagePreparation }}<br />
                https://{{ item.collectionImgUrl }}
              </p>
            </div>
            <div class="detail-box">
              <p class="detail-label">テキスト用意方法</p>
              <p class="detail-item">
                {{ item.textPreparation }}<br />
                https://{{ item.collectionTextUrl }}
              </p>
            </div>
            <div class="detail-box">
              <p class="detail-label">コピーライト</p>
              <p class="detail-item">{{ item.copyright }}</p>
            </div>
          </div>
          <div class="detail-content">
            <h3>設定情報</h3>
            <div class="detail-box">
              <p class="detail-label">アナリティクス情報</p>
              <p class="detail-item">
                {{ item.analytics }}
              </p>
            </div>
            <div class="detail-box">
              <p class="detail-label">サーバー名</p>
              <p class="detail-item">{{ item.serverName }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">サーバーパスワード</p>
              <p class="detail-item">{{ item.serverPassword }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">サーバー管理画面ログインID</p>
              <p class="detail-item">{{ item.controlLoginId }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">サーバー管理画面ログインパスワード</p>
              <p class="detail-item">{{ item.controlLoginPassword }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">FTPサーバー名</p>
              <p class="detail-item">{{ item.ftpServerName }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">FTPアカウント名</p>
              <p class="detail-item">{{ item.ftpAccountName }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">WordPressログインID</p>
              <p class="detail-item">{{ item.wordpressLoginId }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">WordPressログインパスワード</p>
              <p class="detail-item">{{ item.wordpressLoginPassword }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">その他アクセス制限ID</p>
              <p class="detail-item">{{ item.otherLoginId }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">その他アクセス制限パスワード</p>
              <p class="detail-item">{{ item.otherLoginPassword }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">備考</p>
              <p class="detail-item">{{ item.memo }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase.js'

export default {
  name: 'detail',
  head() {
    return {
      title: `${this.title}詳細`
    }
  },
  data: () => {
    return {
      title: '',
      data: [],
      key: '',
      thumbnailes: [
        '/img/order/order_img_background_1.jpg',
        '/img/order/order_img_background_2.jpg',
        '/img/order/order_img_background_3.jpg',
        '/img/order/order_img_background_4.jpg',
        '/img/order/order_img_background_5.jpg',
        '/img/order/order_img_background_6.jpg',
        '/img/order/order_img_background_7.jpg',
        '/img/order/order_img_background_8.jpg',
        '/img/order/order_img_background_9.jpg',
        '/img/order/order_img_background_10.jpg',
      ],
      thumbItem: ''
    }
  },
  created () {
    const uid = firebase.auth().currentUser.uid
    const orderId = this.$route.params.index
    firebase.firestore().collection(uid).doc(orderId).get()
      .then((doc) => {
        this.key = doc.id
        this.data.push(doc.data())
      })
    setTimeout(() => {
      const thumb = this.thumbnailes
      return this.thumbItem = thumb[Math.floor(Math.random() * thumb.length)]
    }, 5)
  },
  mounted () {
    setTimeout(() => {
      const data = this.data
      data.forEach((res) => {
        this.title = res.project
      })
    }, 500)
  },
  methods: {
    backDashboard () {
      this.$router.push(`/dashboard/${firebase.auth().currentUser.uid}`)
    },
    downloadCSV() {
      const data = this.data
      let item = {}
      data.forEach((res) => {
        item = res
      })
      let array_data = [
        ['クライアント名',item.clientName],
        ['担当者名',item.repName],
        ['プロジェクト名',item.projectName],
        ['納品方法',item.deliveryMethod],
        ['納品希望日',item.date],
        ['希望制作期間',item.hopeTime],
        ['希望制作期間詳細',item.hopeTimeDetail],
        ['サイト名',item.siteName],
        ['ディスクリプション',item.siteDescription],
        ['OGP',item.ogpText],
        ['制作目的', item.productionPurpose],
        ['依頼範囲',item.orderRange],
        ['年齢層',`${item.age[0]}代〜${item.age[1]}代`],
        ['性別',item.gender],
        ['職業', item.checkedEmployment],
        ['職種', item.checkedJobCategory],
        ['地方圏', item.checkedLocal],
        ['使用プラットフォーム',item.useEnvironment],
        ['表示プラットフォーム', item.checkedDisplay],
        ['プラットフォームバージョン', item.environmentVersion],
        ['レスポンシブ', item.checkedResponsive],
        ['参考サイト',item.referenceSite1, item.referenceSite2, item.referenceSite3],
        ['その他サイトイメージ',item.otherReferenceSite],
        ['必要機能',item.requiredFeature],
        ['画像用意方法',item.imagePreparation],
        ['画像回収サイトURL',item.collectionImgUrl],
        ['テキスト用意方法',item.textPreparation],
        ['テキスト回収サイトURL',item.collectionTextUrl],
        ['コピーライト',item.copyright],
        ['アナリティクス情報',item.analytics],
        ['サーバー名',item.serverName],
        ['サーバーパスワード',item.serverPassword],
        ['サーバー管理画面ログインID',item.controlLoginId],
        ['サーバー管理画面ログインパスワード',item.controlLoginPassword],
        ['FTPサーバー名',item.ftpServerName],
        ['FTPアカウント名',item.ftpAccountName],
        ['WordPressログインID',item.wordpressLoginId],
        ['WordPressログインパスワード',item.wordpressLoginPassword],
        ['その他アクセス制限ID',item.otherLoginId],
        ['その他アクセス制限パスワード',item.otherLoginPassword],
        ['備考',item.memo],
      ]
      
      // BOM の用意（文字化け対策）
      const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
      // CSV データの用意
      const csv_data = array_data.map(function(l){return l.join(',')}).join('\r\n');
      const blob = new Blob([bom, csv_data], { type: 'text/csv' });
      const url = (window.URL || window.webkitURL).createObjectURL(blob);
      const a = document.getElementById('download');
      a.download = `${this.$moment().format('YYYY_MM_DD')}__${item.clientName}.csv`;
      a.href = url;
    },
  }
}
</script>

<style lang="scss" scoped>
.detail-thumbnail {
  position: relative;
  height: 40vw;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
  }
}

.wrapper--detail {
  position: relative;
  margin: 0 auto;
  margin-top: -20rem;
  padding: 6rem;
  width: 100%;
  max-width: 920px;
  background-color: $base-wh;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
  z-index: 2;
}
.detail-title {
  margin: 0;
  font-size: 3.4rem;

  span {
    margin: 0 1rem 0 0;
  }
}

.detail__link-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail__link-box {
  width: auto;
  a {
    margin: 0;
    padding: 0 1rem 0 0;
    border-right: 1px solid #ddd;

    &:nth-last-of-type(1) {
      padding: 0 0 0 1rem;
      border-right: none;
    }
  }
}

.detail__link {
  cursor: pointer;
  display: inline-block;
  font-size: 1.4rem;
  color: $color-main;
  text-decoration: underline;
  transition: $init-anim;

  &:hover {
    transition: $init-anim;
    text-decoration: none;
  }
}

.detail-content {
  margin: 6rem 0 0;

  h3 {
    margin: 0;
    font-size: 2rem;
    
    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      margin: 0 1rem 0 0;
      width: 1.8rem;
      height: 1.8rem;
      background-image: url('/img/order/order_img_label.svg');
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
    }
  }
}
.detail-box {
  margin: 3rem 0 0;

  p {
    margin: 0;
  }
}
.detail-label {
  padding: 0 0 .7rem;
  font-size: 1.6rem;
  border-bottom: 1px solid #ddd;
}
.detail-item {
  padding: 1.2rem 0 0;
  font-size: 1.4rem;
}
</style>
