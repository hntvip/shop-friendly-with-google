import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from './layout/index.vue' 

import ProductListPage from './views/ProductListPage.vue'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: {
          icon: 'el-icon-location',
          title: 'Dashboard'
        }
      }
    ]
  },
  {
    component: Layout,
    path: '/giay-cao-got-nu',
    name: 'giay-cao-got-nu',
    children: [
      {
        path: 'index',
        component: ProductListPage,
        meta: {
          icon: 'el-icon-location',
          title: 'Tabs'
        },
      }
    ]
  },
  {
    component: Layout,
    path: '/about',
    name: 'about',
    children: [
      {
        meta: {
          icon: 'el-icon-location',
          title: 'About'
        },
        path: 'index', 
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */

export const asyncRoutes = [

]

const createRouter = () => new Router({
  routes: constantRoutes
})

const router = createRouter();


export default router