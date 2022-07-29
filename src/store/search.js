//search模块的仓库
import {reqGetSearchInfo} from "../api";

const state = {
    searchList:{}
}
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({commit},params={}){
        //params形参在用户派发action时，第二个参数传递过来，至少是个空对象
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            commit('GETSEARCHLIST',result.data)
        }
    }
}
//计算属性，在项目中能够简化数据
//可以将即将使用的数据简化
const getters = {
    //当前形参state，当前仓库中的state，并非大仓库中的那个state
    goodsList(state){
        //state.searchList.goodsList如果服务器数据回来了，没问题是一个数组
        //假如网络不给力|没有网state.searchList.goodsList应该返回的是undefined
        //计算新的属性的属性值至少给人家来一个数组
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}