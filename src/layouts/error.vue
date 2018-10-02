<template>
  <section id="error" class="section section-error">
    <div class="wrapper--error">
      <h2 class="error-title">お探しのページは見つかりませんでした</h2>
      <img src="/img/404.svg" alt="" />
      <p>
        お探しのページは
      </p>
      <ul>
        <li>既に削除されている・公開期限が終わっている</li>
        <li>アクセスしたアドレスが異なっている</li>
      </ul>
      <p>などの理由で見つかりませんでした。<br />もう一度トップページよりやり直してください</p>
      <el-button class="origin_btn origin_btn--primary" @click="$router.push('/')">サービストップへ</el-button>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    const section = document.getElementById('error')
    const wh = window.innerHeight
    section.style.height = `${wh}px`
  }
}
</script>


<style lang="scss" scoped>
.section--error {
  position: relative;
  width: 100%;
  height: 100vh;
}
.wrapper--error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  max-width: 740px;
}
.error-title {
  margin: 0 0 2rem 0;
  font-size: 3.2rem;
  text-align: center;
  color: #012336;
}
img {
  display: block;
  margin: 0 auto;
  width: 60%;
}
img + p {
  padding-top: 1.6rem;
}
p {
  margin: 0;
  font-size: 1.4rem;
  text-align: center;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    font-size: 1.4rem;

    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: $color-main;
    }
  }
}

button {
  margin: 3rem 0 0;
}
</style>

