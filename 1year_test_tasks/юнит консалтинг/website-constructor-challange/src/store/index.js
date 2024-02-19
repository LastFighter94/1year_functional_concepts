import Vue from "vue";
import Vuex from "vuex"
import table_with_tabs from "@/templates/tableWithTabs/store/index";

Vue.use(Vuex)

export const store = new Vuex.Store({
    // можно вынести state, mutations, getters, actions, modules при желании
    state(){
        return {
            templateTypes: {
                table_with_tabs: 'table_with_tabs'
            },
            templatesVisibility: {
                table_with_tabs: false
            }
        }
    },
    mutations: {
        renderTemplate: (state, payload) => {
            if (payload === 'table_with_tabs'){
                state.templatesVisibility.table_with_tabs = true
            }
            // и так далее
        }
    },
    modules: {
        table_with_tabs
    }
})