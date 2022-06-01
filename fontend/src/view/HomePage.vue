<template>
  <el-container>
    <el-header>
    </el-header>
    <el-main>
      <img alt="intro." src="../assets/intro.png" style="width: 100%">
      <div onclick="window.open('https://www.baidu.com')"><img src="../assets/strat.png" style="width: 100%"></div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      bg: require('@/assets/OIP-C.jpg')
    }
  }
}
</script>

<style scoped>

</style>