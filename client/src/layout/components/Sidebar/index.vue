<template>
  <div class="menu-wrapper">
    <el-aside style="background-color: rgb(238, 241, 246)" :class="{ active: isCollapse == true }">
        <el-menu router="router" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-menu-item @click="collapseMenu">
            <i v-bind:class="[isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left']"></i>
          </el-menu-item>
           <el-menu-item index="2" route="/" >
            <i class="el-icon-s-home"></i>
            <span slot="title">HOME</span>
          </el-menu-item>
          <el-menu-item index="3" route="/product-list-page">
            <i class="el-icon-potato-strips"></i>
            <span slot="title">Product List Page</span>
          </el-menu-item>
          <el-menu-item index="4" route="/product-page" >
            <i class="el-icon-s-grid"></i>
            <span slot="title">Product Page width Id =1</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
  </div>
</template>

<script>

export default {
  name: 'SidebarItem',
  props: {
    
  },
  data() {
      return {
        isCollapse: true,
        router: true,
        isActive:true,
        hasError : false
      }
  },
  methods: {
    handleOpen (key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
        console.log(key, keyPath);
    },
    collapseMenu () {
      console.log("collapse menu clicked")
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style lang="less">
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   // width: 200px;
//   // min-height: 400px;
// }
.el-menu-item {
  text-align: left;
}
.el-aside.active {
  width: 65px !important ;
}
.el-menu {
  border-right: none !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>