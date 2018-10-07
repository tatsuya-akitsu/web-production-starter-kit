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
                    <p v-for="(employ, e) in $store.state.order.checkedEmployment" :key="e">
                      {{ employ }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">職種</th>
                  <td class="confirm__item">
                    <p v-for="(job, j) in $store.state.order.checkedJobCategory" :key="j">
                      {{ job }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">地方圏</th>
                  <td class="confirm__item">
                    <p v-for="(local, l) in $store.state.order.checkedLocal" :key="l">
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
                    <p v-for="(disply, d) in $store.state.order.checkedDisplay" :key="d">
                      {{ disply }}
                    </p>
                    <p v-if="$store.state.order.environmentVersion">
                      {{ $store.state.order.environmentVersion }}
                    </p>
                  </td>
                </tr>
                <tr class="confirm__box">
                  <th class="confirm__label">レスポンシブ</th>
                  <td class="confirm__item">
                    <p v-for="(res, r) in $store.state.order.checkedResponsive" :key="r">
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
          <el-button class="origin_btn origin_btn--tertiary" @click="$router.push(`/order/template/sheet3`)">
            戻る
          </el-button>
          <el-button class="origin_btn origin_btn--primary" @click="saveOrderData">
            保存する
          </el-button>
          <a id="download" class="origin_btn origin_btn--primary" href="#" @click="downloadCSV">CSVダウンロード</a>
          <div class="order-wrap">
            <div class="order_user-box" :class="{select: $store.state.selectOrderUser === item.email}" v-for="(item, i) in followData" :key="i" @click="selectUid(item.email)">
              <div class="thumbnail">
                <img :src="item.photoUrl" alt="" />
              </div>
              <div class="body">
                {{ item.uid }}
                <p class="name">{{ item.name }}</p>
                <p class="email">{{ item.email }}</p>
              </div>
            </div>
            <el-button class="origin_btn origin_btn--primary" @click="setOrderData">
              依頼する
            </el-button>
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
      followData: [],
      selectUEmail: ''
    }
  },
  created () {
    setTimeout(() => {
      let date = this.$store.state.order.deliveryDate
      const momentDate = this.$moment(date).format('YYYY/MM/DD')
      this.date = momentDate
      
      const email = firebase.auth().currentUser.email
      firebase.firestore().collection('users').doc(email).collection('follow').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.followData.push(doc.data())
          })
        })
        .catch((error) => {
          console.log(error)
        })
      console.log(this.followData)
    }, 5)
  },
  methods: {
    downloadCSV() {
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
        ['職業', this.$store.state.order.checkedEmployment],
        ['職種', this.$store.state.order.checkedJobCategory],
        ['地方圏', this.$store.state.order.checkedLocal],
        ['使用プラットフォーム',this.$store.state.order.useEnvironment],
        ['表示プラットフォーム', this.$store.state.order.checkedDisplay],
        ['プラットフォームバージョン', this.$store.state.order.environmentVersion],
        ['レスポンシブ', this.$store.state.order.checkedResponsive],
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
      const email = firebase.auth().currentUser.email;
      const saveData = {
        orderBy: email,
        status: this.$store.state.order.status,
        clientName: this.$store.state.order.clientName,
        repName: this.$store.state.order.repName,
        projectName: this.$store.state.order.projectName,
        deliveryMethod: this.$store.state.order.deliveryMethod,
        date: this.date,
        hopeTime: this.$store.state.order.hopeTime,
        hopeTimeDetail: this.$store.state.order.hopeTimeDetail,
        siteName: this.$store.state.order.siteName,
        siteDescription: this.$store.state.order.siteDescription,
        ogpText: this.$store.state.order.ogpText,
        productionPurpose: this.$store.state.order.productionPurpose,
        orderRange: this.$store.state.order.orderRange,
        age: this.$store.state.order.age,
        gender: this.$store.state.order.gender,
        checkedEmployment: this.$store.state.order.checkedEmployment,
        checkedJobCategory: this.$store.state.order.checkedJobCategory,
        checkedLocal: this.$store.state.order.checkedLocal,
        useEnvironment: this.$store.state.order.useEnvironment,
        checkedDisplay: this.$store.state.order.checkedDisplay,
        environmentVersion: this.$store.state.order.environmentVersion,
        checkedResponsive: this.$store.state.order.checkedResponsive,
        refarence: [
          this.$store.state.order.referenceSite1,
          this.$store.state.order.referenceSite2,
          this.$store.state.order.referenceSite3
        ],
        otherReferenceSite: this.$store.state.order.otherReferenceSite,
        requiredFeature: this.$store.state.order.requiredFeature,
        imagePreparation: this.$store.state.order.imagePreparation,
        collectionImgUrl: this.$store.state.order.collectionImgUrl,
        textPreparation: this.$store.state.order.textPreparation,
        collectionTextUrl: this.$store.state.order.collectionTextUrl,
        copyright: this.$store.state.order.copyright,
        analytics: this.$store.state.order.analytics,
        serverName: this.$store.state.order.serverName,
        serverPassword: this.$store.state.order.serverPassword,
        controlLoginId: this.$store.state.order.controlLoginId,
        controlLoginPassword: this.$store.state.order.controlLoginPassword,
        ftpServerName: this.$store.state.order.ftpServerName,
        ftpAccountName: this.$store.state.order.ftpAccountName,
        wordpressLoginId: this.$store.state.order.wordpressLoginId,
        wordpressLoginPassword: this.$store.state.order.wordpressLoginPassword,
        otherLoginId: this.$store.state.order.otherLoginId,
        otherLoginPassword: this.$store.state.order.otherLoginPassword,
        memo: this.$store.state.order.memo
      }
      // 自身のDBへ追加
      firebase.firestore().collection('users').doc(email).collection('orders').add(saveData)
        .then(() => {
          this.$store.commit('completeOrder')
          this.$router.push(`/dashboard/${firebase.auth().currentUser.uid}`)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    selectUid (value) {
      this.selectUEmail = value
      this.$store.commit('selectUser', value)
    },
    setOrderData () {
      const email = firebase.auth().currentUser.email;
      const setData = {
        orderBy: email,
        creator: this.selectUEmail,
        status: this.$store.state.order.status,
        clientName: this.$store.state.order.clientName,
        repName: this.$store.state.order.repName,
        projectName: this.$store.state.order.projectName,
        deliveryMethod: this.$store.state.order.deliveryMethod,
        date: this.date,
        hopeTime: this.$store.state.order.hopeTime,
        hopeTimeDetail: this.$store.state.order.hopeTimeDetail,
        siteName: this.$store.state.order.siteName,
        siteDescription: this.$store.state.order.siteDescription,
        ogpText: this.$store.state.order.ogpText,
        productionPurpose: this.$store.state.order.productionPurpose,
        orderRange: this.$store.state.order.orderRange,
        age: this.$store.state.order.age,
        gender: this.$store.state.order.gender,
        checkedEmployment: this.$store.state.order.checkedEmployment,
        checkedJobCategory: this.$store.state.order.checkedJobCategory,
        checkedLocal: this.$store.state.order.checkedLocal,
        useEnvironment: this.$store.state.order.useEnvironment,
        checkedDisplay: this.$store.state.order.checkedDisplay,
        environmentVersion: this.$store.state.order.environmentVersion,
        checkedResponsive: this.$store.state.order.checkedResponsive,
        refarence: [
          this.$store.state.order.referenceSite1,
          this.$store.state.order.referenceSite2,
          this.$store.state.order.referenceSite3
        ],
        otherReferenceSite: this.$store.state.order.otherReferenceSite,
        requiredFeature: this.$store.state.order.requiredFeature,
        imagePreparation: this.$store.state.order.imagePreparation,
        collectionImgUrl: this.$store.state.order.collectionImgUrl,
        textPreparation: this.$store.state.order.textPreparation,
        collectionTextUrl: this.$store.state.order.collectionTextUrl,
        copyright: this.$store.state.order.copyright,
        analytics: this.$store.state.order.analytics,
        serverName: this.$store.state.order.serverName,
        serverPassword: this.$store.state.order.serverPassword,
        controlLoginId: this.$store.state.order.controlLoginId,
        controlLoginPassword: this.$store.state.order.controlLoginPassword,
        ftpServerName: this.$store.state.order.ftpServerName,
        ftpAccountName: this.$store.state.order.ftpAccountName,
        wordpressLoginId: this.$store.state.order.wordpressLoginId,
        wordpressLoginPassword: this.$store.state.order.wordpressLoginPassword,
        otherLoginId: this.$store.state.order.otherLoginId,
        otherLoginPassword: this.$store.state.order.otherLoginPassword,
        memo: this.$store.state.order.memo
      }

      // 自身のDBへ追加
      firebase.firestore().collection('users').doc(email).collection('orders').add(setData)
        .then(() => {
          this.$store.commit('completeOrder')
          this.$router.push(`/dashboard/${firebase.auth().currentUser.uid}`)
        })
        .catch((error) => {
          console.log(error)
        })
      // 依頼者のDBへ追加
      firebase.firestore().collection('users').doc(this.selectUEmail).collection('orders').add(setData)
        .then(() => {
          this.$store.commit('completeOrder')
          this.$router.push(`/dashboard/${firebase.auth().currentUser.uid}`)
        })
        .catch((error) => {
          console.log(error)
        }) 
    },
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

.order-wrap {
  margin: 3rem 0 0;
}
.order_user-box {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0 0;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: $init-anim;

  .thumbnail {
    width: 10rem;
  }

  .body {
    padding-left: 4rem;
    width: calc(100% - 10rem);
    text-align: left;
  }

  .name {
    margin: 0;
    font-size: 1.8rem;
  }

  .email {
    margin: 0;
    padding-top: 2rem;
    font-size: 1.6rem;
  }

  &:nth-last-of-type(1) {
    margin: 2.5rem 0 3rem;
  }

  &.select {
    transition: $init-anim;
    border: 1px solid $color-main;
    background-color: rgba(14, 206, 200, 0.2);
  }
}
</style>
