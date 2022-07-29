//配置路由
import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter);

//引入路由组件
// import Home from "@/pages/Home";
// import Search from "@/pages/Search";
// import Login from "@/pages/Login";
// import Register from "@/pages/Register";
// import Detail from "@/pages/Detail";
//将路由存到一个单独的文件中
import routes from "@/router/routes";
//引入store
import store from "@/store";
//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push|replace方法
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => {
    }, () => {
    });
  }

};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => {
    }, () => {
    });
  }

};

//配置路由
let router = new VueRouter({
  //配置路由
  routes,
  //滚动行为
  scrollBehavior(to, from, savePosition) {
    //y=0代表滚动条在最上方
    return {y: 0};
  },
});

//全局路由守卫
router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  if (token) {//如果登录了用户
    //若用户要去登录页面，直接回到home页
    if (to.path === "/login") {
      next("/home");
    } else {
      //登录但是不去登录页
      if (name) {
        //放行路由
        next();
      } else {
        try {
          //派发action。如果没有用户信息，需要先派发action让仓库存储用户信息
          await store.dispatch("getUserInfo");
          next();
        } catch (e) {
          //走到这里说明token失效
          //清除token
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {//如果没有登录用户，所有路由都放行
    next();
  }

});


export default router;