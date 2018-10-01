<template>
  <h2 class="section-title">
    <img :src="img" alt="" />
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: [ 'img', 'title' ]
}
</script>

<style lang="scss" scoped>
.section-title {
  margin: 0;
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1;
  color: #012336;
  text-align: left;

  img {
    display: inline-block;
    vertical-align: middle;
    margin: -.3rem 1rem 0 0;
    width: 2.4rem;
  }
}
</style>

