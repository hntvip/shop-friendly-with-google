<template>
  <div class="product">
    <el-row>
      <el-col :span="6">
        <img src="" alt="imgage of product">
      </el-col>
      <el-col :span="6">
        
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
