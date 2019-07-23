<template>
  <div class="sidebar-container"  style="background-color: rgb(238, 241, 246)" :class="{ active: isCollapse == true }">
    <el-menu 
      default-active="activeMenu" 
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      router="router" 
      class="el-menu-vertical-demo" 
      :collapse-transition="false"
      @open="handleOpen" 
      @close="handleClose" 
      mode="vertical"
    >
      <SideBarItem v-for="route in permission_routes" 
                  :key="route.path" 
                  :item="route" 
                  :base-path="route.path" />
    </el-menu>
  </div>
</template>

<script>
import SideBarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  components: {
    SideBarItem
  },
  props: {
  },
  data() {
    return {
      isCollapse: this.$store.isCollapse,
      router: true,
      isActive:true,
      hasError : false
    }
  },
  computed: {
    variables() {
      return variables
    },
    ...mapGetters([
      'permission_routes'
    ])
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
      
      this.$store.dispatch('settings/changeSetting', {
        key: 'collapseSidebar',
        value: this.isCollapse
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  transition: width 0.28s;
  width: 210px !important;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
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

</style>