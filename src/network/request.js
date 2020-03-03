import axios from 'axios'

 
// 终极封装
export function request(config) {
    const instance1 = axios.create({
      //备用地址： http://106.54.54.237:8000/api/wh
      baseURL: 'http://123.207.32.32:8000/api/wh',
      timeout: 4000,
    })

    // 拦截器
    // 请求拦截
    instance1.interceptors.request.use(config => {  
      return config  // 拦截器拦截后要记得将请求返回出去
    }), err => {
    }

    // 响应拦截
    instance1.interceptors.response.use(res => { 
      return res
    }), err => {
    }

    // 发送网络请求
    return instance1(config)  // instance1本身的返回值就是Promise，所以不用new新的Promise
} 

