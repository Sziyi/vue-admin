import axios from 'axios'
import loading from './loading'
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    loading.open()
    return config
  },
  function (error) {
    loading.close()
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    loading.open()
    return response
  },
  function (error) {
    loading.close()

    _showError(error.message)
    return Promise.reject(error)
  }
)

const _showError = (message) => {
  const info = message || '发生未知错误'
  ElMessage.error(info)
}

const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
