import axios from 'axios'

export function request(config) {

  // 1. 创建axios 实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: '/api',
    timeout: 5000
  })

  // 2. 拦截
  // 请求拦截, 方便预先处理
  instance.interceptors.request.use(config => {
    return config
  }), err => {
    console.log(err);
  }
  // 响应数据预先处理拦截
  instance.interceptors.response.use(res => {
    return res.data
  }), err => {
    console.log(err);
  }

  //3. 使用实例
  return instance(config)
}


