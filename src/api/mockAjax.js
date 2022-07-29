//对axios进行二次封装
import axios from "axios";
import nprogress from 'nprogress'
//引入进度条的样式
import "nprogress/nprogress.css"

//1、利用axios对象的方法create创建一个axios实例
const request = axios.create({
    //配置对象
    //基础路径
    baseURL: "/mock",
    //代表请求超时的时间
    timeout: 5000,
})

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做点事情
request.interceptors.request.use((config) => {
    // config ：配置对象，对象里有一个属性，headers请求头
    //进度条开始懂
    nprogress.start()
    return config
})
//响应拦截器
request.interceptors.response.use((res) => {
        //成功的回调函数：服务器响应数据回来之后，响应拦截器可以检测到
        nprogress.done()
        return res.data
    },
    (error) => {
        //响应失败的回调函数
        return Promise.reject(Error('fail'))
    })

//对外暴露
export default request
