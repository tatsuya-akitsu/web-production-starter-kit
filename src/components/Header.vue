<template>
  <header id="header" class="header">
    <div class="wrapper--header">
      <p class="header-note">幅広いWEB制作に対応する依頼・見積りを簡易制作｜POiDER</p>
      <div class="header__area">
        <a class="header__link">新規登録</a>
        <a class="header__link">ログイン</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #2e3135;
}
.wrapper--header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0;
  width: 100%;
  max-width: $inner-width;
}

.header-note {
  margin: 0;
  font-size: 1.2rem;
  color: $base-wh;
}
.header__link {
  cursor: pointer;
  display: inline-block;
  padding: 0 1rem 0 0;
  font-size: 1.2rem;
  color: $base-wh;
  line-height: 1;
  text-decoration: underline;
  transition: $init-anim;

  &:nth-of-type(2) {
    padding: 0 0 0 1rem;
    border-left: 1px solid $base-wh;
  }

  &:hover {
    transition: $init-anim;
    text-decoration: none;
  }
}
</style>
