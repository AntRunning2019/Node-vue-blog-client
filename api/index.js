import axios from "axios";

// 配置默认的参数
axios.defaults.baseURL = 'http://localhost:3000' //默认的访问地址
axios.defaults.withCredentials = true // 跨域允许携带cookie
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"  // 设置post请求格式

export default {
  getArticleInfo() {
    return axios.post("/articleInfo")
  }
}