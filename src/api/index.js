//当前模块：API进行统一管理
import requests from "./ajax";
import mockRequests from "./mockAjax";
import request from "./mockAjax";

//三级联动接口
//  /api/product/getBaseCategoryList  get 无参数

//发请求:axios发请求返回的结果为Promise对象
export const reqCategoryList = () => requests({url: "/product/getBaseCategoryList", method: "get"});

//获取banner轮播图中的数据
export const reqGetBannerList = () => mockRequests.get("/banner");

//获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");

//获取搜索模块数据 地址：/api/list  请求方式：post
//参数：需要，category1id...
export const reqGetSearchInfo = (params) => requests({url: "/list", method: "post", data: params});

//获取产品详情信息的接口
export const reqGoodsInfo = (skuId) => requests({url: `/item/${skuId}`, method: "get"});

//将产品添加到购物车中（获取更新某一个产品的个数
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
  url: `/cart/addToCart/${skuId}/${skuNum}`,
  method: "post"
});

//获取购物车的数据接口
//URL:/api/cart/cartList   method:get
export const reqCartList = () => requests({url: "/cart/cartList", method: "get"});

//删除购物车产品的接口
//Url：/api/cart/deleteCart/{skuId}  method；DELETE
export const reqDeleteCartById = (skuId) => requests({url: `/cart/deleteCart/${skuId}`, method: "DELETE"});

//修改选中状态的接口
//url：/api/cart/checkCart/{skuId}/{isChecked}  method:get
export const reqUpdateCheckedById = (skuId, isChecked) => requests({
  url: `/cart/checkCart/${skuId}/${isChecked}`,
  method: "get"
});

//获取验证码
//URL: /api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone) => requests({url: `/user/passport/sendCode/${phone}`, method: "get"});

//用户注册
//URL: /api/user/passport/register  method:post
export const reqUserRegister = (data) => requests({url: "/user/passport/register", data, method: "post"});

//用户登录
//URL：/api/user/passport/login  method:post phone password
export const reqUserLogin = (data) => requests({url: "/user/passport/login", data, method: "post"});

//获取登录用户的信息【带着用户的token】
//URL：/api/user/passport/auth/getUserInfo method:get
export const reqUserInfo = () => requests({url: "/user/passport/auth/getUserInfo", method: "get"});

//退出登录
//URL:/api/user/passport/logout
export const reqLogout = () => requests({url: "/user/passport/logout", method: "get"});