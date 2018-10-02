<template>
  <div>
    <section class="section section--style_1">
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
                  <td><a @click="$router.push(`/order/template/detail/${item.key}`)">{{ item.project }}</a></td>
                  <td>{{ item.client }}</td>
                  <td>{{ item.rep }}</td>
                  <td>{{ item.date }}</td>
                  <td>
                    <el-button class="origin_btn--small origin_btn--primary">
                      編集
                    </el-button>
                  </td>
                  <td>
                    <el-button class="origin_btn--small origin_btn--secondary">
                      削除
                    </el-button>
                  </td>
                </tr>
              </tbody>
            </table>
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
      orders: []
    }
  },
  created () {
    this.$store.commit('loggined')
    this.uid = firebase.auth().currentUser.uid
  },
  mounted() {
    this.$store.commit('outLoading')
    firebase.firestore().collection(this.uid).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.orders.push(Object.assign({ key: doc.id }, doc.data()))
        })
      })
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
    &:nth-child(even) {
      background-color: #f1f1f1;
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
tr {
  transition: $init-anim;

  &:hover {
    transition: $init-anim;
    background-color: #f8ffff;
  }
}
</style>
