import {reqCartList, reqDeleteCartById, reqUpdateCheckedById} from "@/api";
//state：仓库存储数据的地方
const state = {
  cartList: []
};

//mutations：修改state的唯一手段
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  }
};

//action：处理action，可以书写自己的业务逻辑，也可以异步处理
const actions = {
  //获取购物车数据
  async getCartList({commit}) {
    let result = await reqCartList();
    if (result.code === 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  //删除购物车某一个商品
  async deleteCartListBySkuId({commit}, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //修改购物车某一个产品
  async updateCheckedById({commit}, {skuId, isChecked}) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //删除全部勾选的商品
  deleteAllCheckedCart({dispatch, getters}) {
    let promiseAll = [];
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked === 1 ? dispatch("deleteCartListBySkuId", item.skuId) : "";
      // console.log(item.skuId)
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },
  //修改全部产品的状态
  updateAllCartIsChecked({dispatch, state}, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach(item => {
      let promise = dispatch("updateCheckedById", {skuId: item.skuId, isChecked});
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },
};

//getters：计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};