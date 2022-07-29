import Vue from "vue";
import Vuex from "vuex";
//使用插件
Vue.use(Vuex);

//引入小仓库
import home from "./home";
import search from "./search";
import detail from "./detail";
import shopcart from "./shopcart";
import user from "./user";
/*//state：仓库存储数据的地方
const state = {}

//mutations：修改state的唯一手段
const mutations = {}

//action：处理action，可以书写自己的业务逻辑，也可以异步处理
const actions = {}

//getters：计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
const getters ={}*/

//对外暴露
export default new Vuex.Store({
  //实现Vuex仓库模块式开发存储数据
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
  }
});