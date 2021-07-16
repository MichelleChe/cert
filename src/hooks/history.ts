type History = {
  pushWithName: (url, params) => void
  replaceWithName: (pathName, param) => void
}

function paramsToString(obj: object) {
  if (!obj) return ''
  const params = Object.keys(obj).map((key) => `${key}=${obj[key]}`).join('&')
  return `?${params}`
}

function formatURL(pathName, params) {
  const url = `/pages/page/path/${pathName}${paramsToString(params)}`
  return url
}

const useHistory = () => {
  const history:History = {
    pushWithName: () => {},
    replaceWithName: () => {}
  }

  history.pushWithName = (pathName, params) => {
    const url = `/pages/page/path/${pathName}${paramsToString(params)}`
    Taro.navigateTo({
      url
    })
  }

  history.replaceWithName = (pathName, params) => {
    const url = `/pages/page/path/${pathName}${paramsToString(params)}`
    Taro.redirectTo({
      url
    })
  }

  return history
}

export default useHistory