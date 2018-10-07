<template>
  <div>
    <section class="section section-mypage">
      <page-sidebar />
      <div class="dashboard-main">
        <div class="wrapper--main">
          <page-section-title title="マイページ" img="/img/dashboard/dashboard_img_8.svg" />
          <div class="user-profile__wrap">
            <div class="profile-thumbnail__box">
              <img :src="photoUrl" alt="" />
            </div>
            <div class="profile__content">
              <p class="name"><img src="/img/dashboard/dashboard_img_5.svg" alt="" />{{ name }}</p>
              <p class="email"><img src="/img/mypage/mypage_img_1.svg" alt="" />{{ email }}</p>
              <p class="provider" v-if="provider === 'google.com'"><img src="/img/icon/icon_google.svg" alt="" />{{ provider }}</p>
              <p class="provider" v-else-if="provider === 'facebook.com'"><img src="/img/icon/icon_facebook.svg" alt="" />{{ provider }}</p>
              <p class="provider" v-else-if="provider === 'github.com'"><img src="/img/icon/icon_github.svg" alt="" />{{ provider }}</p>
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
  name: 'mypage',
  components: { PageSidebar, PageSectionTitle },
  head() {
    return {
      title: 'ユーザーページ'
    }
  },
  data: () => {
    return {
      uid: '',
      name: '',
      email: '',
      photoUrl: '',
      provider: ''
    }
  },
  created () {
    setTimeout(() => {
      this.uid = firebase.auth().currentUser.uid
      this.name = firebase.auth().currentUser.displayName
      this.email = firebase.auth().currentUser.email
      this.photoUrl = firebase.auth().currentUser.photoURL
      firebase.auth().currentUser.providerData.forEach((profile) => {
        this.provider = profile.providerId
        console.log(profile.providerId)
      })
    }, 5)
  }
}
</script>

<style lang="scss" scoped>
.wrapper--main {
  margin: 0 auto;
  max-width: 640px;
  text-align: center;
}
.user-profile__wrap {
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0;
}
.profile-thumbnail__box {
  position: relative;
  width: 30%;
  height: auto;
  border-radius: 5px;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}

.profile__content {
  padding: 0 0 0 3rem;
  width: 70%;

  p {
    margin: 0;
    text-align: left;

    img {
      display: inline-block;
      vertical-align: middle;
      margin: 0 1rem 0 0;
      width: 1.4rem;
    }
  }
}
.name {
  font-size: 2rem;
}
.email {
  font-size: 1.6rem;
}
.provider {
  font-size: 1.6rem;
}
</style>
