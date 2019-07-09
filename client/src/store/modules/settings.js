import defaultSetting from '@/settings'

const {collapseSidebar, showSettings, fixedHeader,  sidebarLogo} = defaultSetting

const state = {
    showSettings: showSettings,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo,
    collapseSidebar: collapseSidebar
}

const mutations = {
    CHANGE_SETTING: (state, {key, value}) =>{
        if (state.hasOwnProperty(key)){
            state[key] = value
        }
    }
}

const actions = {
    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}