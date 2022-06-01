<template>
  <el-container>
    <el-header>
      <el-avatar :icon="UserFilled" style="float: left"/>

    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-icon><Aim /></el-icon>
        <img alt="Vue logo" src="../assets/logo.png">
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'UsrPage',
  props: {
    msg: String
  },
  data(){
    return{

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
