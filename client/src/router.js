import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProductListPage from './views/ProductListPage.vue'
import ProductPage from './views/ProductPage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product-page',
      name: 'product-list-page',
      component: ProductListPage
    },
    {
      path: 'product/:id', // id of product
      name: 'product-page',
      component: ProductPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
