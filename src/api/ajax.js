//对axios进行二次封装
import axios from "axios";
import nprogress from 'nprogress'
//引入进度条的样式
import "nprogress/nprogress.css"

//引入store模块
import store from '@/store'

//1、利用axios对象的方法create创建一个axios实例
const ajax = axios.create({
    //配置对象
    //基础路径
    baseURL: "/api",
    //代表请求超时的时间
    timeout: 5000,
})

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做点事情
ajax.interceptors.request.use((config) => {
    // config ：配置对象，对象里有一个属性，headers请求头
    //如果
    if(store.state.detail.uuid_token){
        //给请求头加一个字段:和后台一致
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //如果用户登录，需要将token带给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    //进度条开始动
    nprogress.start()
    return config
})
//响应拦截器
ajax.interceptors.response.use((res) => {
    //成功的回调函数：服务器响应数据回来之后，响应拦截器可以检测到
    nprogress.done()
    return res.data
    },
    (error) => {
    //响应失败的回调函数
    return Promise.reject(Error('fail'))
})

//对外暴露
export default ajax
