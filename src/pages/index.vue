<template>
  <div>
    <section class="section section-main">
      <div id="top" class="wrapper">
        <h1><img src="/img/logo.svg" alt="" /></h1>
        <div class="main__feature">
          <div class="main-thumbnail">
            <img src="/img/main/main_img.svg" alt="" />
          </div>
          <div class="main__information">
            <p class="main__intro">スムーズなWEB制作をサポートする</p>
            <h2 class="main__title">依頼作成<br />プラットフォーム</h2>
            <p class="main__catch">
              デザイン〜コーディング、機能実装からインフラ整備、画像制作など様々な要望が多いWEB業界では
              常にあらゆる情報をクライアントからヒアリングする必要が発生します。<br />
              そんな手間を一箇所に集約することで双方が確認しやすくしたプラットフォームです。
            </p>
            <el-button class="origin__btn--primary">新規登録</el-button>
            <el-button class="origin__btn--secondary">ログイン</el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'top',
  data: () => {},
  mounted () {
    const header = document.getElementById('header')
    const top = document.getElementById('top')
    const wH = window.innerHeight
    const setHeight = wH - header.offsetHeight
    
    top.style.height = `${setHeight}px`
    console.log(top)
  }
}
</script>

<style lang="scss" scoped>
.section-main {
  background-image: url('/img/main/main_background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.section-main .wrapper {
  height: 100vh;
}

.main__feature {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

h1 {
  position: absolute;
  top: 5rem;
  right: 3rem;
  margin: 0;
  width: 15rem;
}

.main-thumbnail {
  padding-right: 2.5rem;
  flex: 1;
}

.main__information {
  padding-left: 2.5rem;
  flex: 1;
}
.main__information button {
  margin: 2rem .5rem 0 0;

  &:nth-of-type(2) {
    margin: 2rem 0 0 .5rem;
  }
}
.main__intro {
  margin: 0;
  font-size: 1.4rem;
  font-weight: bold;
  columns: #012336;
}
.main__title {
  margin: 0;
  padding-top: 1.2rem;
  font-size: 6.5rem;
  font-weight: bold;
  color: #012336;
}
.main__catch {
  margin: 0;
  padding-top: 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: .12rem;
  color: #012336;
}
</style>
