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
                  {{ $store.state.order.clientName }}様案件依頼書
                </p>
                <p class="confirm__note">下記内容にて制作を依頼します</p>
              </caption>
              <tbody>
                <tr class="confirm__box">
                  <th class="confirm__label">クライアント名</th>
                  <td class="confirm__item">{{ $store.state.order.clientName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">担当者名</th>
                  <td class="confirm__item">{{ $store.state.order.repName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">プロジェクト名</th>
                  <td class="confirm__item">{{ $store.state.order.projectName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">納品方法</th>
                  <td class="confirm__item">{{ $store.state.order.deliveryMethod }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">納品希望日</th>
                  <td class="confirm__item">{{ date }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">希望制作期間</th>
                  <td class="confirm__item">{{ $store.state.order.hopeTime }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">希望制作期間詳細</th>
                  <td class="confirm__item">{{ $store.state.order.hopeTimeDetail }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">サイト名</th>
                  <td class="confirm__item">{{ $store.state.order.siteName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">ディスクリプション</th>
                  <td class="confirm__item">{{ $store.state.order.siteDescription }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">OGP</th>
                  <td class="confirm__item">{{ $store.state.order.ogpText }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">制作目的</th>
                  <td class="confirm__item" v-for="(purpose, p) in $store.state.order.productionPurpose" :key="p">{{ purpose }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">依頼範囲</th>
                  <td class="confirm__item">
                    <p v-for="(range, r) in $store.state.order.orderRange" :key="r">
                      {{ range }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">年齢層</th>
                  <td class="confirm__item">
                    {{ $store.state.order.age[0] }}代〜{{ $store.state.order.age[1] }}代
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">性別</th>
                  <td class="confirm__item">{{ $store.state.order.gender }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">職業</th>
                  <td class="confirm__item">
                    <p v-for="(employ, e) in employList" :key="e">
                      {{ employ }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">職種</th>
                  <td class="confirm__item">
                    <p v-for="(job, j) in jobCategory" :key="j">
                      {{ job }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">地方圏</th>
                  <td class="confirm__item">
                    <p v-for="(local, l) in localList" :key="l">
                      {{ local }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">使用プラットフォーム</th>
                  <td class="confirm__item">{{ $store.state.order.useEnvironment }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">表示プラットフォーム</th>
                  <td class="confirm__item">
                    <p v-for="(disply, d) in displayList" :key="d">
                      {{ disply.val }}{{ disply.version }}
                    </p>
                    {{ $store.state.order.enviromentVersion }}
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">レスポンシブ</th>
                  <td class="confirm__item">
                    <p v-for="(res, r) in responsiveList" :key="r">
                      {{ res }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">参考サイト</th>
                  <td class="confirm__item">
                    {{ $store.state.order.referenceSite1 }}<br />
                    {{ $store.state.order.referenceSite2 }}<br />
                    {{ $store.state.order.referenceSite3 }}
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">その他サイトイメージ</th>
                  <td class="confirm__item">{{ $store.state.order.otherReferenceSite }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">必要機能</th>
                  <td class="confirm__item">{{ $store.state.order.requiredFeature }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">画像用意方法</th>
                  <td class="confirm__item">{{ $store.state.order.imagePreparation }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">画像回収サイトURL</th>
                  <td class="confirm__item">{{ $store.state.order.collectionImgUrl }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">テキスト用意方法</th>
                  <td class="confirm__item">{{ $store.state.order.textPreparation }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">テキスト回収サイトURL</th>
                  <td class="confirm__item">{{ $store.state.order.collectionTextUrl }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">コピーライト</th>
                  <td class="confirm__item">{{ $store.state.order.copyright }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">アナリティクス情報</th>
                  <td class="confirm__item">{{ $store.state.order.analytics }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">サーバー名</th>
                  <td class="confirm__item">{{ $store.state.order.serverName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">サーバーパスワード</th>
                  <td class="confirm__item">{{ $store.state.order.serverPassword }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">サーバー管理画面ログインID</th>
                  <td class="confirm__item">{{ $store.state.order.controlLoginId }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">サーバー管理画面ログインパスワード</th>
                  <td class="confirm__item">{{ $store.state.order.controlLoginPassword }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">FTPサーバー名</th>
                  <td class="confirm__item">{{ $store.state.order.ftpServerName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">FTPアカウント名</th>
                  <td class="confirm__item">{{ $store.state.order.ftpAccountName }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">WordPressログインID</th>
                  <td class="confirm__item">{{ $store.state.order.wordpressLoginId }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">WordPressログインパスワード</th>
                  <td class="confirm__item">{{ $store.state.order.wordpressLoginPassword }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">その他アクセス制限ID</th>
                  <td class="confirm__item">{{ $store.state.order.otherLoginId }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">その他アクセス制限パスワード</th>
                  <td class="confirm__item">{{ $store.state.order.otherLoginPassword }}</td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">備考</th>
                  <td class="confirm__item">{{ $store.state.order.memo }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <el-button class="origin_btn origin_btn--tertiary" @click="$router.push(`/order/template/sheet2`)">
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
      employList: [],
      jobCategory: [],
      localList: [],
      displayList: [],
      responsiveList: [],
    }
  },
  created () {
    setTimeout(() => {
      console.log(this.$store.state.order)
      let date = this.$store.state.order.deliveryDate
      const momentDate = this.$moment(date).format('YYYY/MM/DD')
      this.date = momentDate
      // チェック済み職業
      const emp = this.$store.state.order.checkedEmployment
      for (let i = 0; i < emp.length; i++) {
        this.employList.push(emp[i].val)
      }
      // チェック済み職種
      const category = this.$store.state.order.checkedJobCategory
      for (let i = 0; i < category.length; i++) {
        this.jobCategory.push(category[i].val)
      }
      // チェック済み地方圏
      const lcl = this.$store.state.order.checkedLocal
      for (let i = 0; i < lcl.length; i++) {
        this.localList.push(lcl[i].area)
      }
      // チェック済み表示プラットフォーム
      const dsp = this.$store.state.order.checkedDisplay
      for (let i = 0; i < dsp.length; i++) {
        this.displayList.push(dsp[i])
      }
      // チェック済みレスポンシブ
      const rsp = this.$store.state.order.checkedResponsive
      for (let i = 0; i < rsp.length; i++) {
        this.responsiveList.push(rsp[i].val)
      }
    }, 5)
  },
  methods: {
    downloadCSV() {
      const lists = this.displayList
      let disply = []
      for (let i = 0; i < lists.length; i++) {
        disply.push(lists[i].val)
      }
      let version = []
      for (let i = 0; i < lists.length; i++) {
        version.push(lists[i].version)
      }
      console.log(disply, version)

      let array_data = [
        ['クライアント名',this.$store.state.order.clientName],
        ['担当者名',this.$store.state.order.repName],
        ['プロジェクト名',this.$store.state.order.projectName],
        ['納品方法',this.$store.state.order.deliveryMethod],
        ['納品希望日',this.date],
        ['希望制作期間',this.$store.state.order.hopeTime],
        ['希望制作期間詳細',this.$store.state.order.hopeTimeDetail],
        ['サイト名',this.$store.state.order.siteName],
        ['ディスクリプション',this.$store.state.order.siteDescription],
        ['OGP',this.$store.state.order.ogpText],
        ['制作目的', this.$store.state.order.productionPurpose],
        ['依頼範囲',this.$store.state.order.orderRange],
        ['年齢層',`${this.$store.state.order.age[0]}代〜${this.$store.state.order.age[1]}代`],
        ['性別',this.$store.state.order.gender],
        ['職業', this.employList],
        ['職種', this.jobCategory],
        ['地方圏', this.localList],
        ['使用プラットフォーム',this.$store.state.order.useEnvironment],
        ['表示プラットフォーム', disply],
        ['プラットフォームバージョン', version],
        ['レスポンシブ', this.responsiveList],
        ['参考サイト',this.$store.state.order.referenceSite1, this.$store.state.order.referenceSite2, this.$store.state.order.referenceSite3],
        ['その他サイトイメージ',this.$store.state.order.otherReferenceSite],
        ['必要機能',this.$store.state.order.requiredFeature],
        ['画像用意方法',this.$store.state.order.imagePreparation],
        ['画像回収サイトURL',this.$store.state.order.collectionImgUrl],
        ['テキスト用意方法',this.$store.state.order.textPreparation],
        ['テキスト回収サイトURL',this.$store.state.order.collectionTextUrl],
        ['コピーライト',this.$store.state.order.copyright],
        ['アナリティクス情報',this.$store.state.order.analytics],
        ['サーバー名',this.$store.state.order.serverName],
        ['サーバーパスワード',this.$store.state.order.serverPassword],
        ['サーバー管理画面ログインID',this.$store.state.order.controlLoginId],
        ['サーバー管理画面ログインパスワード',this.$store.state.order.controlLoginPassword],
        ['FTPサーバー名',this.$store.state.order.ftpServerName],
        ['FTPアカウント名',this.$store.state.order.ftpAccountName],
        ['WordPressログインID',this.$store.state.order.wordpressLoginId],
        ['WordPressログインパスワード',this.$store.state.order.wordpressLoginPassword],
        ['その他アクセス制限ID',this.$store.state.order.otherLoginId],
        ['その他アクセス制限パスワード',this.$store.state.order.otherLoginPassword],
        ['備考',this.$store.state.order.memo],
      ]
      
      // let array_data = [['りんご',1,200],['メロン',2,4000],['バナナ',4,500]];
      // BOM の用意（文字化け対策）
      const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
      // CSV データの用意
      const csv_data = array_data.map(function(l){return l.join(',')}).join('\r\n');
      const blob = new Blob([bom, csv_data], { type: 'text/csv' });
      const url = (window.URL || window.webkitURL).createObjectURL(blob);
      const a = document.getElementById('download');
      a.download = `${this.$moment().format('YYYY_MM_DD')}__${this.$store.state.order.clientName}.csv`;
      a.href = url;
    },
    saveOrderData () {
      const uid = firebase.auth().currentUser.uid;
      firebase.firestore().collection(uid).add({
        status: this.$store.state.order.status,
        client: this.$store.state.order.clientName,
        rep: this.$store.state.order.repName,
        project: this.$store.state.order.projectName,
        delivery: this.$store.state.order.deliveryMethod,
        date: this.date,
        hopeTime: this.$store.state.order.hopeTime,
        hopeTimeDetail: this.$store.state.order.hopeTimeDetail,
        site: this.$store.state.order.siteName,
        desc: this.$store.state.order.siteDescription,
        ogp: this.$store.state.order.ogpText,
        purpose: this.$store.state.order.productionPurpose,
        range: this.$store.state.order.orderRange,
        age: this.$store.state.order.age,
        gender: this.$store.state.order.gender,
        employ: this.employList,
        job: this.jobCategory,
        local: this.localList,
        env: this.$store.state.order.useEnvironment,
        display: this.displayList,
        responsive: this.responsiveList,
        refarence: [
          this.$store.state.order.referenceSite1,
          this.$store.state.order.referenceSite2,
          this.$store.state.order.referenceSite3
        ],
        otherSite: this.$store.state.order.otherReferenceSite,
        feature: this.$store.state.order.requiredFeature,
        image: this.$store.state.order.imagePreparation,
        imgCollection: this.$store.state.order.collectionImgUrl,
        text: this.$store.state.order.textPreparation,
        textCollection: this.$store.state.order.collectionTextUrl,
        copyright: this.$store.state.order.copyright,
        analytics: this.$store.state.order.analytics,
        serverName: this.$store.state.order.serverName,
        serverPassword: this.$store.state.order.serverPassword,
        controlId: this.$store.state.order.controlLoginId,
        controlPassword: this.$store.state.order.controlLoginPassword,
        ftpName: this.$store.state.order.ftpServerName,
        ftpAccountName: this.$store.state.order.ftpAccountName,
        wordpressid: this.$store.state.order.wordpressLoginId,
        wordpressPassword: this.$store.state.order.wordpressLoginPassword,
        otherid: this.$store.state.order.otherLoginId,
        otherPassword: this.$store.state.order.otherLoginPassword,
        memo: this.$store.state.order.memo
      })
        .then(() => {
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
