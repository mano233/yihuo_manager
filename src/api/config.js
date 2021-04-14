import axios from 'axios'
// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://192.168.50.193:8080/'
} else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = 'http://192.168.50.193:8080/'
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://192.168.50.193:8080/'
}
axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data'

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = localStorage.getItem('token')
        token && (config.headers.Authorization = token)
        return config
    },
    error => {
        return Promise.error(error)
    })

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            setTimeout(() => {
                resolve(res.data)
            }, 200)
        }).catch(err => {
            setTimeout(() => {
                reject(err.data)
            }, 200)

        })
    })
}


/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            setTimeout(() => {
                resolve(res.data)
            }, 200)
        }).catch(err => {
            reject(err.data)
        })
    })
}
