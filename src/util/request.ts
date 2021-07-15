import { showToast } from '@tarojs/taro'
import { axios } from 'taro-axios'

const cacheRequestMap = new WeakMap()

interface CreateServiceConfig {
  setHeaderAuthorization: Function,
  refreshToken: Function,
  logout: Function,
  showError: Function
}

function createService(options, {
  setHeaderAuthorization, refreshToken, logout, showError,
}: CreateServiceConfig) {
  const errorHandler = {
    // accessToken校验失败，重新获取accessToken
    async 401(instance, error) {
      // 重新请求接口
      const { config } = error || {}
      const cacheRequests = cacheRequestMap.get(instance)
      try {
        // 缓存其他正在请求的接口
        if (instance.isRefreshing) {
          return new Promise((resolve) => {
            cacheRequests.push(() => {
              setHeaderAuthorization(config, true)
              resolve(instance(config))
            })
          })
        }

        // 使用freshToken刷新接口
        instance.isRefreshing = true
        await refreshToken().finally(() => {
          instance.isRefreshing = false
        })

        setHeaderAuthorization(config, true)

        // 拿到新的accessToken之后执行当前期间被缓存的接口
        cacheRequests.forEach((cb) => {
          cb()
        })
        cacheRequestMap.set(instance, [])
        return instance(config)
      } catch (e) {
        // 移动端静默重新登录
        return logout().then(() => {
          window.location.reload()
        })
      }
    },
  }
  const service = axios.create({
    timeout: 10000,
    ...options,
  })

  cacheRequestMap.set(service, [])
  service.interceptors.request.use((config) => {
    setHeaderAuthorization(config)
    return config
  })

  service.interceptors.response.use(
    (response) => {
      const { data } = response
      const isInValidCode = data.code && data.code !== 200
      if (!isInValidCode) return response

      showError(`${data.msg}`)

      return Promise.reject(new Error(data.msg || 'error'))
    },
    // 响应失败消息提示框抛出异常
    (error) => {
      if (!error) return Promise.reject(error)
      const { response } = error || {}
      const { status } = response || {}
      const handler = errorHandler[status]

      if (handler) {
        return handler(service, error)
      }
      showError(`请求失败：${error.message}`)
      return Promise.reject(error)
    },
  )
  return service
}

export interface BaseResponse<T> {
  code: number,
  data: T,
  msg: string
}

// 错误提示
let errorTimer
const service = createService({
<<<<<<< HEAD
  baseURL: `${process.env.API_URL}/api`,
=======
  baseURL: SERVICE_URL,
>>>>>>> feature/rm20210727
}, {
  setHeaderAuthorization(config) {
    // const accessToken = tokenModel.get()

    // if ((accessToken && !config.headers.Authorization)) {
    //   config.headers.Authorization = `Bearer ${accessToken}`
    // }

    // config.headers['login-user'] = process.env.NODE_ENV === 'development' ? '111' : getPvUid()

    return config
  },
  showError(msg) {
    clearTimeout(errorTimer)
    errorTimer = setTimeout(() => {
      showToast({
        title: msg
      })
    }, 100)
  },
  refreshToken: () => { },
  logout: () => { }
  // refreshToken: () => store.dispatch(refreshToken()),
  // logout: () => store.dispatch(logout()),
})

export default service


// import { axios, PostData, FileData } from 'taro-axios'

// async function uploadImage() {
//   const { tempFilePaths } = await Taro.chooseImage({ count: 1 })
//   Taro.showLoading({ title: '图片上传中...' })
//   const res = await axios.post(
//     'https://sm.ms/api/upload',
//     new PostData({
//       smfile: new FileData(tempFilePaths[0]),
//       ssl: true,
//       format: 'json',
//     }),
//   )
//   Taro.hideLoading()
//   Taro.showModal({
//     title: '返回结果',
//     content: JSON.stringify(res.data),
//   })
// }