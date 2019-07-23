<template>
  <div class="app-wrapper">
    <SideBar></SideBar>
    <div class="main-container">
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
    </div>
  </div>
</template>

<script>
import SideBar from '@/layout/components/Sidebar/index.vue'
export default {
  name: 'Layout',
  components: {
    SideBar
  },
  data() {
    return {

    }
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100%;
  width: 100%;
}
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
.main-container {
  min-height: 100%;
  -webkit-transition: margin-left .28s;
  transition: margin-left .28s;
  margin-left: 210px;
  position: relative;
}
body {
  margin: 0;
}
</style>