<template>
  <footer id="footer" class="footer">
    <div class="wrapper--footer">
      <ul class="footer-list">
        <li><a @click="$router.push('/terms')">利用規約</a></li>
        <li><a @click="$router.push('/privacy')">プライバシーポリシー</a></li>
        <li><a>お問い合わせ</a></li>
        <li><a>開発者について</a></li>
      </ul>
      <p class="footer__copyright"><small>&copy; 2018 POiDER</small></p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin: 2rem 0 0;
  background-color: $base-wh;
}
.wrapper--footer {
  margin: 0 auto;
  padding: 3rem 0;
  width: 100%;
  max-width: $inner-width;
}

.footer-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;

  li {
    display: inline-block;
    vertical-align: middle;
    border-right: 1px solid #ccc;

    &:nth-last-of-type(1) {
      border-right: none;
    }
  }

  a {
    cursor: pointer;
    padding: .3rem 1rem;
    display: inline-block;
    font-size: 1.2rem;
    color: #ccc;
    line-height: 1;
  }
}

.footer__copyright {
  margin: 0;
  padding: 2rem 0 0;
  text-align: center;
  font-size: 1rem;
  color: $base-bl;
}
</style>
