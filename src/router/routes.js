//引入路由组件
import Home from "@/pages/Home/Home";
import Search from "@/pages/Search/Search";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Detail from "@/pages/Detail/Detail";
import AddCartSuccess from "../pages/AddCartSuccess/AddCartSuccess";
import ShopCart from "@/pages/ShopCart/ShopCart";

export default [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {show: true}//show的作用是选择是否显示Footer组件
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: {show: true},
    name: "search"
  },
  {
    path: "/login",
    component: Login,
    meta: {show: false}
  },
  {
    path: "/register",
    component: Register,
    meta: {show: false}
  },
  {
    path: "/detail/:skuid",
    name: "detail",
    component: Detail,
    meta: {show: false}
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: {show: true}
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
    meta: {show: true}
  },
  {
    path: "*",
    redirect: "/home",
    meta: {show: false}
  }
];