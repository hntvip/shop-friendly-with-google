<template>
  <div class="app-wrapper">
    <el-container style="border: 1px solid #eee">
      <el-aside style="background-color: rgb(238, 241, 246)" :class="{ active: isCollapse == true }">
        <el-menu router="router" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-menu-item index="1" @click="collapseMenu">
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
          <router-view :key="$route.fullPath"/>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Layout',
  components: {
    
  },
  data() {
      return {
        isCollapse: true,
        router: true,
        isActive:true,
        hasError : false
      }
  },
  computed: {
    
  },
  methods: {
    handleOpen (key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
        console.log(key, keyPath);
    },
    collapseMenu () {
        console.log("button clicked")
        this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  // width: 200px;
  // min-height: 400px;
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