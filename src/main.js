import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from './router'
//引入仓库
import store from './store'

//三级联动组件---注册为全局组件
import TypeNav from "./components/TypeNav/TypeNav";
import Carousel from "./components/Carousel/Carousel";
import Pagination from "./components/Pagination/Pagination";

//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name,Pagination)
Vue.config.productionTip = false


//测试
// import {reqGetSearchInfo} from '@/api/index'
// reqGetSearchInfo()


//引入mockServe文件
import '@/mock/mockServe'
//引入swiper的样式
import 'swiper/css/swiper.css'

new Vue({
    render: h => h(App),
    //配置全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    //注册路由
    router,
    //注册仓库,组件实例的身上多了个$store属性
    store
}).$mount('#app')
