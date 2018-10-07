<template>
  <div>
    <section class="section section--style_1">
      <el-alert
        title="案件依頼の削除が完了しました"
        type="success"
        :class="{anim: success === true}"
        show-icon
      />
      <el-alert
        title="案件作成が完了しました"
        type="success"
        :class="{anim: $store.state.completeOrder === true}"
        show-icon
      />
      <el-alert
        title="案件編集が完了しました"
        type="success"
        :class="{anim: $store.state.completeEditOrder === true}"
        show-icon
      />
      <el-alert
        title="ユーザーが見つかりませんでした"
        type="error"
        :class="{anim: $store.state.errorSearchUsers === true}"
        show-icon
      />
      <el-alert
        title="ユーザーをフォローしました"
        type="success"
        :class="{anim: $store.state.followingUser === true}"
        show-icon
      />
      <page-sidebar />
      <div class="dashboard-main">
        <div class="wrapper--main">
          <page-section-title title="ダッシュボード" img="/img/dashboard/dashboard_img_6.svg" />
          <div class="order-list" v-if="orders.length > 0">
            <table>
              <thead>
                <tr>
                  <th>ステータス</th>
                  <th>プロジェクト名</th>
                  <th>クライアント名</th>
                  <th>担当者名</th>
                  <th>納品希望日</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in orders" :key="i">
                  <td>
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
                  </td>
                  <td><a @click="$router.push(`/order/template/detail/${item.key}`)">{{ item.projectName }}</a></td>
                  <td>{{ item.clientName }}</td>
                  <td>{{ item.repName }}</td>
                  <td>{{ item.date }}</td>
                  <td>
                    <el-button class="origin_btn--small origin_btn--primary" @click="$router.push(`/order/edit/edit1/${item.key}`)">
                      編集
                    </el-button>
                  </td>
                  <td>
                    <el-button class="origin_btn--small origin_btn--secondary" @click="dialogVisible = true">
                      削除
                    </el-button>
                    <el-dialog
                      title="削除確認"
                      :visible.sync="dialogVisible"
                      width="640px"
                      center
                    >
                      <p class="delete__text">
                        選択したデータを削除します。<br />
                        本当に削除してもよろしいですか？
                        <br /><br />
                        ※削除したデータを復旧させることはできませんのでご注意ください
                      </p>
                      <el-button class="origin_btn--small origin_btn--secondary" @click="dialogVisible = false">キャンセル</el-button>
                      <el-button class="origin_btn--small origin_btn--primary" @click="deleteData(item.key)">削除</el-button>
                    </el-dialog>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="user-search_wrap">
            <page-section-title title="ユーザーを検索" img="/img/dashboard/dashboard_img_9.svg" />
            <p class="user-search_note">
              フォローしたいユーザーの登録しているアドレスを入力して検索してください。
            </p>
            <el-input
              name="email"
              type="email"
              v-model="email"
              placeholder="メールアドレス"
              class="form-control"
            />
            <el-button class="origin_btn--small origin_btn--primary" @click="getUserData">検索</el-button>
            <div class="user_info" v-if="$store.state.searchUsers === true">
              <div class="thumbnail">
                <img :src="users.photoUrl" alt="" />
              </div>
              <div class="body">
                <div class="content">
                  <p class="name">{{ users.name }}</p>
                  <p class="mail">{{ users.email }}</p>
                </div>
                <el-button class="follow_btn" circle @click="followUser">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                    <g>
                      <g>
                        <path d="M14.708,15.847C14.252,14.864,14,13.742,14,12.5s0.252-2.489,0.708-3.659c0.455-1.171,1.114-2.266,1.929-3.205    c0.814-0.938,1.784-1.723,2.86-2.271C20.574,2.814,21.758,2.5,23,2.5s2.426,0.252,3.503,0.707c1.077,0.456,2.046,1.115,2.86,1.929    c0.813,0.814,1.474,1.784,1.929,2.861C31.749,9.073,32,10.258,32,11.5s-0.252,2.427-0.708,3.503    c-0.455,1.077-1.114,2.047-1.929,2.861C28.55,18.678,17.077,29.044,16,29.5l0,0l0,0C14.923,29.044,3.45,18.678,2.636,17.864    c-0.814-0.814-1.473-1.784-1.929-2.861C0.252,13.927,0,12.742,0,11.5s0.252-2.427,0.707-3.503C1.163,6.92,1.821,5.95,2.636,5.136    C3.45,4.322,4.42,3.663,5.497,3.207C6.573,2.752,7.757,2.5,9,2.5s2.427,0.314,3.503,0.863c1.077,0.55,2.046,1.334,2.861,2.272    c0.814,0.939,1.473,2.034,1.929,3.205C17.748,10.011,18,11.258,18,12.5s-0.252,2.364-0.707,3.347    c-0.456,0.983-1.113,1.828-1.929,2.518" fill="#f56c6c"/>
                      </g>
                    </g>
                  </svg>
                </el-button>
              </div>
            </div>
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
  name: 'dashboard',
  components: { PageSidebar, PageSectionTitle },
  head() {
    return {
      title: 'ダッシュボード'
    }
  },
  data: () => {
    return {
      uid: '',
      email: '',
      orders: [],
      users: {
        name: '',
        email: '',
        photoUrl: ''
      },
      dialogVisible: false,
      success: false
    }
  },
  created () {
    this.$store.commit('loggined')
    this.uid = firebase.auth().currentUser.uid

    setTimeout(() => {
      let uid = firebase.auth().currentUser.uid
      let name = firebase.auth().currentUser.displayName
      let email = firebase.auth().currentUser.email
      let photoUrl = firebase.auth().currentUser.photoURL
      firebase.firestore().collection('users').doc(email).set({
        uid: uid,
        name: name,
        email: email,
        photoUrl: photoUrl,
      })
        .then(() =>{
          console.log('completed')
        })
        .catch((error) => {
          console.log(error)
        })
    }, 5)
  },
  mounted() {
    this.$store.commit('outLoading')
    firebase.firestore().collection(this.uid).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.orders.push(Object.assign({ key: doc.id }, doc.data()))
        })
      })
  },
  methods: {
    deleteData (key) {
      firebase.firestore().collection(this.uid).doc(key).delete()
        .then(() => {
          this.dialogVisible = false
          this.success = true
          this.orders = []

          firebase.firestore().collection(this.uid).get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.orders.push(Object.assign({ key: doc.id }, doc.data()))
              })
            })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getUserData () {
      const email = this.email
      firebase.firestore().collection('users').doc(email).get()
        .then((doc) => {
          if (doc.exists) {
            this.$store.commit('searchUser')
            this.users.name = doc.data().name,
            this.users.email = doc.data().email,
            this.users.photoUrl = doc.data().photoUrl
          } else {
            this.$store.commit('searchErrorUser')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    followUser () {
      // 自身のフォローに追加
      const myname = firebase.auth().currentUser.displayName
      const myemail = firebase.auth().currentUser.email
      const myphotoUrl = firebase.auth().currentUser.photoURL

      const uemail = this.users.email
      const uname = this.users.name
      const photo = this.users.photoUrl
      
      firebase.firestore().collection('users').doc(myemail).collection('follow').add({
        name: uname,
        email: uemail,
        photoUrl: photo
      })
        .then(() => {
          this.$store.commit('followUser')
        })
        .catch((error) => {
          console.log(error)
        })

      // ユーザーのフォロワーズに追加
      firebase.firestore().collection('users').doc(this.email).collection('followers').add({
        name: myname,
        email: myemail,
        photoUrl: myphotoUrl
      })
        .then(() => {
          console.log('フォローされました')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>


<style lang="scss" scoped>
.order-list {
  margin: 3rem 0 0;
}

table {
  width: 100%;
}
thead {
  tr {
    background-color: #054d4b;
  }

  th {
    color: $base-wh;
  }
}
tbody {
  tr {
    transition: $init-anim;

    &:nth-child(even) {
      background-color: #f1f1f1;
    }
    &:hover {
      transition: $init-anim;
      background-color: #f8ffff;
    }
  }
}
th, td {
  padding: .8rem .5rem;
  font-size: 1.4rem;
  text-align: center;

  a {
    cursor: pointer;
    transition: $init-anim;

    &:hover {
      transition: $init-anim;
      text-decoration: underline;
    }
  }
}

.user-search_wrap {
  margin: 5rem 0 0;

  .form-control {
    margin: 0 1rem 0 0;
    max-width: 360px;
  }
}
.user-search_note {
  margin: 0;
  padding: 2rem 0 0;
  font-size: 1.4rem;
}
.user_info {
  margin: 1rem 0 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 5px;

  .thumbnail {
    width: 10rem;
  }

  .body {
    padding: 0 0 0 3rem;
    width: calc(100% - 10rem);
  }

  .content {
    display: inline-block;
    vertical-align: middle;
  }

  .name {
    margin: 0;
    font-size: 1.6rem;
    font-weight: bold;
  }
  .mail {
    margin: 0;
    padding: 1.6rem 0 0;
    font-size: 1.4rem;
  }

  button {
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 0 2rem;
  }
}
</style>
