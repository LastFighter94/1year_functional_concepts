// можно вынести state, mutations, getters, actions, modules при желании
const table_with_tabs = {
    namespaced: true,
    state(){
        return {
            data: null,
            activeTabIdx: 0 // default
        }
    },
    getters: {
        activeTabData: state => {
            return state.data.tabs[state.activeTabIdx]
        },
        activeTabGroupsData: (state, getters) => {
            return getters.activeTabData.groups
        }
    },
    mutations: {
        setData: (state, payload) => {
            state.data = payload
        },
        setActiveTabIdx: (state, payload) => {
            state.activeTabIdx = payload
        }
    },
    actions: {

    }
}

export default table_with_tabs