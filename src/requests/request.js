import axios from 'axios'

// 拦截器
axios.interceptors.request.use((config) => {
    config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json;chartset=utf-8'

    config.baseURL = 'http://localhost:5200/api'
    config.timeout = 30 * 1000

    return config
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

export default axios
