import router from './router'
import store from './store'
router.beforeEach((to, from, next) => {
    const routes = store.dispatch('permission/generateRoutes');
    next();
    // to and from are both route objects. must call `next`.
})