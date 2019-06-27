import Vue from 'vue'
import Router from 'vue-router'
import Layout from './layout/index.vue' 
import ProductListPage from './views/ProductListPage.vue'
import ProductPage from './views/ProductPage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboard/index'),
          name: 'Dashboard'
        }
      ]
    },
    {
      component: Layout,
      path: '/product-list-page',
      name: 'product-list-page',
      children: [
        {
          path: 'index',
          component: ProductListPage
        }
      ]
    },
    {
      component: Layout,
      path: '/product-page',
      name: 'product-page',
      children: [
        {
          path: 'index',
          component: ProductPage
        }
      ]
    },
    {
      component: Layout,
      path: '/about',
      name: 'about',
      children: [
        {
          path: 'index', 
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    }
  ]
})
