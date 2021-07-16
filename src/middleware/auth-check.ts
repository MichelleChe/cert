import Taro from '@tarojs/taro'
import { Middleware, Router } from 'tarojs-router-next'

const AuthCheck: Middleware<{ requiresAuth: boolean }> = async (ctx, next) => {
  if (ctx.route.ext?.requiresAuth) {
    const token = Taro.getStorageSync('token')
    if (!token) {
      const { confirm } = await Taro.showModal({
        title: '提示',
        content: '请先登录',
      })

      // if (confirm) Router.
      Router.toLogin({
        params: {id: 1, name: 'huhu'},
        data: {
          users: [{
            id: 2,
            name: 'hhh'
          }]
        }
      })

      throw Error('该页面必须要登陆：' + ctx.route.url)
    }
  }

  await next()
}

export default AuthCheck