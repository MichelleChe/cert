import { Middleware, registerMiddleware } from 'tarojs-router-next'
import Taro from '@tarojs/taro'
import { sleep } from '.'

type Meta = {
  requiresAuth: boolean
}



export const AuthCheck: Middleware<Meta> = async (ctx, next) => {
  const { ext, url } = ctx.route

  if (ext?.requiresAuth) {
    const token = Taro.getStorageSync('token')
    if (!token) {
      await sleep(1000)
    }
  }

  // await next()
}

registerMiddleware(AuthCheck)