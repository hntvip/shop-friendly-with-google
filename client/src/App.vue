<template>
  <div id="app">
    <el-container style="border: 1px solid #eee">
      <el-aside style="background-color: rgb(238, 241, 246)" :class="{ active: isCollapse == true }">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-menu-item index="1" @click="collapseMenu">
            <i class="el-icon-setting"></i>
            <span slot="title">Collapse</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Navigator One</span>
            </template>
            <el-menu-item-group>
              <span slot="title">Group One</span>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">item four</span>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="4" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Tom</span>
        </el-header>
        
        <el-main>
          <router-view/>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  // width: 200px;
  // min-height: 400px;
}
.el-aside.active {
  width: 64px !important ;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    computed: {
      // collapseMenu() {
      //   return !this.isCollapse;
      // }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      collapseMenu() {
        console.log("button clicked")
        
        this.isCollapse = !this.isCollapse;
      }
    }
  }
</script>

