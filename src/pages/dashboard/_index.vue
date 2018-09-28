<template>
  <div>
    <section class="section section-dashboard">
      <div class="wrapper">
        <h2>ダッシュボード</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  head() {
    return {
      title: 'ダッシュボード'
    }
  },
  created () {
    this.$store.commit('loggined')
  }
}
</script>
