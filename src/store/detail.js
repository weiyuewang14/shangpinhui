//detail模块的仓库
import {reqGoodsInfo, reqAddOrUpdateShopCart} from "../api/index";
// 封装游客身份信息的模块---生成一个随机字符串
import {getUUID} from "@/utils/uuid_token";

const state = {
  goodInfo: {},
  //游客的历史身份
  uuid_token: getUUID()
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
  ADDORUPDATESHOPCART(state) {

  }
};
const actions = {
  //获取产品信息
  async getGoodInfo({commit}, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code === 200) {
      commit("GETGOODINFO", result.data);
    }
  },

  //将产品添加到购物车中
  async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    //如果服务器请求成功，返回一个字符串
    if (result.code === 200) {
      return "ok";
    } else {//否则加入购物车失败，返回一个失败
      return Promise.reject(new Error("fail"));
    }

  }

};
//简化数据
const getters = {
  //路径导航的简化数据
  categoryView(state) {
    //起始时，categoryView是个空对象，空对象无属性
    return state.goodInfo.categoryView || {};
  },
  //简化产品信息的数据
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  //产品售卖属性的数据
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  }

};

export default {
  state,
  mutations,
  actions,
  getters
};