//home模块的仓库
import {reqCategoryList, reqGetBannerList, reqFloorList} from "../api";

const state = {
    //state中的数据默认初始值：根据接口返回的数据类型进行初始化
    categoryList: [],
    //轮播图的数据
    bannerList: [],
    //floor的数据
    floorList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
const actions = {
    //通过api里面的接口函数，向服务器发请求
    async categoryList({commit}) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },

    //获取首页轮播图
    async getBannerList({commit}) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },

    //获取首页Floor伦比图
    async getFloorList({commit}) {
        let result = await reqFloorList()
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}