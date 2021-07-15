export type Params = {
  id: number
  name: string
}

export type Data = {
  users: {
    id: number
    name: string
  }[]
}

// 定义附加数据可以在路由中间件中获取到该数据
export const Ext = {
  requiresAuth: true
}