<template>
  <div>
    <section class="section section--style_1">
      <page-sidebar />
      <div class="dashboard-main">
        <div class="wrapper--main">
          <page-section-title title="入力内容確認" img="/img/order/order_img_title4.svg" />
          <div class="confirm-content">
            <table id="confirmTable">
              <caption>
                <p class="confirm__title">
                  {{ $store.state.editOrder.clientName }}様案件依頼書
                </p>
                <p class="confirm__note">下記内容にて制作を依頼します</p>
              </caption>
              <tbody>
                <tr class="confirm__box">
                  <th class="confirm__label">クライアント名</th>
                  <td class="confirm__item">{{ $store.state.editOrder.clientName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">担当者名</th>
                  <td class="confirm__item">{{ $store.state.editOrder.repName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">プロジェクト名</th>
                  <td class="confirm__item">{{ $store.state.editOrder.projectName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">納品方法</th>
                  <td class="confirm__item">{{ $store.state.editOrder.deliveryMethod }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">納品希望日</th>
                  <td class="confirm__item">{{ date }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">希望制作期間</th>
                  <td class="confirm__item">{{ $store.state.editOrder.hopeTime }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">希望制作期間詳細</th>
                  <td class="confirm__item">{{ $store.state.editOrder.hopeTimeDetail }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">サイト名</th>
                  <td class="confirm__item">{{ $store.state.editOrder.siteName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">ディスクリプション</th>
                  <td class="confirm__item">{{ $store.state.editOrder.siteDescription }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">OGP</th>
                  <td class="confirm__item">{{ $store.state.editOrder.ogpText }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">制作目的</th>
                  <td class="confirm__item" v-for="(purpose, p) in $store.state.editOrder.productionPurpose" :key="p">{{ purpose }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">依頼範囲</th>
                  <td class="confirm__item">
                    <p v-for="(range, r) in $store.state.editOrder.orderRange" :key="r">
                      {{ range }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">年齢層</th>
                  <td class="confirm__item">
                    {{ $store.state.editOrder.age[0] }}代〜{{ $store.state.editOrder.age[1] }}代
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">性別</th>
                  <td class="confirm__item">{{ $store.state.editOrder.gender }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">職業</th>
                  <td class="confirm__item">
                    <p v-for="(employ, e) in $store.state.editOrder.checkedEmployment" :key="e">
                      {{ employ }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">職種</th>
                  <td class="confirm__item">
                    <p v-for="(job, j) in $store.state.editOrder.checkedJobCategory" :key="j">
                      {{ job }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">地方圏</th>
                  <td class="confirm__item">
                    <p v-for="(local, l) in $store.state.editOrder.checkedLocal" :key="l">
                      {{ local }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">使用プラットフォーム</th>
                  <td class="confirm__item">{{ $store.state.editOrder.useEnvironment }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">表示プラットフォーム</th>
                  <td class="confirm__item">
                    <p v-for="(disply, d) in $store.state.editOrder.checkedDisplay" :key="d">
                      {{ disply }}
                    </p>
                    <p v-if="$store.state.editOrder.environmentVersion">
                      {{ $store.state.editOrder.environmentVersion }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">レスポンシブ</th>
                  <td class="confirm__item">
                    <p v-for="(res, r) in $store.state.editOrder.checkedResponsive" :key="r">
                      {{ res }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">参考サイト</th>
                  <td class="confirm__item">
                    {{ $store.state.editOrder.referenceSite1 }}<br />
                    {{ $store.state.editOrder.referenceSite2 }}<br />
                    {{ $store.state.editOrder.referenceSite3 }}
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">その他サイトイメージ</th>
                  <td class="confirm__item">{{ $store.state.editOrder.otherReferenceSite }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">必要機能</th>
                  <td class="confirm__item">{{ $store.state.editOrder.requiredFeature }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">画像用意方法</th>
                  <td class="confirm__item">{{ $store.state.editOrder.imagePreparation }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">画像回収サイトURL</th>
                  <td class="confirm__item">{{ $store.state.editOrder.collectionImgUrl }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">テキスト用意方法</th>
                  <td class="confirm__item">{{ $store.state.editOrder.textPreparation }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">テキスト回収サイトURL</th>
                  <td class="confirm__item">{{ $store.state.editOrder.collectionTextUrl }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">コピーライト</th>
                  <td class="confirm__item">{{ $store.state.editOrder.copyright }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">アナリティクス情報</th>
                  <td class="confirm__item">{{ $store.state.editOrder.analytics }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">サーバー名</th>
                  <td class="confirm__item">{{ $store.state.editOrder.serverName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">サーバーパスワード</th>
                  <td class="confirm__item">{{ $store.state.editOrder.serverPassword }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">サーバー管理画面ログインID</th>
                  <td class="confirm__item">{{ $store.state.editOrder.controlLoginId }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">サーバー管理画面ログインパスワード</th>
                  <td class="confirm__item">{{ $store.state.editOrder.controlLoginPassword }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">FTPサーバー名</th>
                  <td class="confirm__item">{{ $store.state.editOrder.ftpServerName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">FTPアカウント名</th>
                  <td class="confirm__item">{{ $store.state.editOrder.ftpAccountName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">WordPressログインID</th>
                  <td class="confirm__item">{{ $store.state.editOrder.wordpressLoginId }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">WordPressログインパスワード</th>
                  <td class="confirm__item">{{ $store.state.editOrder.wordpressLoginPassword }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">その他アクセス制限ID</th>
                  <td class="confirm__item">{{ $store.state.editOrder.otherLoginId }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">その他アクセス制限パスワード</th>
                  <td class="confirm__item">{{ $store.state.editOrder.otherLoginPassword }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">備考</th>
                  <td class="confirm__item">{{ $store.state.editOrder.memo }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <el-button class="origin_btn origin_btn--tertiary" @click="$router.push(`/order/edit/edit3/${key}`)">
            戻る
          </el-button>
          <el-button class="origin_btn origin_btn--primary" @click="saveOrderData">
            保存する
          </el-button>
          <a id="download" class="origin_btn origin_btn--primary" href="#" @click="downloadCSV">CSVダウンロード</a>
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
  name: 'confirm',
  components: { PageSidebar, PageSectionTitle },
  head() {
    return {
      title: '確認'
    }
  },
  data: () => {
    return {
      date: '',
      key: ''
    }
  },
  created () {
    setTimeout(() => {
      let date = this.$store.state.editOrder.deliveryDate
      const momentDate = this.$moment(date).format('YYYY/MM/DD')
      this.date = momentDate
    }, 5)
    console.log(this.$store.state.editOrder)
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
  methods: {
    downloadCSV() {
      let array_data = [
        ['クライアント名',this.$store.state.editOrder.clientName],
        ['担当者名',this.$store.state.editOrder.repName],
        ['プロジェクト名',this.$store.state.editOrder.projectName],
        ['納品方法',this.$store.state.editOrder.deliveryMethod],
        ['納品希望日',this.date],
        ['希望制作期間',this.$store.state.editOrder.hopeTime],
        ['希望制作期間詳細',this.$store.state.editOrder.hopeTimeDetail],
        ['サイト名',this.$store.state.editOrder.siteName],
        ['ディスクリプション',this.$store.state.editOrder.siteDescription],
        ['OGP',this.$store.state.editOrder.ogpText],
        ['制作目的', this.$store.state.editOrder.productionPurpose],
        ['依頼範囲',this.$store.state.editOrder.orderRange],
        ['年齢層',`${this.$store.state.editOrder.age[0]}代〜${this.$store.state.editOrder.age[1]}代`],
        ['性別',this.$store.state.editOrder.gender],
        ['職業', this.$store.state.editOrder.checkedEmployment],
        ['職種', this.$store.state.editOrder.checkedJobCategory],
        ['地方圏', this.$store.state.editOrder.checkedLocal],
        ['使用プラットフォーム',this.$store.state.editOrder.useEnvironment],
        ['表示プラットフォーム', this.$store.state.editOrder.checkedDisplay],
        ['プラットフォームバージョン', this.$store.state.editOrder.environmentVersion],
        ['レスポンシブ', this.$store.state.editOrder.checkedResponsive],
        ['参考サイト',this.$store.state.editOrder.referenceSite1, this.$store.state.editOrder.referenceSite2, this.$store.state.editOrder.referenceSite3],
        ['その他サイトイメージ',this.$store.state.editOrder.otherReferenceSite],
        ['必要機能',this.$store.state.editOrder.requiredFeature],
        ['画像用意方法',this.$store.state.editOrder.imagePreparation],
        ['画像回収サイトURL',this.$store.state.editOrder.collectionImgUrl],
        ['テキスト用意方法',this.$store.state.editOrder.textPreparation],
        ['テキスト回収サイトURL',this.$store.state.editOrder.collectionTextUrl],
        ['コピーライト',this.$store.state.editOrder.copyright],
        ['アナリティクス情報',this.$store.state.editOrder.analytics],
        ['サーバー名',this.$store.state.editOrder.serverName],
        ['サーバーパスワード',this.$store.state.editOrder.serverPassword],
        ['サーバー管理画面ログインID',this.$store.state.editOrder.controlLoginId],
        ['サーバー管理画面ログインパスワード',this.$store.state.editOrder.controlLoginPassword],
        ['FTPサーバー名',this.$store.state.editOrder.ftpServerName],
        ['FTPアカウント名',this.$store.state.editOrder.ftpAccountName],
        ['WordPressログインID',this.$store.state.editOrder.wordpressLoginId],
        ['WordPressログインパスワード',this.$store.state.editOrder.wordpressLoginPassword],
        ['その他アクセス制限ID',this.$store.state.editOrder.otherLoginId],
        ['その他アクセス制限パスワード',this.$store.state.editOrder.otherLoginPassword],
        ['備考',this.$store.state.editOrder.memo],
      ]
      
      // BOM の用意（文字化け対策）
      const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
      // CSV データの用意
      const csv_data = array_data.map(function(l){return l.join(',')}).join('\r\n');
      const blob = new Blob([bom, csv_data], { type: 'text/csv' });
      const url = (window.URL || window.webkitURL).createObjectURL(blob);
      const a = document.getElementById('download');
      a.download = `${this.$moment().format('YYYY_MM_DD')}__${this.$store.state.editOrder.clientName}.csv`;
      a.href = url;
    },
    saveOrderData () {
      const uid = firebase.auth().currentUser.uid;
      const updateData = {
        status: this.$store.state.editOrder.status,
        clientName: this.$store.state.editOrder.clientName,
        repName: this.$store.state.editOrder.repName,
        projectName: this.$store.state.editOrder.projectName,
        deliveryMethod: this.$store.state.editOrder.deliveryMethod,
        date: this.date,
        hopeTime: this.$store.state.editOrder.hopeTime,
        hopeTimeDetail: this.$store.state.editOrder.hopeTimeDetail,
        siteName: this.$store.state.editOrder.siteName,
        siteDescription: this.$store.state.editOrder.siteDescription,
        ogpText: this.$store.state.editOrder.ogpText,
        productionPurpose: this.$store.state.editOrder.productionPurpose,
        orderRange: this.$store.state.editOrder.orderRange,
        age: this.$store.state.editOrder.age,
        gender: this.$store.state.editOrder.gender,
        checkedEmployment: this.$store.state.editOrder.checkedEmployment,
        checkedJobCategory: this.$store.state.editOrder.checkedJobCategory,
        checkedLocal: this.$store.state.editOrder.checkedLocal,
        useEnvironment: this.$store.state.editOrder.useEnvironment,
        checkedDisplay: this.$store.state.editOrder.checkedDisplay,
        environmentVersion: this.$store.state.editOrder.environmentVersion,
        checkedResponsive: this.$store.state.editOrder.checkedResponsive,
        refarence: [
          this.$store.state.editOrder.referenceSite1,
          this.$store.state.editOrder.referenceSite2,
          this.$store.state.editOrder.referenceSite3
        ],
        otherReferenceSite: this.$store.state.editOrder.otherReferenceSite,
        requiredFeature: this.$store.state.editOrder.requiredFeature,
        imagePreparation: this.$store.state.editOrder.imagePreparation,
        collectionImgUrl: this.$store.state.editOrder.collectionImgUrl,
        textPreparation: this.$store.state.editOrder.textPreparation,
        collectionTextUrl: this.$store.state.editOrder.collectionTextUrl,
        copyright: this.$store.state.editOrder.copyright,
        analytics: this.$store.state.editOrder.analytics,
        serverName: this.$store.state.editOrder.serverName,
        serverPassword: this.$store.state.editOrder.serverPassword,
        controlLoginId: this.$store.state.editOrder.controlLoginId,
        controlLoginPassword: this.$store.state.editOrder.controlLoginPassword,
        ftpServerName: this.$store.state.editOrder.ftpServerName,
        ftpAccountName: this.$store.state.editOrder.ftpAccountName,
        wordpressLoginId: this.$store.state.editOrder.wordpressLoginId,
        wordpressLoginPassword: this.$store.state.editOrder.wordpressLoginPassword,
        otherLoginId: this.$store.state.editOrder.otherLoginId,
        otherLoginPassword: this.$store.state.editOrder.otherLoginPassword,
        memo: this.$store.state.editOrder.memo
      }
      firebase.firestore().collection(uid).doc(this.key).update(updateData)
        .then(() => {
          this.$store.commit('completeEditOrder')
          this.$router.push(`/dashboard/${firebase.auth().currentUser.uid}`)
        })
        .catch((error) => {
          console.log(error)
        })
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

.confirm-content {
  margin: 3rem 0;
}
.confirm__title {
  margin: 0;
  font-size: 2rem;
  color: $base-wh;
  line-height: 4rem;
  background-color: $base-bl;
}
.confirm__note {
  padding: 1.4rem 0 0;
  font-size: 1.4rem;
}

tr {
  &:nth-last-of-type(1) {
    th, td {
      border-bottom: none;
    }
  }
}

th,td {
  padding: .8rem;
  font-size: 1.4rem;
  color: $base-bl;
  text-align: left;
  border-bottom: 1px solid #ddd;
  vertical-align: top;

  p {
    margin: 0;
  }
}
th {
  font-weight: bold;
  width: 25rem;
}

a.origin_btn {
  display: inline-block;
  margin: 0 0 0 1rem;
  padding: 1.6rem 4.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: $base-wh;
  text-decoration: none;
  line-height: 1;
  vertical-align: middle;
}
</style>
