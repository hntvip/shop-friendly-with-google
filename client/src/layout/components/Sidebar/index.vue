<template>
  <div class="menu-wrapper">
    <el-aside style="background-color: rgb(238, 241, 246)" :class="{ active: isCollapse == true }">
        <el-menu 
          default-active="1" 
          router="router" 
          class="el-menu-vertical-demo" 
          @open="handleOpen" 
          @close="handleClose" 
          :collapse="isCollapse"
          :collapse-transition="false"
          >
          <el-menu-item @click="collapseMenu">
            <i v-bind:class="[isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left']"></i>
          </el-menu-item>
          <el-menu-item index="1" route="/" >
            <i class="el-icon-s-home"></i>
            <span slot="title">Dashboard</span>
          </el-menu-item>
          <el-submenu index="2" route="/">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Giày nữ</span>
            </template>
            <el-menu-item-group title="Giày cao gót">
              <el-menu-item index="2-1">Giày cao gót 7cm</el-menu-item>
              <el-menu-item index="2-2">Giày cao gót 10cm</el-menu-item>
              <el-menu-item index="2-3">Giày cao gót 12cm</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Giày sandal nữ">
              <el-menu-item index="2-4">Giày sandal nữ 5cm</el-menu-item>
              <el-menu-item index="2-5">Giày sandal nữ 7cm</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Giày đế xuồng">
              <el-menu-item index="2-6">Giày đế xuồng nữ 10cm</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3" route="/">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Áo sơ mi công sở</span>
            </template>
            <el-menu-item-group title="Áo sơ mi trơn">
              <el-menu-item index="3-1">Áo sơ mi trơn tay dài</el-menu-item>
              <el-menu-item index="3-2">Áo sơ mi trơn tay cọc</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Áo sơ mi kiểu">
              <el-menu-item index="3-3">Áo sơ mi kiểu tay dài</el-menu-item>
              <el-menu-item index="3-4">Áo sơ mi kiểu tay cọc</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4" route="/">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Bóp / Ví nam nữ cao cấp</span>
            </template>
            <el-menu-item-group title="Bóp Nam">
              <el-menu-item index="4-1">Bóp Nam da bò cao cấp</el-menu-item>
              <el-menu-item index="4-2">Bóp Nam da PU cao cấp</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Bóp Ví Nữ">
              <el-menu-item index="4-3">Bóp ví Nữ dự tiệc</el-menu-item>
              <el-menu-item index="4-4">Áo sơ mi kiểu tay cọc</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5" route="/">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Mỹ phẩm</span>
            </template>
            <el-menu-item-group title="FOB">
              <el-menu-item index="4-1">Kem trắng da toàn thân FOB</el-menu-item>
              <el-menu-item index="4-2">Sữa rửa mặt FOB</el-menu-item>
              <el-menu-item index="4-3">Gel tẩy tế bào chết FOB</el-menu-item>
              <el-menu-item index="4-4">Kem trị mụn FOB 10 lotion</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="5" route="/product-list-page">
            <i class="el-icon-potato-strips"></i>
            <span slot="title">Product List Page</span>
          </el-menu-item>
          <el-menu-item index="6" route="/product-page" >
            <i class="el-icon-s-grid"></i>
            <span slot="title">Product Page width Id = 1</span>
          </el-menu-item>
        </el-menu>

        <!-- <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu> -->
      </el-aside>
  </div>
</template>

<script>
import SideBarItem from './SidebarItem'
export default {
  name: 'Sidebar',
  compoents: {
    
  },
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
      var _value = false;
      
      if (this.isCollapse){
        _value = true;
      }

      this.$store.dispatch('settings/changeSetting', {
        key: 'sidebarLogo',
        value: _value
      })
    }
  }
}
</script>

<style lang="less">
.el-menu-vertical-demo {
  &.el-menu {
    text-align: left;
  }
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