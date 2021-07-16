  
import { Middleware } from 'tarojs-router-next'
import Taro from '@tarojs/taro'
import { sleep } from '../util'
import useStores from '../store'

const FetchInfo: Middleware<{ mustLogin: boolean }> = async (ctx, next) => {
  const token = Taro.getStorageSync('token')
  const { userStore } = useStores()

  if (token && !userStore.userinfo) {
    // 请求用户信息
    Taro.showLoading({ title: '请求用户信息中' })
    await sleep(1000)
    userStore.userinfo = {
      id: 11,
      name: 'lblblong',
    }
    Taro.hideLoading()
  }

  await next()
}

export default FetchInfo