import { asyncRoutes, constantRoutes } from '@/router'


const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.routes = constantRoutes;
    }
}

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
          commit('SET_ROUTES', asyncRoutes)
          resolve(asyncRoutes)
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}