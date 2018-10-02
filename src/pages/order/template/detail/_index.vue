<template>
  <div>
    <section class="section section--detail">
      <div class="detail-thumbnail">
        <img src="/img/order/order_img_background.jpg" alt="" />
      </div>
      <div class="wrapper--detail">
        <div class="inner--detail" v-for="(item, i) in data" :key="i">
          <a class="detail__link" @click="backDashboard">一覧に戻る</a>
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
              <p class="detail-item">{{ item.client }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">担当者名</p>
              <p class="detail-item">{{ item.rep }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">プロジェクト名</p>
              <p class="detail-item">{{ item.project }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">納品方法</p>
              <p class="detail-item">{{ item.delivery }}</p>
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
              <p class="detail-item">{{ item.site }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">ディスクリプション</p>
              <p class="detail-item">{{ item.desc }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">OGP</p>
              <p class="detail-item">{{ item.ogp }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">制作目的</p>
              <p class="detail-item" v-for="(val, p) in item.purpose" :key="p">{{ val }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">依頼範囲</p>
              <p class="detail-item" v-for="(range, r) in item.range" :key="r">{{ range }}</p>
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
              <p class="detail-item" v-for="(emp, e) in item.employ" :key="e">{{ emp }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">職種</p>
              <p class="detail-item" v-for="(job, j) in item.job" :key="j">{{ job }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">地方圏</p>
              <p class="detail-item" v-for="(lcl, l) in local" :key="l">{{ lcl }}</p>
            </div>
          </div>
          <div class="detail-content">
            <h3>仕様情報</h3>
            <div class="detail-box">
              <p class="detail-label">使用プラットフォーム</p>
              <p class="detail-item">{{ item.env }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">表示プラットフォーム</p>
              <p class="detail-item" v-for="(dsp, d) in item.display" :key="d">
                {{ dsp.val }}{{ dsp.version }}
              </p>
            </div>
            <div class="detail-box">
              <p class="detail-label">レスポンシブ</p>
              <p class="detail-item" v-for="(res, r) in item.responsive" :key="r">{{ res }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">参考サイト</p>
              <p class="detail-item" v-for="(ref, f) in item.refarence" :key="f">
                https://{{ ref }}
              </p>
            </div>
            <div class="detail-box">
              <p class="detail-label">その他サイトイメージ</p>
              <p class="detail-item">{{ item.otherSite }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">必要機能</p>
              <p class="detail-item">{{ item.feature }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">画像用意方法</p>
              <p class="detail-item">
                {{ item.image }}<br />
                http://{{ item.imgCollection }}
              </p>
            </div>
            <div class="detail-box">
              <p class="detail-label">テキスト用意方法</p>
              <p class="detail-item">
                {{ item.text }}<br />
                http://{{ item.textCollection }}
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
              <p class="detail-item">{{ item.controlId }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">サーバー管理画面ログインパスワード</p>
              <p class="detail-item">{{ item.controlPassword }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">FTPサーバー名</p>
              <p class="detail-item">{{ item.ftpName }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">FTPアカウント名</p>
              <p class="detail-item">{{ item.ftpAccountName }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">WordPressログインID</p>
              <p class="detail-item">{{ item.wordpressid }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">WordPressログインパスワード</p>
              <p class="detail-item">{{ item.wordpressPassword }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">その他アクセス制限ID</p>
              <p class="detail-item">{{ item.otherid }}</p>
            </div>
            <div class="detail-box">
              <p class="detail-label">その他アクセス制限パスワード</p>
              <p class="detail-item">{{ item.otherPassword }}</p>
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
      data: []
    }
  },
  created () {
    const uid = firebase.auth().currentUser.uid
    const orderId = this.$route.params.index
    firebase.firestore().collection(uid).doc(orderId).get()
      .then((doc) => {
        this.data.push(doc.data())
      })
  },
  mounted () {
    setTimeout(() => {
      const data = this.data
      console.log(data)
      data.forEach((res) => {
        this.title = res.project
      })
    }, 500)
  },
  methods: {
    backDashboard () {
      this.$router.push(`/dashboard/${firebase.auth().currentUser.uid}`)
    }
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
