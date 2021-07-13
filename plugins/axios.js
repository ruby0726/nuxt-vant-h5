export default function ({ app: { $axios, $cookies } }) {
  $axios.defaults.baseURL = process.env.baseUrl
  $axios.defaults.timeout = 50000
  $axios.interceptors.request.use((config) => {
    // config.headers.authorization = "Bearer " + $cookies.get("token") || ""
    return config
  })
  $axios.interceptors.response.use((response) => {
    if (/^[4|5]/.test(response.status)) {
      return Promise.reject(response.statusText)
    }
    if (response.status === 200) {
      if (response.data.code !== 200) {
        // 提示错误
        if (response.data.code === 201) {
          // 退出登录
        }
        return Promise.reject({ mes: response.data.mes || "Error" })
      } else {
        return response.data.data
      }
    }
  })
}
