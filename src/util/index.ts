export function getNodeDev() {
  return process.env.NODE_ENV
}

export function isDev() {
  return process.env.NODE_ENV === 'development'
}

function paramsToString(obj: object) {
  if (!obj) return ''
  const params = Object.keys(obj).map((key) => `${key}=${obj[key]}`).join('&')
  return `?${params}`
}

export function navigateTo(pathName, params) {
  const url = `/pages/page/path/${pathName}${paramsToString(params)}`
  Taro.navigateTo({
    url
  })
}

export function redirectTo(pathName, params) {
  const url = `/pages/page/path/${pathName}${paramsToString(params)}`
  Taro.redirectTo({
    url
  })
}