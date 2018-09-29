<template>
  <aside class="dashboard-sidebar">
    <div class="wrapper--sidebar">
      <div class="sidebar__thumbnail">
        <img :src="photoUrl" alt="" />
      </div>
      <p class="sidebar__user-name">{{ name }}</p>
      <ul class="sidebar-list">
        <li>
          <a @click="$router.push('/order/template/sheet1')">
            <img src="/img/dashboard/dashboard_img_2.svg" alt="" />
            新規作成
          </a>
        </li>
        <li>
          <a>
            <img src="/img/dashboard/dashboard_img_4.svg" alt="" />
            案件ステータス確認
          </a>
        </li>
        <li>
          <a>
            <img src="/img/dashboard/dashboard_img_5.svg" alt="" />
            マイページ
          </a>
        </li>
        <li>
          <a>
            <img src="/img/dashboard/dashboard_img_3.svg" alt="" />
            設定
          </a>
        </li>
        <li>
          <a @click="logout">
            <img src="/img/dashboard/dashboard_img_1.svg" alt="" />
            ログアウト
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import firebase from '@/plugins/firebase.js'

export default {
  data: () => {
    return {
      uid: '',
      name: '',
      photoUrl: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.uid = firebase.auth().currentUser.uid
      this.name = firebase.auth().currentUser.displayName
      this.photoUrl = firebase.auth().currentUser.photoURL
    }, 10)
  },
  methods: {
    logout() {
      firebase.auth().signOut()
        .then(() => {
          this.$store.commit('logout')
          this.$router.push('/')
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-sidebar {
  position: fixed;
  left: 0;
  width: 20rem;
}
.wrapper--sidebar {
  padding: 5rem 2rem;
}

.sidebar__thumbnail {
  margin: 0 auto;
  width: 8rem;
  height: 8rem;
  border-radius: 5px;
  overflow: hidden;
}
.sidebar__user-name {
  margin: 0;
  padding: 1.6rem 0 2rem 0;
  font-size: 1.6rem;
  color: $base-bl;
  text-align: center;
}

.sidebar-list {
  margin: 0;
  padding: 2rem 0 0;
  list-style-type: none;

  a {
    cursor: pointer;
    display: block;
    padding: 1.5rem 0;
    font-size: 1.4rem;
    color: $base-bl;

    img {
      display: inline-block;
      vertical-align: middle;
      margin: 0 .5rem 0 0;
      width: 1.4rem;
    }
  }
}
</style>
